# __OBJECT METHODS / JSON__

## Source map

* Source
  * jsInfo
    * 1.objectToJSON.js
    * 2.excludeBackRefs.js
  * reverseEntries.js
  * getHeadTail.js
  * getHeadTail.v2.js
  * zipIntoObject.js
  * groupSomeRule.js    
* README.md

---

### __JAVASCRIPT INFO__

1. Turn the user into JSON and then read it back into another variable.

```js
  let user = {
    name: "John Smith",
    age: 35
  };
```
[Decision](./src/jsInfo/1.objectToJSON.js)

---

2. In simple cases of circular references, we can exclude an offending property from serialization by its name.
But sometimes we can’t just use the name, as it may be used both in circular references and normal properties. So we can check the property by its value.
Write replacer function to stringify everything, but remove properties that reference meetup:

```js
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };

  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;

  alert( JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
  }));

  /* result should be:
  {
    "title":"Conference",
    "occupiedBy":[{"name":"John"},{"name":"Alice"}],
    "place":{"number":23}
  }
  */
```
[Decision](./src/jsInfo/2.excludeBackRefs.js)

---

1. Write function that will do reverse operation for `Object.entries`

```js
  fromPairs([
    ["a", 1],
    ["b", 2],
  ]);
  // => { 'a': 1, 'b': 2 }
```
[Decision](./src/1.reverseEntries.js)

---

2. Write functions that will return `head` and `tail` of Array

```js
  getHead([1, 2, 3]);
  // => [1]
  getTail([1, 2, 3]);
  // => [2, 3]
```

[Decision](./src/2.getHeadTail.js)

[Decision v2](./src/2.getHeadTail.v2.js)

---

3. Write function that will zip arrays into object

```js
  zipObject(["a", "b", "c"], [1, 2]);
  // => { 'a': 1, 'b': 2, c: null }
```

[Decision](./src/3.zipIntoObject.js)

---

4. Write function that will group by some rule

```js
  groupBy([6.1, 4.2, 6.3], Math.floor);
  // => { '4': [4.2], '6': [6.1, 6.3] }
  groupBy(["one", "two", "three"], (i) => i.length);
  // => { '3': ['one', 'two'], '5': ['three'] }
```

[Decision](./src/4.groupSomeRule.js)