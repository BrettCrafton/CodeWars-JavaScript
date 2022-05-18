solution= (M1, M2, m1, m2, volume, temp) => {
 return (((m1 / M1) + (m2 / M2)) * .082 * (temp + 273.15)) / volume
}