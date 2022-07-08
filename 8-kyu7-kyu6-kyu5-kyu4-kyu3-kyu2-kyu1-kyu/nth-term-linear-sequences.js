function nthTermOf(sequence) {
  return (sequence[1] - sequence[0]) + "n + " + (sequence[0] - sequence[1] + sequence[0])
}