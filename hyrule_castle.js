"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var fs = require('fs');
var clc = require('cli-color');
var main = fs.readFileSync('./players.json', 'utf-8');
var contentmain = JSON.parse(main);
var content = fs.readFileSync('./enemies.json', 'utf-8');
var mainContent = JSON.parse(content);
var objet = fs.readFileSync('./bosses.json', 'utf-8');
var objetMain = JSON.parse(objet);
var devil = mainContent[11].name;
var hero = contentmain[0].name;
var Lifedevil = mainContent[11].hp;
var Lifehero = contentmain[0].hp;
var STRDevil = mainContent[11].str;
var STRhero = contentmain[0].str;
var i = 1;
var person = 'FIGHT';
while (i < 11) {
    console.log("======== ".concat(person, " ").concat(i, "  ========="));
    while (Lifedevil > 0 || Lifehero > 0) {
        console.log(clc.yellow(devil));
        console.log("HP__________ ".concat(Lifedevil, "/").concat(mainContent[11].hp), '\n', '\n', '\n');
        console.log(clc.red(hero), '\n');
        console.log("HP_____________ ".concat(Lifehero, "/").concat(contentmain[0].hp), '\n');
        var Attack = 1;
        var Heal = 2;
        console.log('------ Options -----------');
        var answer = readline.question('1. Attack   2. Heal \n');
        answer = parseInt(answer, 10);
        console.log(answer);
        if (answer === Attack) {
            Lifedevil -= STRhero;
            Lifehero -= STRDevil;
            console.clear();
            console.log(clc.green('you have chosen to Attack'));
        }
        else if (answer === Heal) {
            console.clear();
            console.log(clc.green('you have chosen to Heal'));
        }
        if (Lifedevil < 0) {
            console.log('vous avez gagnée la partie');
            Lifedevil = mainContent[11].hp;
            break;
        }
    }
    i += 1;
}
