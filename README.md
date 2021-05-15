# __OBJECT METHODS / JSON__

## Source map

* Source
  * reverseEntries.js
  * getHeadTail.js
  * getHeadTail.v2.js
  * zipIntoObject.js
  * groupSomeRule.js    
* README.md

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