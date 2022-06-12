function printStars(rows, columns) {
  return rows>0 && columns>0 ? Array(rows).fill("*".repeat(columns)).join("\n") : ""
}