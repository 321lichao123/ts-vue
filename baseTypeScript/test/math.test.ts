/*
 * @Author: your name
 * @Date: 2019-11-18 22:37:54
 * @LastEditTime: 2019-11-18 22:43:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \baseTypeScript\test\math.test.ts
 */
const math = require('../src/math');

test('add1: 1 + 1 = 2', () => {
    expect(math.add1(1, 1).toBe(2));
})

test('sub: 1 - 2 = -1', () => {
    expect(math.sub(1, 2).tobe(-1));
})

