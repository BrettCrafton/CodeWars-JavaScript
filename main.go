package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/gocolly/colly"
)

type ChallengeResponse struct {
	TotalItems int
	TotalPages int
	Challenges []Challenge `json:"data"`
}

type Challenge struct {
	Id                 string
	Name               string
	Slug               string
	Rank               string
	CompletedLanguages []string
	Code               string
}

func main() {
	var username string
	flag.StringVar(&username, "u", "", "codewars username")
	var sessionId string
	flag.StringVar(&sessionId, "s", "", "session id")
	var outDir string
	flag.StringVar(&outDir, "o", "out", "output directory where files will be saved")
	var limit int
	flag.IntVar(&limit, "l", 0, "if set limits how much files will be downloaded")
	var timeout int
	flag.IntVar(&timeout, "t", 10, "timeout in seconds for each request")
	flag.Parse()

	if username == "" || sessionId == "" {
		flag.Usage()
		return
	}

	collector := colly.NewCollector()
	collector.SetRequestTimeout(time.Duration(timeout) * time.Second)

	collector.OnRequest(func(r *colly.Request) {
		fmt.Println("visiting", r.URL.String())
	})

	url := fmt.Sprintf("https://www.codewars.com/api/v1/users/%s/code-challenges/completed", username)
	body := getResponseBody(url)

	cookie := http.Cookie{Name: "_session_id", Value: sessionId}
	collector.SetCookies("https://www.codewars.com", []*http.Cookie{&cookie})

	res := new(ChallengeResponse)
	if err := json.Unmarshal(body, &res); err != nil {
		log.Fatal(err)
	}

	for i, c := range res.Challenges {
		if limit > 0 && i >= limit {
			return
		}

		url := fmt.Sprintf("https://www.codewars.com/kata/%s/solutions/%s/me", c.Id, c.CompletedLanguages[0])

		collector.OnHTML("#shell_content", func(e *colly.HTMLElement) {
			c.Rank = e.ChildText(".inner-small-hex > span")
		})

		collector.OnHTML("#solutions_list", func(e *colly.HTMLElement) {
			c.Code = e.ChildText("code")
		})

		collector.Visit(url)
		collector.Wait()

		writeFile(outDir, c)
	}
}

func getResponseBody(url string) []byte {
	client := http.Client{
		Timeout: time.Second * 5,
	}

	req, err := http.NewRequest(http.MethodGet, url, nil)
	if err != nil {
		log.Fatal(err)
	}

	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}

	if res.Body != nil {
		defer res.Body.Close()
	}

	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	return body
}

func writeFile(directory string, challenge Challenge) {
	extensions := map[string]string{
		"rust":       "rs",
		"javascript": "js",
		"typescript": "ts",
		"python":     "py",
		"go":         "go",
		"cpp":        "cpp",
		"c":          "c",
		"java":       "java",
	}

	dirName := "retired"
	if len(challenge.Rank) > 0 {
		dirName = strings.Replace(challenge.Rank, " ", "-", -1)
	}
	directory = fmt.Sprintf("%s/%s/", directory, dirName)
	if err := os.MkdirAll(directory, os.ModePerm); err != nil {
		log.Fatal(err)
	}
	filename := challenge.Slug + "." + extensions[challenge.CompletedLanguages[0]]
	if err := os.WriteFile(directory+filename, []byte(challenge.Code), 0644); err != nil {
		log.Fatal(err)
	}

	fmt.Println(directory+filename, "written")
}
