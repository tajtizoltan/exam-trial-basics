import { Pirate } from './Pirate';
import { Ship } from './Ship';

let Captain: Pirate = new Pirate('One-eyed Willie', true, true);
let Pirate1: Pirate = new Pirate('Sam', false, true);
let Pirate2: Pirate = new Pirate('John', false, false);

let ship: Ship = new Ship('The Inferno');
ship.addNewPirate(Captain);
ship.addNewPirate(Pirate1);
ship.addNewPirate(Pirate2);

console.log(ship.getPoorPirates());

console.log(ship);

Captain.work()
Captain.party()
Pirate1.work();
Pirate1.work();
Pirate1.party();
Pirate2.party();
Pirate2.party();

console.log(Captain.toString());
console.log(ship.getPoorPirates());

console.log(ship);

ship.prepareForBattle();
console.log(ship);

ship.lastdDayOnTheShip();
console.log(ship);

