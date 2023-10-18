const maxLife = 100;

class Fighter {
  constructor(name, strenght, dexterity) {
    (this.name = name),
      (this.strenght = strenght),
      (this.dexterity = dexterity);
    this.life = maxLife;
  }
  fight(defender) {
    let degats = Math.ceil(
      Math.random() * (this.strenght - (1 + 1)) - defender.dexterity
    );

    if (degats >= 1) {
      defender.life -= degats;
      console.log(
        `${this.name} inflige ${degats} à ${defender.name}, ${defender.name} a encore ${defender.life} PV`
      );
    }else{console.log(
        `${this.name} attaque, ${defender.name} a encore ${defender.life} PV`
      )}
  }
}
module.exports = Fighter;
