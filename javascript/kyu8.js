//—Answer-
function multiply(a, b){
  return a * b;
};

//-Question- Convert a Number to a String!
//-Answer-
function numberToString(num) {
  return num.toString(); 
}

//-Question-Grasshopper - Personalized Message
//-Answer-
function greet (name, owner) {
  if(name === owner){
    return "Hello boss";
  }
  else {
    return "Hello guest";
  }
}

//-Question-Beginner - Reduce but Grow
//-Answer-
function grow(x){
  var total = 1;
  for(var i = 0; i < x.length; i++){
    total = total * x[i];
    }
    return total;
}

//-Question-String repeat
//-Answer-
function repeatStr (n, s) {
  var result = "";
  for(var i = 0; i < n; i++){
    result = result + s;
    }
  return result;
}

//-Question-Replace all vowel to exclamation mark in the sentence
//-Answer-
function replace(s){
  var char = s.split('');
  for(var i = 0; i < char.length; i++){
  if(char[i] === 'a' || char[i] === 'e' || char[i] === 'i' || char[i] ==='o' || char[i] === 'u' || char[i] === 'A' || char[i] === 'E' || char[i] === 'I' || char[i] === 'O' || char[i] === 'U'){
  char[i] = '!';
  }
  }
  return char.join('');
  
}

//-Question-Convert number to string
//-Answer-
var stringToNumber = function(str){
  return Number(str);
}

//-Question-Convert a Boolean to a String
//-Answer-
function booleanToString(b){
  return b.toString();
}

//-Question-Remove a exclamation mark from the end of string
//-Answer-
function remove(s){
  var c = s.split('');
  if(c[c.length - 1] === '!'){
    c.splice(c.length - 1, 1);
  }
  return c.join('');
}

//-Question-Fake Binary
//-Answer-
function fakeBin(x){
  var num = x.split('');
  for(var i = 0; i < x.length; i++){
    if(num[i] < 5){
      num[i] = '0';
    } else if(num[i] >= 5) {
      num[i] = '1';
    }
  }
  return num.join('');
}

//-Question-Sort and Star
//-Answer-
function twoSort(s) {
  s.sort();
  var letters = s[0].split('');
  for(var i = 0; i < letters.length; i++){
    if(i !== letters.length - 1){
      letters[i] = letters[i] + '***';
    }
  }
  return letters.join('');
}

//-Question-Convert number to reversed array of digits
//-Answer-
function digitize(n) {
  var arr = [];
  var string = n.toString();
  string.split('');
  for(var i = 0; i < string.length; i++){
    arr.unshift(parseInt(string[i]));
  }
  return arr;
}

//-Question-Sum without highest and lowest number
//-Answer-
function sumArray(array) {
  if(array == null){
    return 0;
  } else if(array.length > 1){
  var high;
  var low;
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    var currentNum = array[i];
    for(var j = 0; j < array.length; j++){
      if(currentNum > array[j]){
        if(currentNum > high){
          high = currentNum;
        } else if(high === undefined){
          high = currentNum
        }
      } else if(currentNum < array[j]){
        if(currentNum < low){
          low = currentNum;
        } else if(low === undefined){
          low = currentNum;
        }
      }
    }
  }
  for(var j = 0; j < array.length; j++){
    sum = sum + array[j];
  };
  return sum - high - low;
  } else if(array.length === 0){
    return 0;
  } else if(array.length === 1){
    return 0;
  }
}

//-Question-Keep up the hoop
//-Answer-
function hoopCount (n) {
   if(n >= 10){
    return "Great, now move on to tricks";
  }
   else if(n < 10){
    return "Keep at it until you get it";
   }
}

//-Question-Remove String Spaces
//-Answer-
function noSpace(x){
  var arr = x.split(' ');
  return arr.join('');
}

//-Question-Jenny's secret message
//-Answer-
function greet(name){
  
  if(name === "Johnny"){
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

//-Question-Plural
//-Answer-
function plural(n) {
  if(n === 1){
    return false;
  } else {
    return true;
  }
}

//-Question-Even or odd
//-Answer-
function even_or_odd(number) {
  if(number === 0){
   return 'Even';
  } else if (number % 2 === 0){
   return 'Even';
  } else {
   return 'Odd';
  }
}

//-Question-Keep hydrated
//-Answer-
function litres(time) {
  return Math.floor(time / 2);
}

//-Question-Calculate average
//-Answer-
function find_average(array) {
  return array.reduce(function(a,b){ return a + b}) / array.length;
}

//-Question-Convert String to array
//-Answer-
function stringToArray(string){

	return string.split(' ');

}

//-Question-Convert boolean values to strings 'Yes' or 'No'.
//-Answer-
function boolToWord( bool ){
  if(bool){
    return 'Yes';
  } else {
   return 'No';
  }
}

//-Question-Sum or positive
//-Answer-
function positiveSum(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      total = total + arr[i];
    }
  }
  return total;
}

//-Question-vilume of cubeboid
//-Answer-
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height;
  };

  return Kata;

})();

//-Question-simple simpleMultiplication
//-Answer-
function simpleMultiplication(n){
   return n % 2 === 0 ? n * 8 : n * 9;
}

//-Question-Count the monkerys
//-Answer-
function monkeyCount(n) {
  var sum = []
  for(var i = 1; i <= n; i++){
    sum.push(i);
  }
  return sum;
}

//-Question-reverse words in the String
//-Answer-
function reverse(string){
  var words = string.split(' ')
  return words.reverse().join(' ')
}

//-Question-removeExclamationMarks
//-Answer-
function removeExclamationMarks(s) {
  let char = s.split('');
  for(let i = 0; i < char.length; i++){
    if(char[i] === '!'){
      char.splice(i, 1);
      i--;
    }
  }
  return char.join('');
}

//-Question-getNumberFromString
//-Answer-
function getNumberFromString(s) {
  let result = [];
  let chars = s.split('');
  for(let i = 0; i < chars.length; i++){
    if(Number(chars[i]) % 1 === 0 && chars[i] !== ' '){
      result.push(chars[i]);
    }
  }
  return Number(result.join(''));
}

//-Question-remove first and last character
//-Answer-
function removeChar(str){
  let letters = str.split('');
  letters.splice(letters.length - 1, 1);
  letters.splice(0, 1);
  return letters.join('');
};

//-Question-es2016 string addition
//-Answer-
function joinStrings(string1, string2){
   return `${string1} ${string2}`
}

//-Question-find maxium and minmum values
//-Answer-
var min = function(list){
    list.sort(function(a, b){
        return a - b
      });
    return list[0];
}

var max = function(list){
    list.sort(function(a, b){
        return a - b;
      })
    return list[list.length - 1];
}

//-Question-Generate range of numbers
//-Answer-
function generateRange(min, max, step){
  let result = [];
  let sum = 0;
  result.push(min);
  for(let sum = min; sum < max;){
    result.push(sum += step);
  }
  if(result[result.length - 1] > max){
    result.splice(result.length - 1, 1);
  }
  return result;
}

//-Question-Simple multiplication
//-Answer-
function simpleMultiplication(n){
  return n % 2 === 0 ? n * 8 : n * 9;
}

//-Question-Switch it up;
//-Answer-
function switchItUp(number){
  switch(number){
    case 0:
      return 'Zero';
    case 1:
      return 'One';
    case 2:
      return 'Two';
    case 3:
      return 'Three';
    case 4:
      return 'Four';
    case 5:
      return 'Five';
    case 6:
      return 'Six';
    case 7:
      return 'Seven';
    case 8:
      return 'Eight';
    case 9:
      return 'Nine';
  }
}


//-Question- opposite number
//-Answer-
function opposite(number) {
  if(number === 0){
    return 0;
  } else if(number > 0){
    return -Math.abs(number);
  } else if(number < 0){
    return Math.abs(number);
  }
}

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-


//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-


//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-


//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-


//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-