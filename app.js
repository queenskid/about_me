'use strict';

alert('Who Goes There');

var userName = prompt('While you are here, What is your name?');

alert('Hello ' + userName + ',' + ' nice to meet you. Let\'s play a little guessing game. Get them right to learn a little more about me. yes or no asnwers will get you there');

var yourPoints = 0;

// Question 1

function function1() {
  var answer1 = prompt('Is the Earth round?').toLowerCase();

  if (answer1 === 'y' || answer1 === 'yes') {
    //Tell user they got the correct answer
    alert('You got it!');
    console.log('Is the Earth round? You guessed yes and you are right.');
    yourPoints++;
  } else {
    // Tell user they got the wrong answer
    alert('No. No. No.');
    console.log('Is the Earth round? You guessed no and you are wrong.');
  }
}

function1();

// Question 2

function function2() {
  var answer2 = prompt('Do you think I smoke?').toLowerCase();

  if (answer2 === 'n' || answer2 === 'no'){
    alert('Nice Guess ' + userName + '.');
    console.log('Do you think I smoke? You guessed no and you are right.');
    yourPoints++;
  } else {
    alert('WRONG');
    console.log('Do you think I smoke? You guessed yes and you are wrong.');
  }
}

function2();

// Question 3

function function3() {
  var answer3 = prompt('Will Jon Snow win the Game of Thrones?').toLowerCase();

  if (answer3 === 'y' || answer3 === 'yes'){
    alert('I also have the same feeling ' + userName + '.' );
    console.log('Will Jon Snow win the Game of Thrones? You guessed yes and you are right.');
    yourPoints++;
  } else {
    alert('2 Thumbs Down for you ' + userName + '.');
    console.log('Will Jon Snow win the Game of Thrones? You guessed no and you are wrong.');
  }
}

function3();

// Question 4

function function4() {
  var answer4 = prompt('Do you believe I will make an Awesome JavaScript Developer?').toLowerCase();

  if (answer4 === 'y' || answer4 === 'yes'){
    alert('I hope you are right, I am trying my best to become one');
    console.log('Do you believe I will make an Awesome JavaScript Developer? You answered yes and you are right.');
    yourPoints++;
  } else {
    alert('Oh, I was starting to like you ' + userName + '.');
    console.log('Do you believe I will make an Awesome JavaScript Developer? You answered no and you are wrong.');
  }
}

function4();

// Question 5

function function5() {
  var answer5 = prompt('Almost there ' + userName + ',' + ' can we be Friends?').toLowerCase();

  if (answer5 === 'y' || answer5 === 'yes'){
    alert('Sweet Beans ' + userName + '.');
    console.log('Can we be Friends? You said yes.');
    yourPoints++;
  } else {
    alert('I didnt want to be your friend anyways ' + userName + '.');
    console.log('Can we be Friends? You said no.');
  }
}

function5();

// Question 6

function function6() {
  var numberGuesses = 1;
  while (numberGuesses <= 5){

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
      yourPoints++;
      break;
    }
    if (numberGuesses === 4){
      alert('You are out of guesses ' + userName + ', try my next game.');
      break;
    }
  }
  console.log('You guessed ' + numberGuesses + ' times for number of players a College Football team can have on their active roster.');
}

function6();

// Question 7

function function7() {
  var bucketList = ['Rome', 'Petra', 'Phuket'];
  var sixTries = 1;
  var correctAnswer = false;
  while (sixTries < 6 && !correctAnswer){
    var answer7 = prompt('Let\'s play one last game ' + userName + ' , You will now have 6 tries to guess one of my top 3 locations I want to visit from my bucket list.\n\nYou need one to win. These are your choices\n\nParis, New York City, Egypt, Miami, Madrid, Rome, Israel, Petra, Vietnam, Bora Bora, Phuket, Puerto Rico, Saint Johns, Hawaii');
    for (var i = 0; i < bucketList.length; i++) {
      if (answer7 === bucketList[i]) {
        alert('You are right.');
        correctAnswer = true;
        yourPoints++;
        console.log('Congratulations, you guessed ' + answer7 + '. Thanks for playing.');
        break;
      }
      if (answer7 !== bucketList[i]) {
        var triesLeft = 6 - sixTries;
        alert('You are wrong. Try again. You have ' + triesLeft + ' left.');
        sixTries++;
        console.log(userName + ' guessed ' + answer7 + ' and is wrong.');
        break;
      }
    }
  }

  if (sixTries === 6) {
    alert('You are out of tries. The correct answers are ' + bucketList + '.');
  }

}

function7();

// Points

alert('Thanks for playing. You guessed ' + yourPoints + ' answers correctly.')
