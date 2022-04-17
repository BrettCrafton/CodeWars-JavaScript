class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sortedArray = args.sort((a,b) => a-b)
      return sortedArray[0]
    }
  }