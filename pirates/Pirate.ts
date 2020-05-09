'use strict';

export class Pirate {
    _name: string;
    _goldLevel: number;
    _healthPoint: number;
    _isCaptain: boolean;
    _hasPegLeg: boolean;

    constructor (name: string, isCaptain: boolean, hasPegLeg: boolean) {
        this._name = name;
        this._isCaptain = isCaptain;
        this._hasPegLeg = hasPegLeg;
        this._healthPoint = 10;
        this._goldLevel = 0;
    }

    work(): void {
        if (this._isCaptain) {
            this._goldLevel += 10;
            this._healthPoint -= 5;
        } else
            this._goldLevel ++;
            this._healthPoint --;
    }

    party(): void {
        if(this._isCaptain) {
            this._healthPoint += 10;
        } else
            this._healthPoint ++;
    }

    toString(): string {
        if (this._hasPegLeg) {
            return 'Hello, I\'m Jack. I have a wooden leg and 20 golds.'
        } else
            return 'Hello, I\'m Jack. I still have my real legs and 20 golds.'
    }

}