import { knightMoves, Node, isArrayEqual, Queue } from "./knightsTravails.js";

describe("Knight Moves", () => {
  test("Default", () => {
    expect(knightMoves([0, 0], [1, 2])).toStrictEqual([
      [0, 0],
      [1, 2],
    ]);
  });

  test("To center", () => {
    expect(knightMoves([0, 0], [3, 3])).toStrictEqual([
      [0, 0],
      [2, 1],
      [3, 3],
    ]);
  });

  test("To base", () => {
    expect(knightMoves([3, 3], [0, 0])).toStrictEqual([
      [3, 3],
      [1, 2],
      [0, 0],
    ]);
  });

  test("0,0 to 6,2", () => {
    expect(knightMoves([0, 0], [6, 2])).toStrictEqual([
      [0, 0],
      [2, 1],
      [4, 2],
      [5, 4],
      [6, 2],
    ]);
  });

  test("0,0 to 7,0", () => {
    expect(knightMoves([0, 0], [7, 0])).toStrictEqual([
      [0, 0],
      [2, 1],
      [4, 2],
      [6, 3],
      [5, 1],
      [7, 0],
    ]);
  });

  test("0,0 to 7,7", () => {
    expect(knightMoves([0, 0], [7, 7])).toStrictEqual([
      [0, 0],
      [2, 1],
      [4, 2],
      [6, 3],
      [5, 1],
      [7, 0],
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
    const queue = Queue();
    queue.enqueue([[0, 0]]);
    queue.enqueue([[1, 2]]);
    expect(queue.dequeue()).toStrictEqual([[0, 0]]);
  });
});
