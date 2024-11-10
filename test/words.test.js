// test/words.test.js

import { expect } from "chai";
import words from "../COMP.SE.200-2024-2025-1/src/words.js";

describe("words.js", function () {
  it("should split a simple sentence into words", function () {
    const result = words("fred, barney, & pebbles");
    expect(result).to.deep.equal(["fred", "barney", "pebbles"]);
  });

  it("should handle multiple spaces and punctuation", function () {
    const result = words("Hello, world! How are you?");
    expect(result).to.deep.equal(["Hello", "world", "How", "are", "you"]);
  });

  it("should return an empty array for empty string", function () {
    const result = words("");
    expect(result).to.deep.equal([]);
  });

  it("should handle null pattern gracefully ", function () {
    const result = words("", null);
    expect(result).to.deep.equal([]);
  });

  //Do one where null pattern and words
  // it("should handle null string gracefully ", function () {
  //   const result = words("Hello, world! How are you?", null);
  //   expect(result).to.deep.equal(["Hello", "world", "How", "are", "you"]);
  // });

  it("should handle undefined pattern gracefully ", function () {
    const result = words("", undefined);
    expect(result).to.deep.equal([]);
  });

  it("should handle undefined string gracefully ", function () {
    const result = words("Hello, world! How are you?", undefined);
    expect(result).to.deep.equal(["Hello", "world", "How", "are", "you"]);
  })


  it("should split words with Unicode characters", function () {
    const result = words("Привет мир"); // 'Hello world' in Russian
    expect(result).to.deep.equal(["Привет", "мир"]);
  });

  it("should split camelCase words", function () {
    const result = words("camelCaseString");
    expect(result).to.deep.equal(["camel", "Case", "String"]);
  });

  it("should use a custom pattern if provided", function () {
    const result = words("fred, barney, & pebbles", /[^, ]+/g);
    expect(result).to.deep.equal(["fred", "barney", "&", "pebbles"]);
  });

  it("should handle apostrophes in words", function () {
    const result = words("It's a beautiful day");
    expect(result).to.deep.equal(["It's", "a", "beautiful", "day"]);
  });

  it("should handle numbers and alphanumeric words", function () {
    const result = words("Version 2.0.1 is released");
    expect(result).to.deep.equal(["Version", "2", "0", "1", "is", "released"]);
  });
});
