'use strict';
/**
 * @param {function[]} functions
 *
 * @returns {function}
 */

function chainer(functions) {
  return (x) => {
    let result = x;

    for (const f of functions) {
      result = f(result);
    }

    return result;
  };
}

console.log(chainer(0));

module.exports = { chainer };
