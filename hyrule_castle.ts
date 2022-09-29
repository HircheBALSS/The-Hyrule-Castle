import Gamer from './gamer';
import Monster from './monster';
import libmonsters from './lib';

const readline = require('readline-sync');

const gamer: Gamer = {
  name: 'Linker',
  HP: 60,
  STR: 15,
};
const monster: Monster = {
  name: 'Bokoblin',
  HP: 30,
  STR: 5,
};
const chief: Monster = {
  name: 'Ganon',
  HP: 60,
  STR: 15,
};

function displaymonster(monster: Monster) {
  console.log(monster);
}
