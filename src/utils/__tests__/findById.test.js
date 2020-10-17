import { findById } from '../index';

describe('findById', () => {
  const data = [{ id: 1, items: [{ id: 2 }, { id: 3, items: [{ id: 4 }] }] }];
  test('should find id', () => {
    expect(findById(1, data)).toEqual(data[0]);
  });
  test('should find id from child', () => {
    expect(findById(2, data)).toEqual({ id: 2 });
    expect(findById(3, data)).toEqual({ id: 3, items: [{ id: 4 }] });
    expect(findById(4, data)).toEqual({ id: 4 });
  });
  test('should return undefined if node is not found', () => {
    expect(findById(5, data)).toBeUndefined();
  });
});
