//The object of the game is to correctly guess and spell out a show from the 80s....die hard shepherd 
//created html doc


alert("You have 15 total guesses to name this show!");

var name = prompt ("What is your name?");
console.log ("Hi " +  "there " + name);
var memorylane = confirm ("Would you like to walk down memory lane?");
if (memorylane)
{
    alert("Great, have fun!");
    }
    
    else {
        alert("Too bad, maybe next time!")
    }
var wins = 0;
var losses = 0;

console.log ("Game dot script file");