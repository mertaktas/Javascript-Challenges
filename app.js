/* Problem 1 -> Multiply
-------Description-------
This code does not execute properly. Try to figure out why.
*/
function multiply(a, b){
    let result = a * b
    return result
}
// console.log(multiply(2,4));

//***********************************************
/* Problem 2 -> Find The Odd İnt
-------Description-------
Given an array of integers, 
find the one that appears an odd number of times.
*/ 
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

//***********************************************
/* Problem 3 -> IQ Test
-------Description-------
Bob is preparing to pass IQ test. 
The most frequent task in this test is 
to find out which one of the given numbers 
differs from the others.
*/ 
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
// console.log(iqTest("2 4 7 8 10"));

//***********************************************
/* Problem 4 -> Dubstep
-------Description-------
For example, a song with words "I AM X" can transform 
into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and 
cannot transform into "WUBWUBIAMWUBX".
*/ 
function songDecoder(song) {
    return song
      .split('WUB')
      .filter(Boolean)
      .join(' ')
}

//***********************************************
/* Problem 5 -> Find the divisors!
-------Description-------
Create a function named divisors/Divisors that takes an integer 
n > 1 and returns an array with all of 
the integer's divisors(except for 1 and the number itself), 
from smallest to largest. If the number is prime return the string
*/
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

//***********************************************
/* Problem 6 -> Take a Ten Minute Walk
-------Description-------
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

//***********************************************
/* Problem 7 -> Binary Addition
-------Description-------
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

//***********************************************
/* Problem 8 -> Valid Parentheses
-------Description-------
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

//***********************************************
/* Problem 9 -> Valid Braces
-------Description-------
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

//***********************************************
/* Problem 10 -> Bouncing Balls
-------Description-------
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

//***********************************************
/* Problem 11 -> Write Number in Expanded Form
-------Description-------
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

//***********************************************
/* Problem 12 -> Extract the domain name from a URL
-------Description-------
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string.
*/
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// console.log('google : ' + domainName("http://google.com"));
// console.log('google : ' + domainName("http://google.co.jp"));
// console.log('xakep : ' + domainName("www.xakep.ru"));
// console.log('youtube : ' + domainName("https://youtube.com"));

//***********************************************
/* Problem 13 -> Simple Pig Latin
-------Description-------
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/
function pigIt(str){
  let newString = str.split(' ')
  let newItem = [];
  let result = []
  for (let i = 0; i < newString.length; i++) {
    newItem = newString[i].split('');
    if(newItem != '!' && newString[i] !== '?'){
      newItem.shift()
    }
    if(newString[i] !== '!' && newString[i] !== '?') {
      result.push(newItem.join('') + newString[i][0] + 'ay')
    }else{
      result.push(newItem)
    }
  }

  return result.join(' ')
}
// console.log('igPay atinlay siay oolcay : ' + pigIt('Pig latin is cool'));
// console.log('hisTay siay ymay tringsay : ' + pigIt('This is my string'));
// console.log('elloHay orldway ! : ' + pigIt('Hello world !'));

//***********************************************
/* Problem 14 -> Complementary DNA
-------Description-------
In DNA strings, symbols "A" and "T" 
are complements of each other, as "C" and "G".
*/
function DNAStrand(dna){
  let result = ''
  for (let i = 0; i < dna.length; i++) {
    if(dna[i] == 'A') result += 'T'
    if(dna[i] == 'T') result += 'A'
    if(dna[i] == 'G') result += 'C'
    if(dna[i] == 'C') result += 'G'
  }
  return result
}
// console.log('TTTT : ' + DNAStrand("AAAA"));
// console.log('TAACG : ' + DNAStrand("ATTGC"));
// console.log('CATA : ' + DNAStrand("GTAT"));

//***********************************************
/* Problem 15 -> Human Readable Time
-------Description-------
Write a function, which takes a non-negative integer (seconds) 
as input and returns the time in a human-readable format (HH:MM:SS)
*/
function humanReadable(seconds) {
  let hour = 0
  let minute = 0
  let time = seconds
  if(time % 3600 || time % 3600 == 0){
    hour += Math.floor(time / 3600)
    time = Math.floor(time - hour * 3600)
  }
  if(time % 60 || time % 60 == 0) {
    minute += Math.floor(time / 60)
    time = Math.floor(time - minute * 60)
  }

  if(hour < 10){
    hour = '0' + hour.toString()
  }
  if(minute < 10){
    minute = '0' + minute.toString()
  }
  if(time < 10){
    time = '0' + time.toString()
  }
  return `${hour}:${minute}:${time}`
}
// console.log('00:00:00 => ' + humanReadable(0));
// console.log('00:01:00 => ' + humanReadable(60));
// console.log('00:59:59 => ' + humanReadable(3599))

//***********************************************
/* Problem 16 -> Count by X
-------Description-------
Create a function with two arguments 
that will return an array of the first (n) multiples of (x).
*/
function countBy(x, n) {
  let number = 0
  var z = [];
  for (let i = 0; i < n; i++) {
    number += x
    z.push(number)
  }
  return z;
}
// console.log(countBy(2,10));

//***********************************************
/* Problem 17 -> Is n divisible by x and y?
-------Description-------
Create a function that checks if a number n is divisible 
by two numbers x AND y. All inputs are positive, non-zero digits.
*/
function isDivisible(n, x, y) {
  if(n<=0){
    return false
  }else {
    if(n%x == 0 && n%y == 0){
      return true
    }else {
      return false
    }
  }
}
// console.log('false : ' + isDivisible(3,3,4));
// console.log('true : ' + isDivisible(12,3,4));

//***********************************************
/* Problem 18 -> First non-repeating character
-------Description-------
Write a function named first_non_repeating_letter 
that takes a string input, and returns 
the first character that is not repeated anywhere in the string.
*/
function firstNonRepeatingLetter(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[i].toLowerCase() == s[j].toLowerCase()) {
        count += 1
      }
    }
    if( count <= 1){
      return s[i]
    }else {
      count = 0
    }
  }
  if(count == 0) return ""
}
// console.log('t : ' + firstNonRepeatingLetter('stress'))
// console.log('e : ' + firstNonRepeatingLetter('moonmen'));

//***********************************************
/* Problem 19 -> Two Oldest Ages
-------Description-------
The two oldest ages function/method needs to be completed. 
It should take an array of numbers as its argument 
and return the two highest numbers within the array. 
The returned value should be an array in the format 
[second oldest age, oldest age].
*/
function twoOldestAges(ages){
  return ages.sort(function(a,b){return a-b;}).slice(-2);
}
//console.log(twoOldestAges([1,5,87,45,8,8]))

//***********************************************
/* Problem 20 -> Find the next perfect square!
-------Description-------
Complete the findNextSquare method that finds 
the next integral perfect square after 
the one passed as a parameter. Recall that 
an integral perfect square is an integer n such 
that sqrt(n) is also an integer.
*/
function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq)
  if(sqrt % Math.floor(sqrt) == 0) return (sqrt+1) * (sqrt+1)
  return -1
}
// console.log(findNextSquare(121))
// console.log(findNextSquare(625));

//***********************************************
/* Problem 21 -> Shortest Word
-------Description-------
Simple, given a string of words, 
return the length of the shortest word(s).
String will never be empty and you do not need 
to account for different data types
*/
function findShort(s){
  let wrd = s.split(' ')
  let count = 10
  for (let i = 0; i < wrd.length; i++) {
    if(wrd[i].length < count){
      count = wrd[i].length
    }
  }
  return count
}
// console.log(findShort("Let's travel abroad shall we"));

//***********************************************
/* Problem 22 -> Duplicate Encoder
-------Description-------
The goal of this exercise is to convert 
a string to a new string where each character 
in the new string is "(" if that character appears 
only once in the original string, or ")" 
if that character appears more than once 
in the original string. Ignore capitalization 
when determining if a character is a duplicate.
*/
function duplicateEncode(word){
  let wrd = word.split('')
  let count = 0
  let result = []
  for (let i = 0; i < wrd.length; i++) {
    count = 0
    for (let j = 0; j < wrd.length; j++) {
      if(wrd[i].toLowerCase() === wrd[j].toLowerCase()){
        count += 1
      }
    }
    if(count > 1){
      result.push(')')
    }else {
      result.push('(')
    }
  }
  return result.join('')
}
// console.log(duplicateEncode("recepe"));

//***********************************************
/* Problem 23 -> A square of squares
-------Description-------
Given an integral number, determine if it's a square number.
*/
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
// console.log(isSquare(3));

//***********************************************
/* Problem 24 -> Detect Pangram
-------Description-------
A pangram is a sentence that contains every single 
letter of the alphabet at least once. For example, 
the sentence "The quick brown fox jumps over 
the lazy dog" is a pangram, because it uses 
the letters A-Z at least once (case is irrelevant).
*/
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz"
    .split("").every(function(x){
      return string.indexOf(x) !== -1;
  });
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));

//***********************************************
/* Problem 25 -> Mean Square Error
-------Description-------
Complete the function that
- accepts two integer arrays of equal length
- compares the value each member in one array to the corresponding member in the other
- squares the absolute value difference between those two values
- and returns the average of those squared absolute value difference between each member pair.
*/
var solution = function(firstArray, secondArray) {
  count = 0;
  for (let i = 0; i < firstArray.length; i++) {
    count += (firstArray[i] - secondArray[i]) * (firstArray[i] - secondArray[i])
  }
  return count/firstArray.length
}
// console.log(solution([1,2,3],[4,5,6])); // 9
// console.log(solution([10,20,10,2],[10,25,5,-2])); //16.5

//***********************************************
/* Problem 26 -> Fizz Buzz
-------Description-------
If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
*/
function fizzbuzz(n){
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if(i % 15 == 0) {
      arr.push('FizzBuzz')
    }
    else if (i % 3 == 0) {
      arr.push('Fizz')
    }
    else if (i % 5 == 0) {
      arr.push('Buzz')
    }
    else {
      arr.push(i)
    }
  }
  return arr
}
// console.log(fizzbuzz(15));

//***********************************************
/* Problem 27 -> Reverse it, quickly!
-------Description-------
Your code needs to be as short as possible, in fact not longer than 28 characters
Because you are scared and stressed you have forgotten how to use the standard reverse() method
*/
weirdReverse=a=>a.sort(a=>1)
// console.log(weirdReverse([1,2,3,4,5]))

//***********************************************
/* Problem 28 -> Moving Zeros To The End
-------Description-------
Write an algorithm that takes an array and moves all of the zeros to 
the end, preserving the order of the other elements.
*/
var moveZeros = function (arr) {
  let counts = 0;
  arr.forEach(function (x) { if(x == 0) counts++; });
  const array = arr.filter(ar => ar !== 0);
  for (let i = 1; i <= counts; i++) {
    array.push(0)
  }
  return array
}
// console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))

function salesByMatch(numbers) {
  const cleanedArr = numbers.filter(elem => elem == parseInt(elem))
  const counts = {};
  cleanedArr.map(elem => {
    counts[elem] = counts[elem] ? counts[elem] + 1 : 1;
  })
  const result = Object.values(counts).reduce((acc, value) => {
    return acc += parseInt(value/2)
  }, 0)
  return result
  
}
console.log(salesByMatch([10, 20, 20, 10, 10, 30, 50, 10, 20, '*']));

function mountainClimbing(step) {
  let count = 0;
  let height = 0;
  [...step].forEach(c => {
    height = c == 'U' ? height + 1 : height - 1;
    count = !height ? count + 1 : count;
  })
  return count - 1
}
console.log(mountainClimbing('UDDDUDUU'))