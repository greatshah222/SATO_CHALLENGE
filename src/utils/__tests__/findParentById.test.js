import { findParentById } from '../index';

describe('findParentById', () => {
  const data = { id: 1, items: [{ id: 2 }, { id: 3, items: [{ id: 4 }] }, { id: 6, items: [{ id: 7 }] }] };
  test("should not find root's parent", () => {
    expect(findParentById(1, data)).toBeUndefined();
  });
  test("should find child's parent", () => {
    expect(findParentById(2, data)).toEqual(data);
    expect(findParentById(3, data)).toEqual(data);
  });
  test("should find child's parent from deep and middle", () => {
    expect(findParentById(4, data)).toEqual({ id: 3, items: [{ id: 4 }] });
  });
  test("should find child's parent from deep and end", () => {
    expect(findParentById(7, data)).toEqual({ id: 6, items: [{ id: 7 }] });
  });
  test('should return undefined if id is not found', () => {
    expect(findParentById(5, data)).toBeUndefined();
  });
});
