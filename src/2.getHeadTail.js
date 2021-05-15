// Write functions that will return `head` and `tail` of Array

const getHead = (numbers) => {
  let [head, ] = [...numbers]

  return [head]
}
const getTail = (numbers) => {
  let [, ...tail] = [...numbers]

  return tail
}

console.log(getHead([1, 2, 3])) // => [1]
console.log(getTail([1, 2, 3, 5, 6])) // => [2, 3]

