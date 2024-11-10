<!-- @format -->

# Test Driven Development (TDD) Project
[![Coverage Status](https://coveralls.io/repos/github/Jalez/TDDProject/badge.svg?branch=main)](https://coveralls.io/github/Jalez/TDDProject?branch=main)
## Project Description

This project is a simple demonstration of Test Driven Development (TDD) using JavaScript.

## UML Diagrams

[Platform for creating UML diagrams](https://www.websequencediagrams.com/)

## Tests for the project (examples)

### Explanation of Tests for add.js

[add.test.js](./test/add.test.js)

    Test 1: Checks the addition of two positive numbers.
    Test 2: Checks the addition of a positive and a negative number.
    Test 3: Checks the addition of two negative numbers.
    Test 4: Checks the addition when both numbers are zero.
    Test 5: Checks the addition of decimal numbers, accounting for floating-point precision.
    Test 6: Ensures adding zero returns the original number.
    Test 7: Checks the default value when no arguments are provided.


### Explanation of Tests for filter.js

[filter.test.js](./test/filter.test.js)

    Test 1-3: Validates basic filtering with numeric arrays.
    Test 4: Checks behavior when the input array is null.
    Test 5: Filters objects based on a property (active).
    Test 6: Confirms that an empty array input returns an empty array.
    Test 7: Demonstrates that the predicate can utilize the index parameter.
    Test 8: Handles arrays containing undefined elements.


