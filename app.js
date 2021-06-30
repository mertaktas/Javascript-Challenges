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