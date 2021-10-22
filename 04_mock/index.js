function map(array, fn) {
  const res = []

  for(let i = 0; i < array.length; i++) {
    res.push(fn(array[i]))
  }

  return res
}

module.exports = {
  map
}