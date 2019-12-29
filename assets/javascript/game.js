//global variables
var targetNumber; //holds random/target number for each game
var crystalButton;
var wins = 0; //holds win count
var losses = 0; //holds loss count
var currentTotal = 0 //holds current total count to be added to during gameplay


$(document).ready(function () {

    Start();

    //when you click on a crystal add the value to the currentTotal 
    $(".crystal-button").on("click", handleClick)

});

function handleClick() {
    var value = $(this).val();

    currentTotal += parseInt(value);

    $("#total-score-div").html(currentTotal);
    //if currentTotal equals randomNumber, add one to wins and generate new randomNumber and crystal button numbers and clear currentTotal
    if (currentTotal === targetNumber) {
        wins++;
        $("#wins-div").html(wins);
        Start();
    }
    //if currentTotal > randomNumber, add one to losses and generate new randomNumber and crystal button numbers and clear currentTotal
    if (currentTotal > targetNumber) {
        losses++;
        $("#losses-div").html(losses);
        Start();
    }
}

function getRandomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

function Start() {
    // display random number between 19 and 120 at start of game
    targetNumber = getRandomInt(19, 120);
    $("#target-number-div").html(targetNumber);

    // assign random number to each crystalbutton (between 1-12)
    // pinkCrystal = getRandomInt(1, 12);
    // $("#pink-crystal").val(pinkCrystal);
    // orangeCrystal = getRandomInt(1, 12);
    // $("#orange-crystal").val(orangeCrystal);
    // blueCrystal = getRandomInt(1, 12);
    // $("#blue-crystal").val(blueCrystal);
    // purpleCrystal = getRandomInt(1, 12);
    // $("#purple-crystal").val(purpleCrystal);

    $(".crystal-button").each(function (index, item) {
        $(item).val(getRandomInt(1, 12))
    })

    //set currentTotal to zero and display on page
    currentTotal = 0;
    $("#total-score-div").html(currentTotal);
}