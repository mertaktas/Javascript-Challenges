// Multiply
function multiply(a, b){
    let result = a * b
    return result
}

// Find The Odd İnt
function findOdd(numbers) {
    var count = 0;
    for(var i = 0; i < numbers.length; i++){
      for(var j = 0; j < numbers.length; j++){
        if(numbers[i] == numbers[j]){
          count++;
        }
      }
      if(count % 2 != 0){
        return numbers[i]
      }
    }
}

// Find out which one of the given numbers differs from the others
function iqTest(numbers){
    var a=[];
    var e =[];
    var o =[]
    a=numbers.split(" ");
    for(var i=0;i<a.length;i++)
    {
    if(a[i]%2==0){ e.push(i)}
    else
    o.push(i);
    }
    if(e.length>1)
    return o[0]+1;
    
    return e[0]+1;
}

// Separate the words with a space.
function songDecoder(song) {
    return song
      .split('WUB')
      .filter(Boolean)
      .join(' ')
}

// Find the divisors!
function divisors(integer) {
    let arguments = [];
    for (let i = 2; i < integer; i++) {
      if (integer % i == 0) {
        arguments.push(i);
      }
    }
    if (arguments == '') {
      return `${integer} is prime`;
    } else {
      return arguments;
    }
}

/* Take a Ten Minute Walk

Note: you will always receive a valid array 
containing a random assortment 
of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array 
(that's not a walk, that's standing still!).

*/
 function isValidWalk(walk) {
    let ns = 0, ew = 0; 
    if(walk.length === 10){
      for (let i of walk) { 
        if (i == 'n') ns += 1; 
        if (i == 's') ns -= 1; 
        if (i == 'e') ew += 1; 
        if (i == 'w') ew -= 1; 
      } 
    }
    else
      return false
      return ns === 0 && ew === 0; 
}

/* Binary Addition

  Implement a function that adds two numbers together 
  and returns their sum in binary. 
  The conversion can be done before, or after the addition.
  The binary number returned should be a string.
 
 */
function addBinary( a, b ){
    var sum = a + b,
        binary = '';
  
    while ( sum > 0 ) {
      binary = ( sum % 2 ) + binary;
      sum = Math.floor( sum / 2 );
    }
  
    return binary;
}

/* Valid Parentheses

    Write a function that takes a string of parentheses, 
    and determines if the order of the parentheses is valid. 
    The function should return true if the string is valid, 
    and false if it's invalid.

*/
function validParentheses(parens) {
    let paren = parens;
  
    for (let i = 0; i < parens.length; i++) {
      paren = paren.split('()').join('');
    }
    
    return paren.length === 0 ? true : false
}

/* Valid Braces

Write a function that takes a string of braces, 
and determines if the order of the braces is valid. 
It should return true if the string is valid, 
and false if it's invalid.

*/
function validBraces(braces){
  let brace = braces;
  for (let i = 0; i < braces.length; i++) {
      brace = brace.split('()').join('');
      brace = brace.split('{}').join('');
      brace = brace.split('[]').join('');
  }
  return brace.length === 0 ? true : false
}

// console.log('true :'+ validBraces( "()" )) // true
// console.log('true :'+ validBraces( "[]" )) // true
// console.log('true :'+ validBraces( "{}" )) // true
// console.log('true :'+ validBraces( "(){}[]" )) // true

/* Bouncing Balls

A child is playing with a ball on the nth floor of a tall building. 
The height of this floor, h, is known.
He drops the ball out of the window. The ball bounces (for example),
to two-thirds of its height (a bounce of 0.66).
His mother looks out of a window 1.5 meters from the ground.
How many times will the mother see the ball pass 
in front of her window (including when it's falling and bouncing?

*/
function bouncingBall(h,  bounce,  window) {
  let count = -1;
  let newH = h;
  if(h != 0 && bounce > 0 && bounce < 1 && h > window){
    while(newH > window){
      newH = newH * bounce;
      count += 2
    }
  }
  return count;
}

// console.log('3 : ' + bouncingBall(3.0, 0.66, 1.5));
// console.log('15 : ' + bouncingBall(30.0, 0.66, 1.5));

/* Write Number in Expanded Form

You will be given a number and 
you will need to return it as a string in Expanded Form.

*/
function expandedForm(num) {
let number = num.toString().split('')
let x = 1
let newNumber = []
let lastNumber = []

for (let i = number.length-1; i >= 0; i--) {
  newNumber.unshift(Number(number[i]) * x)
  x *= 10;
}

lastNumber = newNumber.filter(number => number != 0).join(' + ');
  
return lastNumber
}

// console.log('10 + 2 : ' + expandedForm(12));
// console.log('40 + 2 : ' + expandedForm(42));
// console.log('70000 + 300 + 4 : ' + expandedForm(70304));
