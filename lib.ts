import Gamer from './gamer';
import Monster from './monster';

function displaymonster(monster: Monster) {
  console.log(monster);
}

function displaygamers(gamer: Gamer) {
  console.log(gamer);
}

function damagemonster(monster: Monster, damage: number) {
  monster.HP -= damage;
}
function damagegamer(gamer: Gamer, damage: number) {
  gamer.HP -= damage;
}

export default {
  displaymonster, displaygamers, damagemonster, damagegamer,
};
