import { expect } from 'chai';
import get from '../COMP.SE.200-2024-2025-1/src/get.js';

describe('get.js', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  it('should get the value at the specified path (string path)', () => {
    expect(get(object, 'a[0].b.c')).to.equal(3);
  });

  it('should get the value at the specified path (array path)', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
  });

  it('should return the default value if the resolved value is undefined', () => {
    expect(get(object, 'a.b.c', 'default')).to.equal('default');
  });

  it('should return undefined if the object is null or undefined', () => {
    expect(get(null, 'a.b.c')).to.be.undefined;
    expect(get(undefined, 'a.b.c')).to.be.undefined;
  });

  it('should return the default value if the path does not exist', () => {
    expect(get(object, 'a[0].b.d', 'default')).to.equal('default');
  });

  it('should return the value if the path exists and default value is provided', () => {
    expect(get(object, 'a[0].b.c', 'default')).to.equal(3);
  });

  it('should handle complex paths correctly', () => {
    const complexObject = { 'x': { 'y': { 'z': [ { 'a': 1 }, { 'b': 2 } ] } } };
    expect(get(complexObject, 'x.y.z[1].b')).to.equal(2);
    expect(get(complexObject, ['x', 'y', 'z', '0', 'a'])).to.equal(1);
  });

  it('should return undefined for non-existing paths without default value', () => {
    expect(get(object, 'a[0].b.d')).to.be.undefined;
  });
});