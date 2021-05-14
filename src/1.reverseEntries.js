// 1. Write function that will do reverse operation for `Object.entries`

const fromPairs = (arr) => {
  const result = {}
  for (let i = 0; i < arr.length; i++) {
    result[arr[i][0]] = arr[i][1]
  }

  return result
}

const fromPair = fromPairs([
  ['a', 1],
  ['b', 2],
])

console.log(fromPair)
// => { 'a': 1, 'b': 2 }
