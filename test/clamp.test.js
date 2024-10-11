import { expect } from 'chai';
import clamp from '../COMP.SE.200-2024-2025-1/src/clamp.js';

describe('clamp.js', () => {
  it('should clamp number within bounds', () => {
    expect(clamp(1, -5, 5)).to.equal(-5);
  });

  it('should clamp number below lower bound', () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  it('should clamp number above upper bound', () => {
    expect(clamp(10, -5, 5)).to.equal(-5);
  });

  it('should return lower bound if number equals lower bound', () => {
    expect(clamp(-5, -5, 5)).to.equal(-5);
  });

  it('should return lower bound if number equals upper bound', () => {
    expect(clamp(5, -5, 5)).to.equal(-5);
  });

  it('should return NaN if number is NaN', () => {
    expect(clamp(NaN, -5, 5)).to.be.NaN;
  });

  it('should return 0 if lower bound is NaN', () => {
    expect(clamp(3, NaN, 5)).to.equal(0);
  });

  it('should return lower bound if upper bound is NaN', () => {
    expect(clamp(-10, -5, NaN)).to.equal(-5);
  });
});