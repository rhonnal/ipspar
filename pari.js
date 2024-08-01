function isRepeatRef(field, array) {
  const seenValues = new Set();

  function getValue(obj, fieldPath) {
    return fieldPath.reduce((o, key) => (o && o[key] !== 'undefined') ? o[key] : undefined, obj);
  }

  for (const item of array) {
    const value = getValue(item, field.split('.'));
    if (value !== undefined) {
      if (seenValues.has(value)) {
        return true; // Found a repeated reference
      }
      seenValues.add(value);
    }
  }

  return false; // No repeated references found
}

// Example usage with nested objects:
const data = [
  { id: 1, info: { ref: 'A' } },
  { id: 2, info: { ref: 'B' } },
  { id: 3, info: { ref: 'A' } }, // 'A' is repeated
  { id: 4, info: { ref: 'C' } }
];

console.log(isRepeatRef('info.ref', data)); // Output: true
