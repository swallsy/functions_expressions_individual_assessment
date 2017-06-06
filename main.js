// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// A:

function max(a, b){
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

max(2, 3);


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// A:

function maxOfThree(a, b, c){
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

maxOfThree(3, 2, 5);

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// A:

function isVowel(char){
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ) {
      return true;
    } else {
      return false;
    }
}

isVowel("z");
isVowel("a");


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// A:

function sum(a, b) {
  return (a + b);
}

sum(5, 8);


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// A:

function avg(a, b, c) {
  return ((a + b + c) / 3);
}

avg(4, 10, 19);


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// A:

function getLength(str) {
  return str.length;
}

getLength('hello');


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// A:

function greaterThan(a, b) {
  if (b > a) {
    return true;
  } else {
    return false;
  }
}

greaterThan(3, 8);



// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// A:

function greet (name) {
  return "Hello, " + name + "!";
}

greet("Sara");


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// A:

function madlib (verb, location, verb2, noun) {
    return "I want to " + verb + " " + "to the " + location + " " + "and " + verb2 + " " + "the " + noun + "!";
}

madlib("run", "ice cream parlour", "eat", "ice cream");
