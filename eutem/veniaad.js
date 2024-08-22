let obj = {};

Object.defineProperty(obj, 'name', {
    value: 'DATE',
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(obj.name);  // Output: 'DATE'
