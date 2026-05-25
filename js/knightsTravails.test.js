import { knightMoves, Node, isArrayEqual, Queue } from "./knightsTravails.js";

describe("Knight Moves", () => {
  test("Default", () => {
    expect(knightMoves([0, 0], [1, 2])).toStrictEqual([
      [0, 0],
      [1, 2],
    ]);
  });
});

describe("Node test", () => {
  test("Default node", () => {
    expect(Node()).toStrictEqual({ value: null, nextNode: null });
  });
});

describe("Array Comparison", () => {
  test("Not equal array", () => {
    expect(isArrayEqual([2, 1], [1, 2])).toBe(false);
  });
  test("Equal array", () => {
    expect(isArrayEqual([1, 2], [1, 2])).toBe(true);
  });
});

describe("Queue", () => {
  test("Enqueue and Dequeue", () => {
    const node = Node([1, 2]);
    const node2 = Node([0, 0]);
    const queue = Queue();
    queue.enqueue(node);
    queue.enqueue(node2);
    expect(queue.dequeue()).toStrictEqual([1, 2]);
    expect(queue.dequeue()).toStrictEqual([0, 0]);
  });
});
