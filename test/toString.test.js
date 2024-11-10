// test/toString.test.js

import { expect } from "chai";
import toString from "../COMP.SE.200-2024-2025-1/src/toString.js";

describe("toString.js", function () {
  // it("should return empty string for null", function () {
  //   expect(toString(null)).to.equal("");
  // });

  // it("should return undefined string for undefined", function () {
  //   expect(toString(undefined)).to.equal("");
  // });

  it("should return undefined string for no parameters", function () {
    expect(toString()).to.equal("undefined");
  });

  it("should return the string itself if already a string", function () {
    expect(toString("Hello")).to.equal("Hello");
  });

  it("should convert number to string", function () {
    expect(toString(123)).to.equal("123");
  });

  it("should convert boolean true to string", function () {
    expect(toString(true)).to.equal("true");
  });

  it("should convert boolean false to string", function () {
    expect(toString(false)).to.equal("false");
  });

  it("should convert array to string recursively", function () {
    expect(toString([1, 2, 3])).to.equal("1,2,3");
  });

  it("should handle nested arrays", function () {
    expect(toString([1, [2, [3]]])).to.equal("1,2,3");
  });

  it("should handle array with null and undefined", function () {
    expect(toString([null, undefined])).to.equal(",");
  });

  it("should convert object to string", function () {
    expect(toString({ a: 1 })).to.equal("[object Object]");
  });

  it("should handle symbol", function () {
    const sym = Symbol("foo");
    expect(toString(sym)).to.equal("Symbol(foo)");
  });

  it('should return "-0" for negative zero', function () {
    expect(toString(-0)).to.equal("-0");
  });

  it("should convert function to string", function () {
    function testFunc() {console.log("Hello world")}
    expect(toString(testFunc)).to.equal(testFunc.toString());
  });

  it("should handle NaN", function () {
    expect(toString(NaN)).to.equal("NaN");
  });

  it("should handle Infinity", function () {
    expect(toString(Infinity)).to.equal("Infinity");
  });

  it("should handle BigInt", function () {
    expect(toString(BigInt(123))).to.equal("123");
  });
});
