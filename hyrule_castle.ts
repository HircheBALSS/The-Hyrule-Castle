import Gamer from './gamer';
import Monster from './monster';
import lib from './lib';
import { Console } from 'console';

const readline = require('readline-sync');
const fs = require('fs');
const clc = require('cli-color');

const main = fs.readFileSync('./players.json', 'utf-8');
const contentmain = JSON.parse(main);
const content = fs.readFileSync('./enemies.json', 'utf-8');
const mainContent = JSON.parse(content);
const objet = fs.readFileSync('./bosses.json', 'utf-8');
const objetMain = JSON.parse(objet);

const devil = mainContent[11].name;
const hero = contentmain[0].name;
let Lifedevil = mainContent[11].hp;
let Lifehero = contentmain[0].hp;
const STRDevil = mainContent[11].str;
const STRhero = contentmain[0].str;

let i = 1;

const person: string = 'FIGHT';
while (i < 11) {
  console.log(`======== ${person} ${i}  =========`);

  while (Lifedevil > 0 || Lifehero > 0) {
    console.log(clc.yellow(devil));
    console.log(`HP__________ ${Lifedevil}/${mainContent[11].hp}`, '\n', '\n', '\n');
    console.log(clc.red(hero), '\n');
    console.log(`HP_____________ ${Lifehero}/${contentmain[0].hp}`, '\n');

    const Attack = 1;
    const Heal = 2;

    console.log('------ Options -----------');

    let answer = readline.question('1. Attack   2. Heal \n');
    answer = parseInt(answer, 10);
    console.log(answer);

    if (answer === Attack) {
      Lifedevil -= STRhero;
      Lifehero -= STRDevil;
      console.clear();
      console.log(clc.green('you have chosen to Attack'));
    } else if (answer === Heal) {
      Lifehero += ()
      console.clear();
      console.log(clc.green('you have chosen to Heal'));
    }

    if (Lifedevil < 0) {
      console.log('vous avez gagnée la partie');
      Lifedevil = mainContent[11].hp;
      break;
    } 
    Console.clear();
    if (Lifehero < 0) {console.log(clc.red('GAME OVER');
    break;
}
  }

  i += 1;
}
