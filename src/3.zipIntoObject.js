// Write function that will zip arrays into object

const zipObject = (keys, values) => {
  const object = keys.reduce((acc, keysItems, index) => {
    const key = keysItems
    const value = values[index]
    acc[key] = value === undefined ? null : value

    return acc
  }, {})

  return object
}

console.log(zipObject(['a', 'b', 'c'], [1, 2]))
// => { 'a': 1, 'b': 2, c: null }
