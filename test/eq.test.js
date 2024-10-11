import { expect } from 'chai';
import eq from '../COMP.SE.200-2024-2025-1/src/eq.js';

describe('eq.js', () => {
  it('should return true for the same object reference', () => {
    const object = { 'a': 1 };
    expect(eq(object, object)).to.be.true;
  });

  it('should return false for different object references with the same properties', () => {
    const object1 = { 'a': 1 };
    const object2 = { 'a': 1 };
    expect(eq(object1, object2)).to.be.false;
  });

  it('should return true for identical string values', () => {
    expect(eq('a', 'a')).to.be.true;
  });

  it('should return true for a string and its object wrapper', () => {
    expect(eq('a', Object('a'))).to.be.true;
  });

  it('should return true for NaN compared to NaN', () => {
    expect(eq(NaN, NaN)).to.be.true;
  });

  it('should return true for identical numbers', () => {
    expect(eq(1, 1)).to.be.true;
  });

  it('should return false for different numbers', () => {
    expect(eq(1, 2)).to.be.false;
  });

  it('should return true for identical boolean values', () => {
    expect(eq(true, true)).to.be.true;
    expect(eq(false, false)).to.be.true;
  });

  it('should return false for different boolean values', () => {
    expect(eq(true, false)).to.be.false;
  });

  it('should return true for null compared to null', () => {
    expect(eq(null, null)).to.be.true;
  });

  it('should return true for undefined compared to undefined', () => {
    expect(eq(undefined, undefined)).to.be.true;
  });

  it('should return true for null compared to undefined', () => {
    expect(eq(null, undefined)).to.be.true;
  });
});