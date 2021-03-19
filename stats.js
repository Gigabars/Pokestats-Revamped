//basic function for finding between values for two numbers
function between(x, min, max) {
    return x >= min && x <= max;
}
//class for the pokemon stats. It is important to declare them here so they work across page.
class Pokemon {
    constructor(hp, atk, def, spa, spd, speed, type1, type2, pkname, abl, imglink) {
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spa = spa;
        this.spd = spd;
        this.speed = speed;
        //These will be strings
        this.type1 = type1;
        this.type2 = type2;
        this.pkname = pkname;
        this.abl = abl;
        this.imglink = imglink;
    }
}
var numberOfclicks = 0;
let newPokemon = new Pokemon();
function next()
{
    numberOfclicks++;
switch(numberOfclicks) {
case 0:
    //This should never happen.
    console.error("ERROR! Number of clicks = 0");
break;
case 1:
    //Set name of pokemon, and typing.
    newPokemon.pkname = document.querySelector("#input").value;
    newPokemon.type1 = document.querySelector('#type1box').value;
    newPokemon.type1 = newPokemon.type1.toLowerCase();
    newPokemon.type2 = document.querySelector('#type2box').value;
    newPokemon.type2 = newPokemon.type2.toLowerCase();
    //We then do the formating on the page.
    document.getElementById('type1box').style.display='none';
    document.getElementById('type2box').style.display='none';
    document.getElementById('question').innerHTML = "Now enter the HP of the pokemon.";
    document.getElementById('input').value = "";
break;
case 2:
   newPokemon.hp = document.querySelector("#input").value;
   document.getElementById('question').innerHTML = "Now enter the Attack of the pokemon.";
   document.getElementById('input').value = "";
break;
case 3:
    newPokemon.atk = document.querySelector("#input").value;
    document.getElementById('question').innerHTML = "Now enter the Defense of the pokemon.";
    document.getElementById('input').value = "";
break;
case 4:
    newPokemon.def = document.querySelector("#input").value;
    document.getElementById('question').innerHTML = "Now enter the Sp.Attack of the pokemon.";
    document.getElementById('input').value = "";
break;
case 5:
    newPokemon.spa = document.querySelector("#input").value;
    document.getElementById('question').innerHTML = "Now enter the Sp.Defense of the pokemon.";
    document.getElementById('input').value = "";
break;
case 6:
    newPokemon.spd = document.querySelector("#input").value;
    document.getElementById('question').innerHTML = "Now enter the speed of the pokemon.";
    document.getElementById('input').value = "";
break;
case 7:
    newPokemon.speed = document.querySelector("#input").value;
    document.getElementById('question').innerHTML = "what is this pokemon's ability?";
    document.getElementById('input').value = "";
break;
case 8:
    newPokemon.abl = document.querySelector("#input").value;
    document.getElementById('question').innerHTML = "great, now, please now paste a link to the image of the pokemon.";
    document.getElementById('input').value = "";
break;
case 9:
    //last case
    newPokemon.imglink = document.querySelector("#input").value;
    document.getElementById('input').value = "";
break;
    }
}