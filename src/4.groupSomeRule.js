// Write function that will group by some rule

const groupBy = (items, callback) => {
  const resultObj = items.reduce((acc, currentItem) => {
    const key = callback(currentItem)
    const value = currentItem
  
    key in acc ? acc[key].push(value) : (acc[key] = [value])
  
    return acc
  }, {})

  return resultObj
}

console.log(groupBy([6.1, 4.2, 6.3, 5.4, 8.3, 6.1], Math.floor))
// => { '4': [4.2], '6': [6.1, 6.3] }
console.log(groupBy(['one', 'two', 'three'], (i) => i.length))
// => { '3': ['one', 'two'], '5': ['three'] }
