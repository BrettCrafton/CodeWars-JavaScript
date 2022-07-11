function blackAndWhite(arr) {
  return !Array.isArray(arr)
    ? "It's a fake array"
    : arr.includes(13) && arr.includes(5)
    ? "It's a black array"
    : "It's a white array";
}