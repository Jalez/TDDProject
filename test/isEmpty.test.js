// test/isEmpty.test.js

import {expect} from 'chai'
import isEmpty from '../COMP.SE.200-2024-2025-1/src/isEmpty.js'

describe('isEmpty.js', function() {

  it('should return true for null', function() {
    expect(isEmpty(null)).to.be.true
  })

  //Is this necessary?
  it('should return true for undefined', function() {
    expect(isEmpty(undefined)).to.be.true
  })
  
  it('should return true for empty string', function() {
    expect(isEmpty('')).to.be.true
  })

  it('should return false for non-empty string', function() {
    expect(isEmpty('Hello')).to.be.false
  })

  it('should return true for empty array', function() {
    expect(isEmpty([])).to.be.true
  })

  it('should return false for non-empty array', function() {
    expect(isEmpty([1, 2, 3])).to.be.false
  })

  it('should return true for empty object', function() {
    expect(isEmpty({})).to.be.true
  })

  it('should return false for non-empty object', function() {
    expect(isEmpty({ a: 1 })).to.be.false
  })

  it('should return true for boolean true', function() {
    expect(isEmpty(true)).to.be.true
  })

  it('should return true for number zero', function() {
    expect(isEmpty(0)).to.be.true
  })

  it('should return true for symbol', function() {
    expect(isEmpty(Symbol(''))).to.be.true
  })

  it('should return true for function', function() {
    expect(isEmpty(function() {})).to.be.true
  })

  it('should return true for date object', function() {
    expect(isEmpty(new Date())).to.be.true
  })

  it('should return true for object with inherited properties only', function() {
    function Foo() {}
    Foo.prototype.a = 1
    const foo = new Foo()
    expect(isEmpty(foo)).to.be.true
  })

  it('should return true for an object prototype with no own enumerable properties', function() {
    function Proto() {}
    Proto.prototype.b = 2; // Adding property to prototype, not as own property
    const protoInstance = Object.create(Proto.prototype);
    expect(isEmpty(protoInstance)).to.be.true;
  });

  it('should return true for an object prototype with no own properties', function() {
    function Foo() {}
    const proto = Foo.prototype;
    
    // Check if isEmpty considers it empty as expected
    expect(isEmpty(proto)).to.be.true;
  });

  it("should return false for an object prototype with enumerable properties", function() {
    function Foo() {}
    Foo.prototype.a = "1";
    const proto = Foo.prototype;

    // Check if isEmpty considers it non-empty as expected
    expect(isEmpty(proto)).to.be.false;
  });


  it('should return false for object with own properties', function() {
    function Foo() {
      this.a = 1
    }
    const foo = new Foo()
    expect(isEmpty(foo)).to.be.false
  })

  it('should return true for empty Map', function() {
    const map = new Map()
    expect(isEmpty(map)).to.be.true
  })

  it('should return false for non-empty Map', function() {
    const map = new Map()
    map.set('a', 1)
    expect(isEmpty(map)).to.be.false
  })

  it('should return true for empty Set', function() {
    const set = new Set()
    expect(isEmpty(set)).to.be.true
  })

  it('should return false for non-empty Set', function() {
    const set = new Set()
    set.add(1)
    expect(isEmpty(set)).to.be.false
  })

  it('should return true for arguments object with no elements', function() {
    (function() {
      expect(isEmpty(arguments)).to.be.true
    })()
  })

  it('should return false for arguments object with elements', function() {
    (function(a, b) {
      expect(isEmpty(arguments)).to.be.false
    })(1, 2)
  })

})
