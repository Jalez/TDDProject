import add from '../add.js';
import { expect } from 'chai';


describe('add.js', function () {
  it('should return the sum of two positive numbers', function () {
    const result = add(6, 4);
    expect(result).to.equal(10);
  });

  it('should return the sum of a positive and a negative number', function () {
    const result = add(6, -4);
    expect(result).to.equal(2);
  });

  it('should return the sum of two negative numbers', function () {
    const result = add(-6, -4);
    expect(result).to.equal(-10);
  });

  it('should return 0 when both arguments are 0', function () {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });

  it('should handle decimal numbers correctly', function () {
    const result = add(0.1, 0.2);
    expect(result).to.be.closeTo(0.3, 0.0001);
  });

  // it('should return NaN when a non-number is provided', function () {
  //   const result = add(6, 'a');
  //   expect(result).to.be.NaN;
  // });

  it('should return the original number when adding zero', function () {
    const result = add(6, 0);
    expect(result).to.equal(6);
  });

  it('should return default value when no arguments are provided', function () {
    const result = add();
    expect(result).to.equal(0);
  });
});
