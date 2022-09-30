import Gamer from './gamer';
import Monster from './monster';
import lib from './lib';

const readline = require('readline-sync');
const fs = require('fs');
const clc = require("cli-color");

const main = fs.readFileSync('./players.json', 'utf-8');
const contentmain = JSON.parse(main);
const content = fs.readFileSync('./enemies.json', 'utf-8');
const mainContent = JSON.parse(content);
const objet = fs.readFileSync('./bosses.json', 'utf-8');
const objetMain = JSON.parse(objet);

let devil = mainContent[11].name;
let hero = contentmain[0].name;
let Lifedevil = mainContent[11].hp;
let Lifehero = contentmain[0].hp;


let i = 1;

let person: string = 'FIGHT';
while(i < 11){
    console.log(`======== ${person} ${i}  =========`);
    
console.log(clc.yellow(devil));
console.log(`HP__________ ${Lifedevil}`, '\n', '\n', '\n');
console.log(clc.red(hero), '\n');
console.log(`HP_____________ ${Lifehero}`, '\n');

    i+= 1
}
