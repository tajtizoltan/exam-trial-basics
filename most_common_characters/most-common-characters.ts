'use strict';

const fs = require('fs');

let filePath: string = './countchar.txt';

function readFile(filePath: string) {
    let fileContent: string = '';

    try {
      fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (e) {
      console.log('File does not exist!');
    }
    return fileContent;
}

function countLetters (input: string): Map<string, number> {
    let resultMap= new Map();
    let splitInput: string[] = input.toLowerCase()
                                    .split('')
                                    .filter(char => char != ' ')
                                    .filter(char => char != '\n')
                                    .filter(char => char != '-')
                                    .filter(char => char != ',')
                                    .filter(char => char != '.')
                                    .sort();

    let charCounter: number = 1;

    for (let i = 0; i < splitInput.length; i++) {
        if (splitInput[i] == splitInput[i + 1]) {
            charCounter++;  
        } else if (splitInput[i] != splitInput[i + 1] && splitInput[i] == splitInput[i - 1]) {
            resultMap.set(splitInput[i], charCounter);
            charCounter = 1;
        } else {
            resultMap.set(splitInput[i], 1);
        }
    } 
    
    return resultMap;
}

function twoMostCommonCharacters(charactersCounted: Map<string, number>): Map<string, number> {
    const twoMostCommon = new Map([...charactersCounted.entries()].sort((a, b) => b[1] - a[1])
                                                             .slice(0, 2));
    
    return twoMostCommon;
}

function printMapOfTwoMostCommonCharacters(filePath: string): void {
    let fileContent: string = readFile(filePath);
    let charactersCounted = countLetters(fileContent);
    let finalMap = twoMostCommonCharacters(charactersCounted);

    console.log(finalMap);
}

printMapOfTwoMostCommonCharacters(filePath);

export{}