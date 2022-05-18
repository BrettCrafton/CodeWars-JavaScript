function getSize(width, height, depth) {
  let volume = ( width * height * depth);
  let area = 2 * ( (width * height) + (height * depth) + (width * depth) );
  return [area, volume];
}