// First Labour : Heracles vs Nemean Lion
// use your Figher class here
  const Fighter = require("./src/Fighter.js")

const Heracles = new Fighter("Heracles 🧔",20,6)
const NemeanLion = new Fighter("Nemean Lion 🦁",11,13)

while (Heracles.life> 0 && NemeanLion.life > 0){
    Heracles.fight(NemeanLion);
    NemeanLion.fight(Heracles);
}
if (Heracles.life <=0){console.log(`Le lion a vaincu Heracles il lui reste ${NemeanLion.life}PV`)}
else{console.log(`Heracles a vaincu le lion il lui reste ${Heracles.life}PV`)}