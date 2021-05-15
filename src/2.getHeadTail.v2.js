// Write functions that will return `head` and `tail` of Array

const getHeadTail = (numbers, getArg) => {
  let [head, ...tail] = [...numbers]

  return getArg === 'head' ? [head] : tail
}

console.log(getHeadTail([1, 2, 3], 'head')) // => [1]
console.log(getHeadTail([1, 2, 3, 5, 6], 'tail')) // => [2, 3]
