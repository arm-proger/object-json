// Turn the object into JSON and back
let user = {
  name: 'John Smith',
  age: 35,
}

const toJSON = JSON.stringify(user)
const JsonParse = JSON.parse(toJSON)

console.log(toJSON) // {"name":"John Smith","age":35}
console.log(JsonParse) // { name: 'John Smith', age: 35 }
