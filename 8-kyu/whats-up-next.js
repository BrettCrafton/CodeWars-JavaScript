function nextItem(xs, item) {
  let found = false
  let answer

  for (const key of xs) {
    if (found) {
      answer = key
      break
    }

    if (key === item) found = true
  }

  return answer
}