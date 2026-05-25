export function knightMoves(start, end) {
  const paths = Queue();
  paths.enqueue([start]);
  const visited = new Set();

  while (true) {
    let path = paths.dequeue();
    let coordinate = path.at(-1);
    let items = [
      NNE(coordinate),
      ENE(coordinate),
      NNW(coordinate),
      WNW(coordinate),
      SSW(coordinate),
      WSW(coordinate),
      ESE(coordinate),
      SSE(coordinate),
    ];

    let match = null;

    items.forEach((item) => {
      let pathCopy = path.slice();
      if (item && !visited.has(item.join(","))) {
        if (isArrayEqual(item, end) && isValidCoordinate(item)) {
          pathCopy.push(item);
          match = pathCopy;
        } else if (isValidCoordinate(item)) {
          pathCopy.push(item);
          paths.enqueue(pathCopy);
          visited.add(item.join(","));
        }
      }
    });
    console.log(match);
    if (match) return match;
  }

  function NNE(coordinates) {
    coordinates = [coordinates.at(0) + 2, coordinates.at(-1) + 1];
    if (isValidCoordinate(coordinates)) return coordinates;
    return;
  }

  function ENE(coordinates) {
    coordinates = [coordinates.at(0) + 1, coordinates.at(-1) + 2];
    if (isValidCoordinate(coordinates)) return coordinates;
    return;
  }

  function NNW(coordinates) {
    coordinates = [coordinates.at(0) + 2, coordinates.at(-1) - 1];
    if (isValidCoordinate(coordinates)) return coordinates;
    return;
  }

  function WNW(coordinates) {
    coordinates = [coordinates.at(0) + 1, coordinates.at(-1) - 2];
    if (isValidCoordinate(coordinates)) return coordinates;
    return;
  }
  function SSW(coordinates) {
    coordinates = [coordinates.at(0) - 2, coordinates.at(-1) - 1];
    if (isValidCoordinate(coordinates)) return coordinates;
    return;
  }

  function WSW(coordinates) {
    coordinates = [coordinates.at(0) - 1, coordinates.at(-1) - 2];
    if (isValidCoordinate(coordinates)) return coordinates;
    return;
  }

  function ESE(coordinates) {
    coordinates = [coordinates.at(0) - 1, coordinates.at(-1) + 2];
    if (isValidCoordinate(coordinates)) return coordinates;
    return;
  }

  function SSE(coordinates) {
    coordinates = [coordinates.at(0) - 2, coordinates.at(-1) + 1];
    if (isValidCoordinate(coordinates)) return coordinates;
    return;
  }

  function isValidCoordinate(coordinates) {
    let isValid = true;
    coordinates.forEach((coordinate) => {
      if (coordinate < 0 || coordinate > 7) {
        isValid = false;
      }
    });
    return isValid;
  }
}

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
        const dequeued = head;
        head = head.nextNode;
        if (!head) tail = head;
        return dequeued.value;
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
