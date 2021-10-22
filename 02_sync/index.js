class Lodash {
  compact(array) {
    return array.filter(el => el)
  }

  groupBy(array, groupBy) {
    return array.reduce((acc, i) => {
      const key = typeof groupBy === 'function' ? groupBy(i) : i[groupBy]

      if(!acc[key]) {
        acc[key] = []
      }
      acc[key].push(i)
      return acc
    }, {})
  }
}

module.exports = {
  Lodash
}