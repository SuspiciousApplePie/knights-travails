
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
