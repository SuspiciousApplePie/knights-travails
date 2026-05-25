export function Node(value = null, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

export function isArrayEqual(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr2[i]) return false;
  }
  return true;
}
