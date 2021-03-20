var currentTyping;
var currentTypingname;
var temp = 0;
function between(x, min, max) {
    return x >= min && x <= max;
}
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
    newPokemon = JSON.parse(window.localStorage.getItem("poke"));
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
stats();
}
function stats()
{
    var hp = newPokemon.hp;
    var atk = newPokemon.atk;
    var def = newPokemon.def;
    var spatk = newPokemon.spa;
    var spdef = newPokemon.spd;
    var speed = newPokemon.speed;
    var hpout = document.querySelector("#hpout");
    var atkout = document.querySelector("#atkout");
    var defout = document.querySelector("#defout");
    var spatkout = document.querySelector("#spaout");
    var spdefout = document.querySelector("#spdout");
    var speedout = document.querySelector("#speedout");
    hpout.innerText = hp;
    atkout.innerText = atk;
    defout.innerText = def;
    spatkout.innerText =  spatk;
    spdefout.innerText = spdef;
    speedout.innerText = speed;
    
    //Image code And Name Code
    var img = newPokemon.imglink;
    document.querySelector("#pokeimg").src = img;
    var name = newPokemon.pkname;
    var nameout = document.querySelector("#nameout");
    nameout.innerText = name;
    
    // This chunk of code takes the value inputed in the box and poops it out into the stat bars, the formating of the bars is done past this line.
    //Colors that can be used, Red 1-45, Deep Orange 46-60, Orange 61-90, Yellow 91-110, Lime 111-140, light-green 141-160, green 161-199, Anything past 200 is Aqua.
    //HP formating
    var hpint = Number(hp);
    var hpintclean = Number(hp);
    hpint = hp / 3;
    hpout.style.width = hpint + "%";
    if (between(hpintclean, 1, 45))
    {
        hpout.classList.add("w3-red");
        hpout.style.boxShadow = "inset 0 -2px #cc0000";
        hpout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    
    }
    else if (between(hpintclean, 46, 60))
    {
        hpout.classList.add("w3-deep-orange");
        hpout.style.boxShadow = "inset 0 -2px #cb3001";
        hpout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(hpintclean, 61, 90))
    {
        hpout.classList.add("w3-orange");
        hpout.style.boxShadow = "inset 0 -2px #b36b00";
        hpout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(hpintclean, 91, 110))
    {
        hpout.classList.add("w3-yellow");
        hpout.style.boxShadow = "inset 0 -2px #ccb400";
        hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(hpintclean, 111, 140))
    {
        hpout.classList.add("w3-lime");
        hpout.style.boxShadow = "inset 0 -2px #a1ac20";
        hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(hpintclean, 141, 160))
    {
        hpout.classList.add("w3-light-green");
        hpout.style.boxShadow = "inset 0 -2px #5f832f";
        hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
    }
    else if (between(hpintclean, 161, 199))
    {
        hpout.classList.add("w3-green");
        hpout.style.boxShadow = "inset 0 -2px #367c39";
        hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
    }
    else if (between(hpintclean, 200, 255))
    {
        hpout.classList.add("w3-aqua");
        hpout.style.boxShadow = "inset 0 -2px #00b3b3";
        hpout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
    }
    //Atk formating
    var atkint = Number(atk);
    var atkintclean = Number(atk);
    atkint = atk / 3;
    atkout.style.width = atkint + "%";
    if (between(atkintclean, 1, 45))
    {
        atkout.classList.add("w3-red");
        atkout.style.boxShadow = "inset 0 -2px #cc0000";
        atkout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    
    }
    else if (between(atkintclean, 46, 60))
    {
        atkout.classList.add("w3-deep-orange");
        atkout.style.boxShadow = "inset 0 -2px #cb3001";
        atkout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(atkintclean, 61, 90))
    {
        atkout.classList.add("w3-orange");
        atkout.style.boxShadow = "inset 0 -2px #b36b00";
        atkout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(atkintclean, 91, 110))
    {
        atkout.classList.add("w3-yellow");
        atkout.style.boxShadow = "inset 0 -2px #ccb400";
        atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(atkintclean, 111, 140))
    {
        atkout.classList.add("w3-lime");
        atkout.style.boxShadow = "inset 0 -2px #a1ac20";
        atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(atkintclean, 141, 160))
    {
        atkout.classList.add("w3-light-green");
        atkout.style.boxShadow = "inset 0 -2px #5f832f";
        atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
    }
    else if (between(atkintclean, 161, 199))
    {
        atkout.classList.add("w3-green");
        atkout.style.boxShadow = "inset 0 -2px #367c39";
        atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
    }
    else if (between(atkintclean, 200, 255))
    {
        atkout.classList.add("w3-aqua");
        atkout.style.boxShadow = "inset 0 -2px #00b3b3";
        atkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
    }
    //def formating
    var defint = Number(def);
    var defintclean = Number(def);
    defint = def / 3;
    defout.style.width = defint + "%";
    if (between(defintclean, 1, 45))
    {
        defout.classList.add("w3-red");
        defout.style.boxShadow = "inset 0 -2px #cc0000";
        defout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    
    }
    else if (between(defintclean, 46, 60))
    {
        defout.classList.add("w3-deep-orange");
        defout.style.boxShadow = "inset 0 -2px #cb3001";
        defout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(defintclean, 61, 90))
    {
        defout.classList.add("w3-orange");
        defout.style.boxShadow = "inset 0 -2px #b36b00";
        defout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(defintclean, 91, 110))
    {
        defout.classList.add("w3-yellow");
        defout.style.boxShadow = "inset 0 -2px #ccb400";
        defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(defintclean, 111, 140))
    {
        defout.classList.add("w3-lime");
        defout.style.boxShadow = "inset 0 -2px #a1ac20";
        defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(defintclean, 141, 160))
    {
        defout.classList.add("w3-light-green");
        defout.style.boxShadow = "inset 0 -2px #5f832f";
        defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
    }
    else if (between(defintclean, 161, 199))
    {
        defout.classList.add("w3-green");
        defout.style.boxShadow = "inset 0 -2px #367c39";
        defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
    }
    else if (between(defintclean, 200, 255))
    {
        defout.classList.add("w3-aqua");
        defout.style.boxShadow = "inset 0 -2px #00b3b3";
        defout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
    }
    //Atk formating
    var spatkint = Number(spatk);
    var spatkoutclean = Number(spatk);
    spatkint = spatk / 3;
    spatkout.style.width = spatkint + "%";
    if (between(spatkoutclean, 1, 45))
    {
        spatkout.classList.add("w3-red");
        spatkout.style.boxShadow = "inset 0 -2px #cc0000";
        spatkout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    
    }
    else if (between(spatkoutclean, 46, 60))
    {
        spatkout.classList.add("w3-deep-orange");
        spatkout.style.boxShadow = "inset 0 -2px #cb3001";
        spatkout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(spatkoutclean, 61, 90))
    {
        spatkout.classList.add("w3-orange");
        spatkout.style.boxShadow = "inset 0 -2px #b36b00";
        spatkout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(spatkoutclean, 91, 110))
    {
        spatkout.classList.add("w3-yellow");
        spatkout.style.boxShadow = "inset 0 -2px #ccb400";
        spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(spatkoutclean, 111, 140))
    {
        spatkout.classList.add("w3-lime");
        spatkout.style.boxShadow = "inset 0 -2px #a1ac20";
        spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(spatkoutclean, 141, 160))
    {
        spatkout.classList.add("w3-light-green");
        spatkout.style.boxShadow = "inset 0 -2px #5f832f";
        spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
    }
    else if (between(spatkoutclean, 161, 199))
    {
        spatkout.classList.add("w3-green");
        spatkout.style.boxShadow = "inset 0 -2px #367c39";
        spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
    }
    else if (between(spatkoutclean, 200, 255))
    {
        spatkout.classList.add("w3-aqua");
        spatkout.style.boxShadow = "inset 0 -2px #00b3b3";
        spatkout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
    }
    //spDef formating
    var spdefint = Number(spdef);
    var spdefoutclean = Number(spdef);
    spdefint = spdef / 3;
    spdefout.style.width = spdefint + "%";
    if (between(spdefoutclean, 1, 45))
    {
        spdefout.classList.add("w3-red");
        spdefout.style.boxShadow = "inset 0 -2px #cc0000";
        spdefout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    
    }
    else if (between(spdefoutclean, 46, 60))
    {
        spdefout.classList.add("w3-deep-orange");
        spdefout.style.boxShadow = "inset 0 -2px #cb3001";
        spdefout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(spdefoutclean, 61, 90))
    {
        spdefout.classList.add("w3-orange");
        spdefout.style.boxShadow = "inset 0 -2px #b36b00";
        spdefout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(spdefoutclean, 91, 110))
    {
        spdefout.classList.add("w3-yellow");
        spdefout.style.boxShadow = "inset 0 -2px #ccb400";
        spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(spdefoutclean, 111, 140))
    {
        spdefout.classList.add("w3-lime");
        spdefout.style.boxShadow = "inset 0 -2px #a1ac20";
        spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(spdefoutclean, 141, 160))
    {
        spdefout.classList.add("w3-light-green");
        spdefout.style.boxShadow = "inset 0 -2px #5f832f";
        spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
    }
    else if (between(spdefoutclean, 161, 199))
    {
        spdefout.classList.add("w3-green");
        spdefout.style.boxShadow = "inset 0 -2px #367c39";
        spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
    }
    else if (between(spdefoutclean, 200, 255))
    {
        spdefout.classList.add("w3-aqua");
        spdefout.style.boxShadow = "inset 0 -2px #00b3b3";
        spdefout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
    }
    //Speed formating
    var speedint = Number(speed);
    var speedoutclean = Number(speed);
    speedint = speed / 3;
    speedout.style.width = speedint + "%";
    if (between(speedoutclean, 1, 45))
    {
        speedout.classList.add("w3-red");
        speedout.style.boxShadow = "inset 0 -2px #cc0000";
        speedout.classList.remove("w3-deep-orange","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    
    }
    else if (between(speedoutclean, 46, 60))
    {
        speedout.classList.add("w3-deep-orange");
        speedout.style.boxShadow = "inset 0 -2px #cb3001";
        speedout.classList.remove("w3-red","w3-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(speedoutclean, 61, 90))
    {
        speedout.classList.add("w3-orange");
        speedout.style.boxShadow = "inset 0 -2px #b36b00";
        speedout.classList.remove("w3-red","w3-deep-orange","w3-yellow","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(speedoutclean, 91, 110))
    {
        speedout.classList.add("w3-yellow");
        speedout.style.boxShadow = "inset 0 -2px #ccb400";
        speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-lime","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(speedoutclean, 111, 140))
    {
        speedout.classList.add("w3-lime");
        speedout.style.boxShadow = "inset 0 -2px #a1ac20";
        speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-light-green", "w3-green", "w3-aqua");
    }
    else if (between(speedoutclean, 141, 160))
    {
        speedout.classList.add("w3-light-green");
        speedout.style.boxShadow = "inset 0 -2px #5f832f";
        speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-green", "w3-aqua");
    }
    else if (between(speedoutclean, 161, 199))
    {
        speedout.classList.add("w3-green");
        speedout.style.boxShadow = "inset 0 -2px #367c39";
        speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-aqua");
    }
    else if (between(speedoutclean, 200, 255))
    {
        speedout.classList.add("w3-aqua");
        speedout.style.boxShadow = "inset 0 -2px #00b3b3";
        speedout.classList.remove("w3-red","w3-deep-orange","w3-orange","w3-yellow","w3-lime", "w3-light-green", "w3-green");
    }
    //Code to set TOTAL stat number.
    var totalint;
    totalint = speedoutclean + spdefoutclean + spatkoutclean + defintclean + atkintclean + hpintclean;
    document.querySelector("#totalout").innerText = totalint;
    
    
    //Code for ALL set typings.
    var type1out = newPokemon.type1;
    var type2out = newPokemon.type2;
    var type2button = document.querySelector(".type2"); //Only doing this to hide the element for mono-types.
    var type1box = document.querySelector(".type1");
    var type2box = document.querySelector(".type2");
    //check to hide button 2 for mono-types
    if (type2out === "none")
    {
        type2button.style.display = "none";
    }
    //change to lower
    type1out = type1out.toLowerCase();
    if (type1out == "normal")
    {
    type1box.id = "ty-normal";
    type1box.textContent = "Normal";
    }
    else if (type1out == "fire")
    {
    type1box.id = "ty-fire";
    type1box.textContent = "Fire";
    }
    else if (type1out == "water")
    {
    type1box.id = "ty-water";
    type1box.textContent = "Water";
    }
    else if (type1out == "electric")
    {
    type1box.id = "ty-electric";
    type1box.textContent = "Electric";
    }
    else if (type1out == "grass") //Best type don't @ me.
    {
    type1box.id = "ty-grass";
    type1box.textContent = "Grass";
    }
    else if (type1out == "ice")
    {
    type1box.id = "ty-ice";
    type1box.textContent = "Ice";
    }
    else if (type1out == "fighting")
    {
    type1box.id = "ty-fighting";
    type1box.textContent = "Fighting";
    }
    else if (type1out == "poison")
    {
    type1box.id = "ty-poison";
    type1box.textContent = "Poison";
    }
    else if (type1out == "ground")
    {
    type1box.id = "ty-ground";
    type1box.textContent = "Ground";
    }
    else if (type1out == "flying")
    {
    type1box.id = "ty-flying";
    type1box.textContent = "Flying";
    }
    else if (type1out == "psychic")
    {
    type1box.id = "ty-psychic";
    type1box.textContent = "Psychic";
    }
    else if (type1out == "bug")
    {
    type1box.id = "ty-bug";
    type1box.textContent = "Bug";
    }
    else if (type1out == "rock")
    {
    type1box.id = "ty-rock";
    type1box.textContent = "Rock";
    }
    else if (type1out == "ghost")
    {
    type1box.id = "ty-ghost";
    type1box.textContent = "Ghost";
    }
    else if (type1out == "dragon")
    {
    type1box.id = "ty-dragon";
    type1box.textContent = "Dragon";
    }
    else if (type1out == "dark")
    {
    type1box.id = "ty-dark";
    type1box.textContent = "Dark";
    }
    else if (type1out == "steel")
    {
    type1box.id = "ty-steel";
    type1box.textContent = "Steel";
    }
    else if (type1out == "fairy")
    {
    type1box.id = "ty-fairy";
    type1box.textContent = "Fairy";
    }
    else 
    {
        type1box.id = "ty-what"
        type1box.textContent = "???"
    }
    //type 2 box
    type2out = type2out.toLowerCase();
    if (type2out == "normal")
    {
    type2box.id = "ty-normal";
    type2box.textContent = "Normal";
    }
    else if (type2out == "fire")
    {
    type2box.id = "ty-fire";
    type2box.textContent = "Fire";
    }
    else if (type2out == "water")
    {
    type2box.id = "ty-water";
    type2box.textContent = "Water";
    }
    else if (type2out == "electric")
    {
    type2box.id = "ty-electric";
    type2box.textContent = "Electric";
    }
    else if (type2out == "grass") //Best type don't @ me.
    {
    type2box.id = "ty-grass";
    type2box.textContent = "Grass";
    }
    else if (type2out == "ice")
    {
    type2box.id = "ty-ice";
    type2box.textContent = "Ice";
    }
    else if (type2out == "fighting")
    {
    type2box.id = "ty-fighting";
    type2box.textContent = "Fighting";
    }
    else if (type2out == "poison")
    {
    type2box.id = "ty-poison";
    type2box.textContent = "Poison";
    }
    else if (type2out == "ground")
    {
    type2box.id = "ty-ground";
    type2box.textContent = "Ground";
    }
    else if (type2out == "flying")
    {
    type2box.id = "ty-flying";
    type2box.textContent = "Flying";
    }
    else if (type2out == "psychic")
    {
    type2box.id = "ty-psychic";
    type2box.textContent = "Psychic";
    }
    else if (type2out == "bug")
    {
    type2box.id = "ty-bug";
    type2box.textContent = "Bug";
    }
    else if (type2out == "rock")
    {
    type2box.id = "ty-rock";
    type2box.textContent = "Rock";
    }
    else if (type2out == "ghost")
    {
    type2box.id = "ty-ghost";
    type2box.textContent = "Ghost";
    }
    else if (type2out == "dragon")
    {
    type2box.id = "ty-dragon";
    type2box.textContent = "Dragon";
    }
    else if (type2out == "dark")
    {
    type2box.id = "ty-dark";
    type2box.textContent = "Dark";
    }
    else if (type2out == "steel")
    {
    type2box.id = "ty-steel";
    type2box.textContent = "Steel";
    }
    else if (type2out == "fairy")
    {
    type2box.id = "ty-fairy";
    type2box.textContent = "Fairy";
    }
    else 
    {
        type2box.id = "ty-what"
        type2box.textContent = "???"
        //should never trigger, however if it does, its there.
    }
    
    //finaly the ability box
    var ab = newPokemon.abl;
    document.querySelector("#Abilitysout").textContent = "Abilities: " + ab;
    
    
    
    }
    