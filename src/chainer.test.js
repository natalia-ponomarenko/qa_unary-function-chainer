'use strict';

describe('chainer', () => {
  const { chainer } = require('./chainer');
  let callback1, callback2, callback3, input;

  beforeEach(() => {
    callback1 = jest.fn((x) => x * 2);
    callback2 = jest.fn((x) => x + 2);
    callback3 = jest.fn((x) => Math.pow(x, 2));
    input = 0;
  });

  it('should be declared', () => {
    expect(chainer).toBeInstanceOf(Function);
  });

  it('should call every callback once', () => {
    callback3(callback2(callback1(input)));

    expect(callback1).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
    expect(callback3).toHaveBeenCalledTimes(1);
  });

  it('should return correct result value', () => {
    const result = callback3(callback2(callback1(input)));

    expect(result).toBe(4);
  });

  it('should return undefined if no arguments were passed', () => {
    expect(chainer([])()).toBeUndefined();
  });
});
