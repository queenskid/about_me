'use strict';

alert('Who Goes There');

var userName = prompt('While you are here, What is your name?');

alert('Hello ' + userName + ',' + ' nice to meet you. Let\'s play a little guessing game. Get them right to learn a little more about me. yes or no asnwers will get you there');

// Queation 1

//var answer1 = prompt('Is the Earth round?').toLowerCase();
//console.log('Is the Earth round?');

//if (answer1 === 'y' || answer1 === 'yes') {
  // Tell user they got the correct answer
  //alert('You got it!');
//} else {
  // Tell user they got the wrong answer
  //alert('No. No. No.');
//}

//var answer2 = prompt('Do you think I smoke?').toLowerCase();
//console.log('Do you think I smoke?');

//if (answer2 === 'n' || answer2 === 'no'){
  //alert('Nice Guess ' + userName + '.');
//} else {
  //alert('WRONG');
//}

//var answer3 = prompt('Will Jon Snow win the Game of Thrones?').toLowerCase();
//console.log('Will Jon Snow win the Game of Thrones?');

//if (answer3 === 'y' || answer3 === 'yes'){
  //alert('I also have the same feeling ' + userName + '.' );
//} else {
  //alert('2 Thumbs Down for you ' + userName + '.');
//}

//var answer4 = prompt('Do you believe I will make an Awesome JavaScript Developer?').toLowerCase();
//console.log('Do you believe I will make an Awesome JavaScript Developer?');

//if (answer4 === 'y' || answer4 === 'yes'){
  //alert('I hope you are right, I am trying my best to become one');
//} else {
  //alert('Oh, I was starting to like you ' + userName + '.');
//}

//var answer5 = prompt('Almost there ' + userName + ',' + ' can we be Friends?').toLowerCase();
//console.log('Can we be Friends?')

//if (answer5 === 'y' || answer5 === 'yes'){
  //alert('Sweet Beans ' + userName + '.');
//} else {
  //alert('I didnt want to be your friend anyways ' + userName + '.');
//}


var numberGuesses = 0;

while (numberGuesses <= 4){

  var answer6 = parseInt(prompt('How many players can a College Football team have on their active roster?'));

  if (answer6 > 125){
    alert('Try again, you are too high. You got this');
    numberGuesses++;
  }
  else if (answer6 < 125){
    alert('Try again, you are too low. Talking about Football here, not baseball');
    numberGuesses++;
  }
  if (answer6 === 125){
    alert('You are correct! Great job, you must really know your College Football.');
    break;
  }
  if (numberGuesses === 4){
    alert('You are out of guesses ' + userName + ', try my next game.');
    break;
  }
  console.log(numberGuesses);

}

var bucketList = ['Rome', 'Petra', 'Phuket', 'Machu Picchu', 'Stockholm', 'Lisbon', 'Cartagena', 'Amsterdam', 'Egypt', 'North Korea'];
var sixTries = 0;
while (sixTries <= 6){

  var answer7 = prompt('Let\'s play one last game ' + userName + ' , You will now have 6 tries to guess a location I want to visit from my bucket list.\n\nYou need one to win');
  if (answer7 === bucketList[i]){
    alert('It will not be that easy to guess' + userName + ' .');
  }

  for (i = 0; i < bucketList.length; i++){

  // array for question 7 containing my bucketList locations.

  }

}
