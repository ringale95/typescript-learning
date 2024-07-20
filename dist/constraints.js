"use strict";
let objects = [1, 2, 3, 2];
let predicate = (value, index, obj) => { console.log(`Value: ${value} Index: ${index} obj: ${typeof obj}`); return value; };
let filtered = objects.find(predicate);
console.log(filtered);
//# sourceMappingURL=constraints.js.map