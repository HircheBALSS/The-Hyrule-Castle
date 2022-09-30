"use strict";
exports.__esModule = true;
function displaymonster(monster) {
    console.log(monster);
}
function displaygamers(gamer) {
    console.log(gamer);
}
function damagemonster(monster, damage) {
    monster.HP -= damage;
}
function damagegamer(gamer, damage) {
    gamer.HP -= damage;
}
exports["default"] = {
    displaymonster: displaymonster,
    displaygamers: displaygamers,
    damagemonster: damagemonster,
    damagegamer: damagegamer
};
