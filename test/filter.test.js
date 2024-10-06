// test/filter.test.js

import { expect } from 'chai';
import filter from '../COMP.SE.200-2024-2025-1/src/filter.js'



describe('filter.js', function() {

  it('should filter array with predicate returning true for even numbers', function() {
    const numbers = [1, 2, 3, 4, 5]
    const result = filter(numbers, n => n % 2 === 0)
    expect(result).to.deep.equal([2, 4])
  })

  it('should return empty array when no elements match the predicate', function() {
    const numbers = [1, 3, 5]
    const result = filter(numbers, n => n % 2 === 0)
    expect(result).to.deep.equal([[]])
  })

  it('should return all elements when predicate always returns true', function() {
    const numbers = [1, 2, 3]
    const result = filter(numbers, () => true)
    expect(result).to.deep.equal([1, 2, 3])
  })

  it('should return empty array when given null', function() {
    const result = filter(null, () => true)
    expect(result).to.deep.equal([[]])
  })

  it('should filter objects based on property value', function() {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
      { user: 'pebbles', active: true }
    ]
    const result = filter(users, ({ active }) => active)
    expect(result).to.deep.equal([
      { user: 'barney', active: true },
      { user: 'pebbles', active: true }
    ])
  })

  it('should handle empty array', function() {
    const result = filter([], () => true)
    expect(result).to.deep.equal([[]])
  })

  it('should use index in predicate', function() {
    const numbers = [10, 20, 30]
    const result = filter(numbers, (value, index) => index > 0)
    expect(result).to.deep.equal([20, 30])
  })

  it('should handle array with undefined elements', function() {
    const array = [1, undefined, 3]
    const result = filter(array, value => value !== undefined)
    expect(result).to.deep.equal([1, 3])
  })

})
