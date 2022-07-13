solution = (arr_val, arr_unit) => {
  const mass = {"kg": 1, "g": .001, "mg" :.000001, "μg": .000000001, "lb": .453592}
  const distance = {"m":1 ,"cm": .01, "mm":.001, "μm":.000001, "ft":.3048}
 return (6.67 * Math.pow(10, -11) * mass[arr_unit[0]] * arr_val[0] * mass[arr_unit[1]] * arr_val[1]) / (distance[arr_unit[2]] * arr_val[2] * distance[arr_unit[2]] * arr_val[2])
};