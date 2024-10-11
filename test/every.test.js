import { expect } from 'chai';
import every from '../COMP.SE.200-2024-2025-1/src/every.js';

describe('every.js', () => {
  it('should return true for an empty array', () => {
    expect(every([], Boolean)).to.be.true;
  });

  it('should return true if all elements pass the predicate', () => {
    expect(every([1, 2, 3], x => x > 0)).to.be.true;
  });

  it('should return false if any element fails the predicate', () => {
    expect(every([1, 2, 3], x => x > 2)).to.be.false;
  });

  it('should return false for an array with mixed values', () => {
    expect(every([true, 1, null, 'yes'], Boolean)).to.be.false;
  });

  it('should return true for an array with all truthy values', () => {
    expect(every([true, 1, 'yes'], Boolean)).to.be.true;
  });

  it('should handle arrays with NaN values correctly', () => {
    expect(every([NaN, NaN], x => x !== x)).to.be.true; // NaN is not equal to itself
  });

  it('should handle arrays with undefined values correctly', () => {
    expect(every([undefined, undefined], x => x === undefined)).to.be.true;
  });

  it('should handle arrays with null values correctly', () => {
    expect(every([null, null], x => x === null)).to.be.true;
  });

  it('should handle arrays with mixed types correctly', () => {
    expect(every([1, '1', true], x => typeof x === 'number' || typeof x === 'string' || typeof x === 'boolean')).to.be.true;
  });

  it('should return true if the array is null or undefined', () => {
    expect(every(null, Boolean)).to.be.true;
    expect(every(undefined, Boolean)).to.be.true;
  });
});