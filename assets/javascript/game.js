//global variables
var targetNumber; //holds random/target number for each game
var pinkCrystal; //holds random value for pink crystal button
var orangeCrystal; //holds random value for orange crystal button
var blueCrystal; //holds random value for blue crystal button
var purpleCrystal; //holds random value for purple crystal button
var wins = 0; //holds win count
var losses = 0; //holds loss count
var currentTotal = 0 //holds current total count to be added to during gameplay

// display random number between 19 and 120 at start of game
$(document).ready(function(){
    targetNumber = Math.floor(Math.random() * (120-19) + 19);
    console.log(targetNumber);

// assign random number to each crystalbutton (between 1-12)
    pinkCrystal = Math.floor(Math.random() * (12-1) + 1);
    orangeCrystal = Math.floor(Math.random() * (12-1) + 1);
    blueCrystal = Math.floor(Math.random() * (12-1) + 1);
    purpleCrystal = Math.floor(Math.random() * (12-1) + 1);

//set currentTotal to zero
    currentTotal = 0;

//when you click on a crystal add the value to the currentTotal 
    $("crystal-button").on("click", function(){

   
//if currentTotal equals randomNumber, add one to wins and generate new randomNumber and crystal button numbers and clear currentTotal

//if currentTotal > randomNumber, add one to losses and generate new randomNumber and crystal button numbers and clear currentTotal
 })

});
