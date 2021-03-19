function weakness()
{
var currentTyping;
var currentTypingname;
var temp = 0;
function ifNaN()
{
    if (isNaN(currentTyping))
    {
       var ele = document.createElement("button");
       ele.innerHTML = currentTypingname;
       ele.setAttribute("id", "ty-" + currentTypingname);
       ele.setAttribute("class", "typingformatsmall")
        document.querySelector("#immune").appendChild(ele);
    }
}
function if4xResist()
{
    if (currentTyping == -2)
    {
    var ele = document.createElement("button");
    ele.innerHTML = currentTypingname;
    ele.setAttribute("id", "ty-" + currentTypingname);
    ele.setAttribute("class", "typingformatsmall")
    document.querySelector("#fourxRes").appendChild(ele);
    }
}
function if2xResist()
{
    if (currentTyping == -1)
    {
    var ele = document.createElement("button");
    ele.innerHTML = currentTypingname;
    ele.setAttribute("id", "ty-" + currentTypingname);
    ele.setAttribute("class", "typingformatsmall")
    document.querySelector("#twoxRes").appendChild(ele);
    }
}
function if2xWeak()
{
    if (currentTyping == 1)
    {
    var ele = document.createElement("button");
    ele.innerHTML = currentTypingname;
    ele.setAttribute("id", "ty-" + currentTypingname);
    ele.setAttribute("class", "typingformatsmall")
    document.querySelector("#twoxWeak").appendChild(ele);
    }
}
function if4xWeak()
{
    if (currentTyping == 2)
    {
    var ele = document.createElement("button");
    ele.innerHTML = currentTypingname;
    ele.setAttribute("id", "ty-" + currentTypingname);
    ele.setAttribute("class", "typingformatsmall")
    document.querySelector("#fourxWeak").appendChild(ele);
    }
}




function weakness()
{
var type1out = newPokemon.type1;
var type2out = newPokemon.type2;
type1out = type1out.toLowerCase();
type2out = type2out.toLowerCase();
    //Remove ALL other data
    //Also add a failsafe for first boot
    if (temp === 2)
    {
        var delele = document.getElementsByClassName('typingformatsmall');
        while(delele[0]) {
        delele[0].parentNode.removeChild(delele[0]);
        }
    }
//declare before passing
temp = 2;
var normal = 0;
var fire = 0;
var water = 0;
var electric = 0;
var grass = 0;
var ice = 0;
var fighting = 0;
var poison = 0;
var ground = 0;
var flying = 0;
var psychic = 0;
var bug = 0;
var rock = 0;
var ghost = 0;
var dragon = 0;
var dark = 0;
var steel = 0;
var fairy = 0;
// no effect = NaN, not very effective = -1, 4x resist = -2, effective = 0, super effective! = 1, 4x effective = 2;
if (type1out == "normal")
{
 fighting = 1;
 ghost = NaN;
}
else if (type1out == "fire")
{
fire = -1;
water = 1;
grass = -1;
ice = -1;
ground = 1;
bug = -1;
rock = 1;
steel = -1;
fairy = -1;
}
else if (type1out == 'water')
{
fire = -1;
water = -1;
electric = 1;
grass = 1;
ice = -1;
steel = -1;
}
else if (type1out == "electric")
{
electric = -1;
ground = 1;
flying = -1;
steel = -1;
}
else if (type1out == "grass")
{
fire = 1;
water = -1;
electric = -1;
grass = -1;
ice = 1;
poison = 1;
ground = -1;
flying = 1;
bug = 1;
}
else if (type1out == "ice")
{
fire = 1;
ice = -1;
fighting = 1;
rock = 1;
steel = 1;
}
else if (type1out == "fighting")
{
flying = 1;
psychic = 1;
bug = -1;
rock = -1;
dark = -1;
fairy = 1;
}
else if (type1out == "poison")
{
grass = -1;
fighting = -1;
poison = -1;
ground = 1;
psychic = 1;
fairy = -1;
}
else if (type1out == "ground")
{
    water = 1;
    electric = NaN;
    grass = 1;
    ice = 1;
    poison = -1;
    rock = -1;
}
else if (type1out == "flying")
{
    electric = 1;
    grass = -1;
    ice = 1;
    fighting = -1;
    ground = NaN;
    bug = -1;
    rock = 1;
}
else if (type1out == "psychic")
{
    fighting = -1;
    psychic = -1;
    bug = 1;
    ghost = 1;
    dark = 1;
}
else if (type1out == "bug")
{
    fire = 1;
    grass = -1;
    fighting = -1;
    ground = -1;
    flying = 1;
    rock = 1;
}
else if (type1out == "rock")
{
    normal = -1;
    fire = -1;
    water = 1;
    grass = 1;
    fighting = 1;
    poison = -1;
    ground = 1;
    flying = -1;
    steel = 1;
}
else if (type1out == "ghost")
{
    normal = NaN;
    fighting = NaN;
    poison = -1;
    bug = -1;
    ghost = 1;
    dark = 1;
}
else if (type1out == "dragon")
{
    fire = -1;
    water = -1;
    electric = -1;
    grass = -1;
    ice = 1;
    dragon = 1;
    fairy = 1;
}
else if (type1out == "dark")
{
    fighting = 1;
    psychic = NaN;
    bug = 1;
    ghost = -1;
    dark = -1;
    fairy = 1;
}
else if (type1out == "steel")
{
    normal = -1;
    fire = 1;
    grass = -1;
    ice = -1;
    fighting = 1;
    poison = NaN;
    ground = 1;
    flying = -1;
    psychic = -1;
    bug = -1;
    rock = -1;
    dragon = -1;
    steel = -1;
    fairy = -1;
}
else if (type1out == "fairy")
{
    fighting = -1;
    poison = 1;
    bug = -1;
    dragon = NaN;
    dark = -1;
    steel = 1;
}
//oh man here comes type2
if (type2out == "normal")
{
 fighting += 1;
 ghost = NaN;
}
else if (type2out == "fire")
{
fire += -1;
water += 1;
grass += -1;
ice += -1;
ground += 1;
bug += -1;
rock += 1;
steel += -1;
fairy += -1;
}
else if (type2out == 'water')
{
fire += -1;
water += -1;
electric += 1;
grass += 1;
ice += -1;
steel += -1;
}
else if (type2out == "electric")
{
electric += -1;
ground += 1;
flying += -1;
steel += -1;
}
else if (type2out == "grass")
{
fire += 1;
water += -1;
electric += -1;
grass += -1;
ice += 1;
poison += 1;
ground += -1;
flying += 1;
bug += 1;
}
else if (type2out == "ice")
{
fire += 1;
ice += -1;
fighting += 1;
rock += 1;
steel += 1;
}
else if (type2out == "fighting")
{
flying += 1;
psychic += 1;
bug += -1;
rock += -1;
dark += -1;
fairy += 1;
}
else if (type2out == "poison")
{
grass += -1;
fighting += -1;
poison += -1;
ground += 1;
psychic += 1;
fairy += -1;
}
else if (type2out == "ground")
{
    water += 1;
    electric = NaN;
    grass += 1;
    ice += 1;
    poison += -1;
    rock += -1;
}
else if (type2out == "flying")
{
    electric += 1;
    grass += -1;
    ice += 1;
    fighting += -1;
    ground = NaN;
    bug += -1;
    rock += 1;
}
else if (type2out == "psychic")
{
    fighting += -1;
    psychic += -1;
    bug += 1;
    ghost += 1;
    dark += 1;
}
else if (type2out == "bug")
{
    fire += 1;
    grass += -1;
    fighting += -1;
    ground += -1;
    flying += 1;
    rock += 1;
}
else if (type2out == "rock")
{
    normal += -1;
    fire += -1;
    water += 1;
    grass += 1;
    fighting += 1;
    poison += -1;
    ground += 1;
    flying += -1;
    steel += 1;
}
else if (type2out == "ghost")
{
    normal = NaN;
    fighting = NaN;
    poison += -1;
    bug += -1;
    ghost += 1;
    dark += 1;
}
else if (type2out == "dragon")
{
    fire += -1;
    water += -1;
    electric += -1;
    grass += -1;
    ice += 1;
    dragon += 1;
    fairy += 1;
}
else if (type2out == "dark")
{
    fighting += 1;
    psychic = NaN;
    bug += 1;
    ghost += -1;
    dark += -1;
    fairy += 1;
}
else if (type2out == "steel")
{
    normal += -1;
    fire += 1;
    grass += -1;
    ice += -1;
    fighting += 1;
    poison = NaN;
    ground += 1;
    flying += -1;
    psychic += -1;
    bug += -1;
    rock += -1;
    dragon += -1;
    steel += -1;
    fairy += -1;
}
else if (type2out == "fairy")
{
    fighting += -1;
    poison += 1;
    bug += -1;
    dragon = NaN;
    dark += -1;
    steel += 1;
}
//Now that we have all the math out of the way, we can get to formating. And oh no this is going to be bad.
 if (normal != 0)
 {
    currentTyping = normal;
    currentTypingname = "Normal";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (fire != 0)
 {
    currentTyping = fire;
    currentTypingname = "Fire";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (water != 0)
 {
    currentTyping = water;
    currentTypingname = "Water";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (electric != 0)
 {
    currentTyping = electric;
    currentTypingname = "Electric";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (grass != 0)
 {
    currentTyping = grass;
    currentTypingname = "Grass";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (ice != 0)
 {
    currentTyping = ice;
    currentTypingname = "Ice";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (fighting != 0)
 {
    currentTyping = fighting;
    currentTypingname = "Fighting";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (poison != 0)
 {
    currentTyping = poison;
    currentTypingname = "Poison";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (ground != 0)
 {
    currentTyping = ground;
    currentTypingname = "Ground";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (flying != 0)
 {
    currentTyping = flying;
    currentTypingname = "Flying";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (psychic != 0)
 {
    currentTyping = psychic;
    currentTypingname = "Psychic";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (bug != 0)
 {
    currentTyping = bug;
    currentTypingname = "Bug";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (rock != 0)
 {
    currentTyping = rock;
    currentTypingname = "Rock";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (ghost != 0)
 {
    currentTyping = ghost;
    currentTypingname = "Ghost";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (dragon != 0)
 {
    currentTyping = dragon;
    currentTypingname = "Dragon";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (dark != 0)
 {
    currentTyping = dark;
    currentTypingname = "Dark";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (steel != 0)
 {
    currentTyping = steel;
    currentTypingname = "Steel";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }
 if (fairy != 0)
 {
    currentTyping = fairy;
    currentTypingname = "Fairy";
    ifNaN();
    if4xResist();
    if2xResist();
    if2xWeak();
    if4xWeak();
 }

}

}