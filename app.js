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
// console.log(salesByMatch([10, 20, 20, 10, 10, 30, 50, 10, 20, '*']));

function mountainClimbing(step) {
  let count = 0;
  let height = 0;
  [...step].forEach(c => {
    height = c == 'U' ? height + 1 : height - 1;
    count = !height ? count + 1 : count;
  })
  return count - 1
}
// console.log(mountainClimbing('UDDDUDUU'))

function jumpingNumber(str) {
  const strArr = str.split(' ')
  let count = 0
  let idx = 0
  while (idx < strArr.length - 1) {
    if (strArr[idx + 2] == '1') {
      count += 1;
      idx += 1;
    } else if (strArr[idx + 2] == '0' || strArr[idx + 1] == '0') {
      count += 1;
      idx += 2;
    }
  }
  return count
}
// console.log(jumpingNumber('0 0 0 1 0 0'))

function removeDuplicates(nums) {
  let set = new Set(nums)
  return Array.from(set)
}
// console.log(removeDuplicates([0,1,2,2,3,0,4,2]))
/*
Shuffle the Array
Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
*/
let shuffle = function (nums, n) {
  const numArr = [];
  for (let i = 0; i < n; ++i) {
    numArr.push(nums[i])
    numArr.push(nums[i + n])
  }
  return numArr
} 
// console.log(shuffle([2,5,1,3,4,7],3))

// Subtract the Product and Sum of Digits of an Integer
var subtractProductAndSum = function(n) {
  let sum = 0;
  let product = 1;
  String(n).split('').forEach(e => {
    e = Number(e);
    sum += e;
    product *= e;
  })
  return product - sum
};
// console.log(subtractProductAndSum(234))

// Defanging an IP Address
var defangIPaddr = function (address) {
  let str = '';
  for (const c of address) {
    str += c === '.' ? '[.]' : c
  }
  return str;
};
// console.log(defangIPaddr("1.1.1.1"))

/* How Many Numbers Are Smaller Than the Current Number
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
*/
var smallerNumbersThanCurrent = function(nums) {
  const sortedArr = [...nums].sort((a, b) => a - b)
  let resultArr = []
  for (const num of nums) {
    resultArr.push(sortedArr.indexOf(num))
  }
  return resultArr
};
// console.log(smallerNumbersThanCurrent([8,1,2,2,3]))

/**
 * Problem - Build Array from Permutation
 * Given a zero-based permutation nums (0-indexed), 
 * build an array ans of the same length 
 * where ans[i] = nums[nums[i]] 
 * for each 0 <= i < nums.length and return it.
 * 
 * 
*/
var buildArray = function(nums) {
    return (nums.length >= 1 && nums.length <= 1000) ? nums.map(e=>nums[e]) : false
};

// console.log(buildArray([5,0,1,2,3,4]))


/**
 * Problem - Concatenation of Array
 * 
 * Given an integer array nums of length n, 
 * you want to create an array ans 
 * of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
 * 
 * Input: nums = [1,2,1]
 * Output: [1,2,1,1,2,1]
 * 
 * 
*/

var getConcatenation = function(nums) {
    return nums.concat(nums)
};

// console.log(getConcatenation([1,2,1]));

/**
 * Problem - Running Sum of 1d Array
 * Given an array nums. We define a running 
 * sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 * 
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * 
 * 
*/
var runningSum = function (nums) {
  let arr = []
  nums.map((num,index) => {
    let leftNum = arr[index-1] || 0;
    arr.push(num + leftNum)
    leftNum += num
   })
  return arr
};

// console.log(runningSum([3,1,2,10,1]));

/** Problem - Kids With the Greatest Number of Candies
 * 
 * Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: If you give all extraCandies to:
- Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
- Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
- Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
- Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
- Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
 * 
 * 
*/
var kidsWithCandies = function (candies, extraCandies) {
  let result = []
  candies.map(candie=> candie + extraCandies >= Math.max(...candies) ? result.push(true) : result.push(false))
  return result
};
// console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))

/** Problem - Number of Good Pairs
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
Explanation: There are 4 good pairs 
(0,3), (0,4), (3,4), (2,5) 0-indexed.
 * 
*/

function numIdenticalPairs(numbers) {
  const counts = {};
  numbers.map(elem => {
    counts[elem] = counts[elem] ? counts[elem] + 1 : 1;
  })
  const result = Object.values(counts).reduce((acc, value) => {
    return acc += (value*(value-1))/2
  }, 0)
  return result
  
}

// console.log(numIdenticalPairs([1,2,3,1,1,3]));

/** Problem -  Richest Customer Wealth
 * 
 * Input: accounts = [[1,2,3],[3,2,1]]
 * Output: 6
 * Explanation:
 * 1st customer has wealth = 1 + 2 + 3 = 6
 * 2nd customer has wealth = 3 + 2 + 1 = 6
 * Both customers are considered the richest with a wealth of 6 each, so return 6.
 * 
 * 
*/
var maximumWealth = function (accounts) {
  let result = 0;
  accounts.map(account => {
    let currentValue = account.reduce((acc, current) => {
      return acc += current
    },0)
    result <= currentValue ? result = currentValue : result
  })
  return result
};

// console.log(maximumWealth(
// [[1,2,3],[3,2,1]]));

/** Problem - Jewels and Stones
 * 
 * You're given strings jewels representing 
 * the types of stones that are jewels, 
 * and stones representing the stones you have. 
 * Each character in stones is a type of stone you have. 
 * You want to know how many of the stones you have are also jewels.
 * Letters are case sensitive, so "a" is considered a different type of stone from "A".
 * 
 * 
*/

var numJewelsInStones = function (jewels, stones) {
  newStones = {}
  stones.split('').map(elem => {
    newStones[elem] = newStones[elem] ? newStones[elem] + 1 : 1;
  })
  return jewels.split('').reduce((acc, jew)=>{
    return acc += newStones[jew] ? newStones[jew] : 0
  },0)
};

// console.log(numJewelsInStones("z",
// "ZZ"));


/** Problem - Shuffle String
 * Given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character 
 * at the ith position moves to indices[i] in the shuffled string.
 * Return the shuffled string.
 * 
 * 
*/
var restoreString = function(s, indices) {
  let arr = {}
  let result = '';
  indices.map((value, index) => {
    arr[value] = s.split('')[index]
  })
  Object.values(arr).map(value=>result += value)
  return result
};
let s = "codeleet"
let indices = [4,5,6,7,0,2,1,3]
// console.log(restoreString(s, indices));

/** Problem - Subtract the Product and Sum of Digits of an Integer
Given an integer number n, return the difference 
between the product of its digits and the sum of its digits.

*/
var subtractProductAndSum = function(n) {
    let input = n.toString().split('')
    let digits = input.reduce((acc,val)=>{
      return acc *= Number(val)
    },1)
    let sum = input.reduce((acc,val)=>{
      return acc += Number(val)
    },0)
    return digits - sum
};

// console.log(subtractProductAndSum(234));


/*** Problem - Number of Steps to Reduce a Number to Zero
 * Given an integer num, return the number of steps to reduce it to zero.
 * In one step, if the current number is even, you have to divide it by 2, otherwise, 
 * you have to subtract 1 from it.
 * 
*/
var numberOfSteps = function(num) {
  let count = 0
  let number = num
  while (number > 0) {
    number = (number % 2 == 1) ? number - 1 : number / 2;
    count++;
  }
  return count
}

// console.log(numberOfSteps(14));

/*** Problem - Create Target Array in the Given Order
 * Given two arrays of integers nums and index. 
 * Your task is to create target array under the following rules:
 * 
 * Initially target array is empty
 * From left to right read nums[i] and index[i], insert at index index[i] 
 * the value nums[i] in target array
 * Repeat the previous step until there are no elements to read in nums and index
 * Return the target array.
 * 
 */
var createTargetArray = function (nums, index) {
  let arr = []
  index.map((idx,i) => {
    arr.splice(idx,0,nums[i])
  })
  return arr
};
// console.log(createTargetArray([1,2,3,4,0],[0,1,2,3,0]));


/*** Problem - Goal Parser Interpretation
You own a Goal Parser that can interpret a string command. 
The command consists of an alphabet of "G", "()" and/or "(al)" in some order. 
The Goal Parser will interpret "G" as the string "G", "()" as the string "o", 
and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.
 */
var interpret = function(command) {
  let result = []
  let split_command = command.split('')
  for (let i = 0; i < split_command.length; i++) {
    split_command[i] == 'G' ? result.push(split_command[i]) : split_command[i] == '(' && split_command[i+1] == ')' ? result.push('o') : split_command[i] == '(' && split_command[i+1] !== ')' ? result.push('al') : null
    
  }
  return result.join('');
};

// console.log(interpret("G()(al)"));

/*** Problem - Count Items Matching a Rule
 * You are given an array items, where each items[i] = [typei, colori, namei] 
 * describes the type, color, and name of the ith item. 
 * You are also given a rule represented by two strings, ruleKey and ruleValue.
 * The ith item is said to match the rule if one of the following is true:

ruleKey == "type" and ruleValue == type.
ruleKey == "color" and ruleValue == color.
ruleKey == "name" and ruleValue == name. 
 * 
 * 
 */
var countMatches = function(items, ruleKey, ruleValue) {
  const ruleKeys = ["type","color","name"]
  const idx = ruleKeys.findIndex(key => key === ruleKey);
  let result = items.reduce((acc,val)=>{
    return acc += val[idx] == ruleValue ? +1 : 0
  },0)
  return result
};

// console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"));

/*** Problem - Split a String in Balanced Strings
 * 
 * Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
 * Given a balanced string s, split it in the maximum amount of balanced strings.
 * Return the maximum amount of split balanced strings. 
 * 
 */
var balancedStringSplit = function(s) {
  let str = s.split('');
  count = 0;
  return str.reduce((acc,val)=>{
    val == 'R' ? count++ : count--
    return acc += count == 0 ? 1 : 0
  },0)
};

// console.log(balancedStringSplit("RLLLLRRRLR"));

/*** Problem - Find Center of Star Graph
 * 
 * There is an undirected star graph consisting of n nodes labeled from 1 to n. 
 * A star graph is a graph where there is one center node and exactly n - 1 edges 
 * that connect the center node with every other node.
 * You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates 
 * that there is an edge between the nodes ui and vi. Return the center of the given star graph.
 * 
 */
var findCenter = function(edges) {
  let a = edges[0][0]
  let b = edges[0][1]
  let c = edges[1][0]
  let d = edges[1][1]

  if(a == c || b == c){
    return c
  }else {
    return d
  }
};
let edges = [[1,2],[2,3],[4,2]]

// console.log(findCenter(edges));

/*** Problem - Sorting the Sentence
 * 
 * A sentence is a list of words that are separated by a single space 
 * with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
 * A sentence can be shuffled by appending the 1-indexed word position 
 * to each word then rearranging the words in the sentence.
 * For example, the sentence "This is a sentence" can be shuffled 
 * as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3"
 * Given a shuffled sentence s containing no more than 9 words, reconstruct 
 * and return the original sentence.
 * 
 * 
 */

var sortSentence = function(s) {
    let obj = {}
    let res = ''
    let str = s.split(' ')
    str.map((el,index) =>{
      obj[el[el.length - 1]] = el.slice(0, -1);
    })
    Object.values(obj).map(el=>{
      res += el + ' '
    })
    return res.slice(0, -1);
};

// console.log(sortSentence(s = "is2 sentence4 This1 a3"));

/*** Problem - Maximum Product Difference Between Two Pairs
 * 
 * The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
 * For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
 * 
 */
var maxProductDifference = function(nums) {
    let arr = nums.sort((a,b)=>a-b)
    return (arr[arr.length-1]*arr[arr.length-2])-(arr[0]*arr[1])
};

// console.log(maxProductDifference(nums = [4,2,5,9,7,4,8]));

/**** Problem - Partitioning Into Minimum Number Of Deci-Binary Numbers
 * 
 * A decimal number is called deci-binary if each of its digits is either 0 or 1 without 
 * any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.
 * Given a string n that represents a positive decimal integer, 
 * return the minimum number of positive deci-binary numbers needed so that they sum up to n.
 * 
 */
const minPartitions = n => Math.max(...n.split(''))

// console.log(minPartitions(n = "82734"))

// var countPoints = function(points, queries) {
//   let result = [];
//   /**
//    * [2,3,1]
//    * x = [1,3] [3,3]
//    * y = [2,2] [2,4]
//    * result = [1,3] [2,3]
//    */
//   let count = 0
//   queries.map(querie=>[
//     querie.map((q,index)=>{

//     })
//   ])
  
//   return result;
// };

// console.log(countPoints(points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]));

/*** Problem - Minimum Number of Operations to Move All Balls to Each Box
 * 
 * You have n boxes. You are given a binary string boxes of length n, 
 * where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.
 * In one operation, you can move one ball from a box to an adjacent box. 
 * Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, 
 * there may be more than one ball in some boxes.
 * Return an array answer of size n, where answer[i] is the minimum number of operations needed 
 * to move all the balls to the ith box.
 * Each answer[i] is calculated considering the initial state of the boxes.
 */
var minOperations = function(boxes) {
    // 2,4,5
    let oneIdx = []
    let result = []
    boxes.split('').map((box,idx)=>{
      box == '1' ? oneIdx.push(idx) : null
    })
    boxes.split('').reduce((acc,box,idx)=>{
      acc = 0
      oneIdx.map(one=>{
        return acc += one>=idx ? one-idx : idx-one
      })
      result.push(acc)
    },0)
    return result
};

// console.log(minOperations(boxes = "001011"));

/*** Problem -Decompress Run-Length Encoded List
 * 
 * We are given a list nums of integers representing a list compressed with run-length encoding.
 * Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  
 * For each such pair, there are freq elements with value val concatenated in a sublist. ,
 * Concatenate all the sublists from left to right to generate the decompressed list.
 * Return the decompressed list.
 * 
 */
var decompressRLElist = function(nums) {
    let result = []
    nums.map((num,idx)=>{
      if(idx%2 == 0){
        for (let i = 1; i <= num; i++) {
          result.push(nums[idx+1])
        }
      }
    })
    return result
};

// console.log(decompressRLElist([1,2,3,4]));

// var deepestLeavesSum = function(root) {
//     /**
//      * 1 - 6
//      * 2 - 7 8
//      * 4 - 2 7 1 3
//      * 6 - 9 null 1 4 null null null 5
//      */ 

//     return root.reduce((acc,val,idx)=>{
//       return acc += Math.floor(root.length / idx+1) === 1 ? val : 0
//     },0)
// };

// console.log(deepestLeavesSum(root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]));

/*** Problem - Max Increase to Keep City Skyline
 * 
 * There is a city composed of n x n blocks, where each block contains 
 * a single building shaped like a vertical square prism. You are given 
 * a 0-indexed n x n integer matrix grid where grid[r][c] represents 
 * the height of the building located in the block at row r and column c.
 * A city's skyline is the the outer contour formed by all the building 
 * when viewing the side of the city from a distance. 
 * The skyline from each cardinal direction north, east, south, and west may be different.
 * We are allowed to increase the height of any number of buildings 
 * by any amount (the amount can be different per building). 
 * The height of a 0-height building can also be increased. 
 * However, increasing the height of a building should not affect 
 * the city's skyline from any cardinal direction.
 * Return the maximum total sum that the height of the buildings can be increased 
 * by without changing the city's skyline from any cardinal direction.
 * 
 * 
 * 
 */
var maxIncreaseKeepingSkyline = function(grid) {
    /* 
    grid    = [
                [3, 0, 8, 4],
                [2, 4, 5, 7],
                [9, 2, 6, 3],
                [0, 3, 1, 0] ]
    gridColumn = [
                [3, 2, 9, 0],
                [0, 4, 2, 3],
                [8, 5, 6, 1],
                [4, 7, 3, 0] ]
    gridResult = [
                [8, 4, 8, 7],
                [7, 4, 7, 7],
                [9, 4, 8, 7],
                [3, 3, 3, 3] ]
    */
   // Calculate the width and height of the Array
  var w = grid.length || 0;
  var h = grid[0] instanceof Array ? grid[0].length : 0;

  // In case it is a zero matrix, no transpose routine needed.
  if(h === 0 || w === 0) { return []; }

  /**
   * @var {Number} i Counter
   * @var {Number} j Counter
   * @var {Array} t Transposed data is stored in this array.
   */
  let i, j, column = [];

  // Loop through every item in the outer array (height)
  for(i=0; i<h; i++) {

    // Insert a new row (array)
    column[i] = [];

    // Loop through every item per item in outer array (width)
    for(j=0; j<w; j++) {

      // Save transposed data.
      column[i][j] = grid[j][i];
    }
  }
  let count = 0
  grid.map((row,idX)=>{
    row.map((val,idY)=>{
      count += Math.max(...column[idY]) <= Math.max(...grid[idX]) ? Math.max(...column[idY]) - val : Math.max(...grid[idX]) - val
    })
  })
  return count
};

// console.log(maxIncreaseKeepingSkyline(grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]));

/*** Problem - Queries on a Permutation With Key
 * 
 * Given the array queries of positive integers between 1 and m, you have to process all queries[i] 
 * (from i=0 to i=queries.length-1) according to the following rules:
 * In the beginning, you have the permutation P=[1,2,3,...,m]
 * For the current i, find the position of queries[i] in the permutation P (indexing from 0) 
 * and then move this at the beginning of the permutation P. Notice that the position of queries[i] 
 * in P is the result for queries[i]
 * Return an array containing the result for the given queries.
 */

var processQueries = function(queries, m) {
  const p = []
  const result = []
  for (let i = 1;i <= m; i++) {
    p.push(i)
  }
  queries.map(query=>{
    if (p.indexOf(query) !== -1) {
      result.push(p.indexOf(query))
      p.splice(p.indexOf(query), 1);
    }
    p.unshift(query)
  })
  return result
};

// console.log(processQueries(queries = [7,5,5,8,3],8))

/**** Problem - Check if the Sentence Is Pangram
 * 
 * A pangram is a sentence where every letter of the English alphabet appears at least once.
 * Given a string sentence containing only lowercase English letters, 
 * return true if sentence is a pangram, or false otherwise.
 * 
 */
var checkIfPangram = function(sentence) {
  const str = new Set(sentence.split('').sort())
  let count = 0
  for (const s of str) {
    count++
  }
  return count == 26
};

let sentence = "thequickbrownfoxjumpsoverthelazydog"
// console.log(checkIfPangram(sentence))

// ceil up
// floor down
/*** Problem - Count of Matches in Tournament
 * 
 * You are given an integer n, the number of teams in a tournament that has strange rules:
 * If the current number of teams is even, each team gets paired with another team. 
 * A total of n / 2 matches are played, and n / 2 teams advance to the next round.
 * If the current number of teams is odd, one team randomly advances in the tournament, 
 * and the rest gets paired. A total of (n - 1) / 2 matches are played, 
 * and (n - 1) / 2 + 1 teams advance to the next round.
 * Return the number of matches played in the tournament until a winner is decided.
 * 
 * 
 */
var numberOfMatches = function(n) {
    let loopCount = Math.ceil(Math.sqrt(n))
    let result = 0
    let numb = n
    for (let i = 1; i <= loopCount+1; i++) {
      result += Math.floor(numb/2)
      numb = Math.ceil(numb/2)
    }
    return result
};

// console.log(numberOfMatches(14));

/*** Problem - Check If Two String Arrays are Equivalent
 * 
 * Given two string arrays word1 and word2, return true if the two arrays represent 
 * the same string, and false otherwise.
 * A string is represented by an array if the array elements concatenated in order forms the string.
 * 
 */

var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('') == word2.join('')
};

let word1 = ["ab", "c"], word2 = ["a", "bc"]
// console.log(arrayStringsAreEqual(word1,word2));

var countConsistentStrings = function(allowed, words) {
  
    return words[0].split('')[0]
};
let allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// console.log(countConsistentStrings(allowed,words));

/*** Problem - To Lower Case
 * 
 * Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
 * 
 */
var toLowerCase = function(s) {
  return s.split('').map(item => item.toLowerCase()).join('')
};

// console.log(toLowerCase("Hello"));

/*** Problem - Truncate Sentence
 * 
 * A sentence is a list of words that are separated by a single space with no leading 
 * or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).
 * For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
 * You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such 
 * that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
 * 
 */

var truncateSentence = function(s, k) {
  let result = ''
  s.split(' ').map((item,i)=>{
      i <= k-1 ? result += item + ' ' : null
  })
  return result.slice(0,-1)
};

// console.log(truncateSentence(s = "Hello how are you Contestant", k = 4));

/**** Problem - Replace All Digits with Characters
 * 
 * Input: s = "a1c1e1"
 * Output: "abcdef"
 * Explanation: The digits are replaced as follows:
 * - s[1] -> shift('a',1) = 'b'
 * - s[3] -> shift('c',1) = 'd'
 * - s[5] -> shift('e',1) = 'f'
 * 
 * 
 */
var replaceDigits = function(s) {
    let result = []
    for (let i = 0; i < s.length; i += 2) {
      result.push(s[i])
      let charCode = Number(s.charCodeAt(i)) + Number(s[i+1])
      s[i+1] ? result.push(String.fromCharCode(charCode)) : null
    }
    return result.join('')
};

// console.log(replaceDigits(s = "a1b2c3d4e"));

/*** Problem - Unique Morse Code Words
 * International Morse Code defines a standard encoding where each letter is mapped 
 * to a series of dots and dashes, as follows:
 * 'a' maps to ".-",
 * 'b' maps to "-...",
 * 'c' maps to "-.-.", and so on.
 * 
 */
var uniqueMorseRepresentations = function(words) {
  let alphabetChar = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let str = ''
  let result = []
  words.map(item=>{
    str = ''
    item.split('').map(word=>{
      str += alphabetChar[word.charCodeAt(0)-97]
    })
    result.push(str)
  })
  let uniq = [...new Set(result)];

  return uniq.length
};

// console.log(uniqueMorseRepresentations(words = ["gin","zen","gig","msg"]));

/*** Problem - Two Sum
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 */
var twoSum = function(nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      i !== j ? nums[i] + nums[j] == target ? result.push(i) && result.push(j) : null : null
    }
  }
  return [...new Set(result)];
};

// console.log(twoSum(nums = [3,2,4], target = 6));

/*** Problem - Median of Two Sorted Arrays
 * 
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, 
 * return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 * 
 */

var findMedianSortedArrays = function(nums1, nums2) {
  let result = null
  let sumArr = nums1.concat(nums2).sort((a,b)=>{return a - b})
  sumArr.length % 2 == 1 ? result = sumArr[Math.floor(sumArr.length/2)] : result = (sumArr[(sumArr.length/2)-1] + sumArr[sumArr.length/2])/2
  return result
};

// console.log(findMedianSortedArrays(nums1 = [3], nums2 = [-2,-1]));

/*** Problem - Palindrome Number
 * 
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward. 
 * For example, 121 is palindrome while 123 is not.
 * 
 */

var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('')
};

// console.log(isPalindrome(x = 121));

/*** Problem - Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
 * determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * 
 */
var isValid = function(s) {
  let result = s
  for (let i = 0; i < s.length; i++) {
    result = result.split('[]').join('').split('()').join('').split('{}').join('')
    
  }
    return result.length == 0
};

console.log(isValid(s = "(([]){})"));