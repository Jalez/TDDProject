import { expect } from 'chai';
import map from '../COMP.SE.200-2024-2025-1/src/map.js';

describe('map.js', () => {
  it('should map values using the iteratee function', () => {
    function square(n) {
      return n * n;
    }
    const result = map([4, 8], square);
    expect(result).to.deep.equal([16, 64]);
  });

  it('should return an empty array when input array is null', () => {
    const result = map(null, x => x);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array when input array is undefined', () => {
    const result = map(undefined, x => x);
    expect(result).to.deep.equal([]);
  });

  it('should return an empty array when input array is empty', () => {
    const result = map([], x => x);
    expect(result).to.deep.equal([]);
  });

  it('should pass the correct arguments to the iteratee function', () => {
    const iteratee = (value, index, array) => {
      expect(array[index]).to.equal(value);
      return value;
    };
    map([1, 2, 3], iteratee);
  });

  it('should handle non-numeric values correctly', () => {
    const result = map(['a', 'b', 'c'], x => x.toUpperCase());
    expect(result).to.deep.equal(['A', 'B', 'C']);
  });

  it('should handle complex iteratee functions', () => {
    const iteratee = (value, index) => value + index;
    const result = map([1, 2, 3], iteratee);
    expect(result).to.deep.equal([1, 3, 5]);
  });
});