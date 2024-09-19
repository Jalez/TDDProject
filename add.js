/** @format */

import createMathOperation from './COMP.SE.200-2024-2025-1/src/.internal/createMathOperation.js';

/**
 * Adds two numbers.
 *
 * @since 3.4.0
 * @category Math
 * @param {number} augend The first number in an addition.
 * @param {number} addend The second number in an addition.
 * @returns {number} Returns the total.
 */
const add = createMathOperation((augend, addend) => augend + addend, 0);

export default add;
