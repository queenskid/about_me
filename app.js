'use strict';

alert('BOO!!!');

//var userName = prompt('Thanks for stopping by my About Me page!, What is your name?');

//alert('Hi, ' + userName + ' nice to meet you. See if you can get the right answers to the following questions about me');

// Queation 1

var answer1 = prompt('Do I have 4 cats?').toLowerCase();

if (answer1 === 'n' || answer1 === 'no') {
  // Tell user they got the correct answer
  alert('You are correct');
} else {
  // Tell user they got the wrong answer
  alert('You are incorrect');
}
