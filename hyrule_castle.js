"use strict";
exports.__esModule = true;
var readline = require('readline-sync');
var fs = require('fs');
var clc = require("cli-color");
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
var i = 1;
var person = 'FIGHT';
while (i < 11) {
    console.log("======== ".concat(person, " ").concat(i, "  ========="));
    console.log(clc.yellow(devil));
    console.log("HP__________ ".concat(Lifedevil), '\n', '\n', '\n');
    console.log(clc.red(hero), '\n');
    console.log("HP_____________ ".concat(Lifehero), '\n');
    i += 1;
}
