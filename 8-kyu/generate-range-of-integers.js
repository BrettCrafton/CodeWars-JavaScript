generateRange = (min, max, step) => [...Array(Math.floor((max - min) / step + 1))].map((x, i) => x = i = 0? min: min + step * i)