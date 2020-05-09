'use strict';

import { Pirate } from './Pirate';
import { privateDecrypt } from 'crypto';

export class Ship {
    _name: string;
    _captain: Pirate;
    _pirates: Pirate[];

    constructor(name: string) {
        this._name = name;
        this._pirates = [];
    }

    addNewPirate(pirate: Pirate): void {
        this._pirates.push(pirate);
    }

    getPoorPirates(): Pirate[] {
        let listOfPoorPirates: Pirate[] = [];
        
        this._pirates.forEach(pirate => {
            if (pirate._hasPegLeg && pirate._goldLevel < 15) {
                listOfPoorPirates.push(pirate);
            }
        });
        return listOfPoorPirates;
    }

    lastdDayOnTheShip(): void {
        this._pirates.forEach(pirate => {pirate.party()});
    }

    prepareForBattle() {
        this._pirates.forEach(pirate => {
            for (let i = 0; i < 5; i ++) {
                pirate.work();
            }
            this.lastdDayOnTheShip();
        });
    }
}
