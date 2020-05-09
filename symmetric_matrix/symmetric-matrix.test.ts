'use strict';

import * as test from 'tape';
import { isSymmetric } from './symmetric-matrix';

test('The input is symmetric list', t => {
    // Arrange
    let inputList: number[][] = [
        [1, 0, 1],
        [0, 2, 2],
        [1, 2, 5]
      ];

    let expected: boolean = true;

    // Act
    let result: boolean = isSymmetric(inputList);

    // Assert
    t.equal(result, expected);
    t.end();
});

test('The input is NOT a symmetric list', t => {
    // Arrange
    let inputList: number[][] = [
        [7, 7, 7],
        [6, 5, 7],
        [1, 2, 1]
      ];

    let expected: boolean = false;

    // Act
    let result: boolean = isSymmetric(inputList);

    // Assert
    t.equal(result, expected);
    t.end();
});