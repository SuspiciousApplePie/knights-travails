
export function Queue() {
  let head = null;
  let tail = null;

  return {
    enqueue: (value) => {
      if (!head) {
        head = Node(value);
        tail = head;
      } else {
        tail.nextNode = Node(value);
        tail = tail.nextNode;
      }
    },
    dequeue: () => {
      if (head) {
        const dequeuedValue = head.value;
        head = head.nextNode;
        if (!head) tail = head;

        return dequeuedValue.value;
      }

      return null;
    },
  };
}

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
