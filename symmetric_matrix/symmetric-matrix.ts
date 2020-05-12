'use strict';

let ourList: number[][] = [
    [1, 0, 1],
    [0, 2, 2],
    [1, 2, 5]
];  

export function isSymmetric (input: number[][]): boolean {
    //let isSymmetricBuffer: boolean;

    for (let i: number = 0; i < input.length; i++) {
        if (input[i][i] === input[input.length - 1][i] && 
            input[i][i] === input[i][input.length - 1]) {
                //isSymmetricBuffer = true;
            } else return false;
    }
    return true;
}

isSymmetric(ourList);