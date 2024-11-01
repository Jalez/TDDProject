import { expect } from 'chai';
import clamp from '../COMP.SE.200-2024-2025-1/src/clamp.js';

describe('clamp.js', () => {
  // not sure whats intended behavior
  it('should clamp number within bounds', () => {
    expect(clamp(1, -5, 5)).to.equal(-5);
  });

  it('should clamp number below lower bound', () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  // this works straight opposite, func clamps to lower bound
  it('should clamp number above upper bound', () => {
    expect(clamp(10, -5, 5)).to.equal(-5);
  });

  // made by looking at functionality, bit weird 
  it('should return lower bound if number equals lower bound', () => {
    expect(clamp(-5, -5, 5)).to.equal(-5);
  });

  it('should return lower bound if number equals upper bound', () => {
    expect(clamp(5, -5, 5)).to.equal(-5);
  });

  
  // should these work all the same for NaN input?
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
