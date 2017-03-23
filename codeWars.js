//-Question-

// function multiply(a, b){
//   a * b
// }

//—Answer-

function multiply(a, b){
  return a * b;
};

//-Question-Broken Greeting

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + name;
};

//-Answer-

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}

//-Questions-

function greet (name, owner) {
  // Add code here
}

//-Answers-

function greet (name, owner) {
  if(name === owner){
    return "Hello boss";
  }
  else {
    return "Hello guest";
  }
}

//-Questions-

function grow(x){
}

//-Answer-

function grow(x){
  var total = 1;
  for(var i = 0; i < x.length; i++){
    total = total * x[i];
    }
    return total;
}

//-Question-

// reverse the letters in the sentence
function reverser(sentence) {

}

//-Answer-

function reverser(sentence) {
  var word = [];
  var words = sentence.split(' ');
    for(var i = 0; i < words.length; i++){
      word.push(words[i].split('').reverse().join(''));
    }
    return word.join(' ');
}

//-Question-
function getMiddle(s)
{
  //Code goes here!
}
//-Answer-
function getMiddle(s)
{
  var letters = s.split('');
  var letter = "";
  if(letters.length % 2 === 0){
    letter = letters[letters.length/2 - 1] + letter;
    letter = letter + letters[letters.length/2];
    return letter;
    } else if (letters.length % 2 !== 0) {
    letter = letters[(letters.length - 1)/2] + letter;
    return letter;
    }
}
//-Question-
function repeatStr (n, s) {
  return '';
}
//-Answer-
function repeatStr (n, s) {
  var result = "";
  for(var i = 0; i < n; i++){
    result = result + s;
    }
  return result;
}

//-Question-
function trouble(x, t){

}
//-Answer-
function trouble(x, t){
  for(var i = x.length - 1; i > 0; i--){
    if(x[i] + x[i - 1] === t){
    x.splice(i, 1);
    }
  }
    return x;
}
//-Question-
function replace(s){
  //coding and coding....


}
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

//-Question-
function findSum(n){
  return 0;
}
//-Answer-
function findSum(n) {
  var result = 0;
  for(var i = 0; i <= n; i++){
  if(i % 5 === 0 || i % 3 === 0){
    result = result + i;
  }
}
  return result;
}
//-Question-
function bubblesortOnce(intArr) {
  // Code the Bubblesort Algorithm here :D

  // Hmmm ... maybe we should just use the built-in sort() method
  // to sort our array - it'll save us some time ;)
  return intArr.sort();
}
//-Answer-
//-Question-Acums
function accum(s) {
	// your code
}
//-Answer-
function accum(s) {
	var ltr = s.split('');
	var arr = [];
  for(var i = 0; i < ltr.length; i++){
      if(i > 0){
        for(var j = 0; j < i + 1; j++){
          if(j === 0){
          arr.push(ltr[i].toUpperCase());
          }
          else {
            arr.push(ltr[i].toLowerCase());
          }
        }
        if(i < ltr.length - 1){
        arr.push('-');
       }
      }
      else {
      arr.push(ltr[i].toUpperCase());
      arr.push('-');
    }
  }
  return arr.join('');
}
//-Question-count wins
function countWins(winnerList, country) {
  // your awesome code here
}
//-Answer-
function countWins(winnerList, country) {
  var count = 0;
  for(var i = 0; i < winnerList.length; i++){
  if(winnerList[i].country === country){
    count = count + 1;
  }
  }
  return count;
}
//-Question-will all coninets participate
function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)
}
//-Answer-
function allContinents(list) {
  var continents = [
    {Africa: false},
    {Americas: false},
    {Asia: false},
    {Europe: false},
    {Oceania: false}
  ]
  for(var i = 0; i < list.length; i++){
    if(list[i].continent === 'Afica'){
      continents[0].Africa = true;
    } else if (list[i].continent === 'Americas'){
      continents[1].Americas = true;
    } else if (list[i].continent === 'Asia'){
      continents[2].Asia = true;
    } else if (list[i].continent === 'Europe'){
      continents[3].Europe = true;
    } else if (list[i].continent === 'Oceania'){
      continents[4].Oceania = true;
    }
  }
  
  var test = continents.filter(function(place){
   return place.Africa || place.Americas || place.Asia || place.Europe || place.Oceania;
  });
  
  if(test){
  for(var j = 0; j < test.length; j++){
    if(test[j].Africa === false || test[j].Americas === false || test[j].Asia === false || test[j].Europe === false || test[j].Oceania === false){
      return false;
    } else {
     return true;
    }
  }
  } else {
    return false;
  }
}

//-Question- digits explosion
function explode(s) {
  return ;
}
//-Answer-
function explode(s) {
  var explosion = [];
  var num = s.split('');
  for(var i = 0; i < num.length; i++){
    var x = num[i];
    for(var j = 0; j < x; j++){
      explosion.push(x);
    }
  }
  return explosion.join('');
}
//-Question-convert strings into numbers
function convert(arr) {
  return arr
}
//-Answer-
function convert(arr) {
  return arr.map(function(num){
    return Number(num)
    });
}
//-Question-convert vowel into number
function vowelOne(s){
  //..
}
//-Answer-
function vowelOne(s){
  var num = '';
  var letters = s.split('');
  var lowerCase = letters.map(function(letter){
    return letter.toLowerCase();
  });
  for(var i = 0; i < s.length; i++){
    if(lowerCase[i] === 'a' || lowerCase[i] === 'e' || lowerCase[i] === 'i' || lowerCase[i] === 'o' || lowerCase[i] === 'u'){
      num = num + '1';
    } else {
      num = num + '0';
    }
  }
  return num;
}

//-Question-convert string to number
var stringToNumber = function(str){
  
}
//-Answer-
var stringToNumber = function(str){
  return Number(str);
}
//-Question-conver string to array
function stringToArray(string){

	// code code code

}
//-Answer-
function stringToArray(string){

	return string.split(' ');

}
//-Question- convert boolean to string
function booleanToString(b){

}
//-Answer-
function booleanToString(b){
  return b.toString();
}

//-Question-
function boolToWord( bool ){
  //...
}
//-Answer-
function boolToWord( bool ){
  if(bool){
    return 'Yes';
  } else {
   return 'No';
  }
}
//-Question-calculate average
function find_average(array) {
  // your code here
  return 0;
}
//-Answer-
function find_average(array) {
  return array.reduce(function(a,b){ return a + b}) / array.length;
}

//-Question-remove exclamation mark
function remove(s){
  //coding and coding....
  
  
}
//-Answer-
function remove(s){
  var c = s.split('');
  if(c[c.length - 1] === '!'){
    c.splice(c.length - 1, 1);
  }
  return c.join('');
}


//-Question- remove explamation mark not at the end
function fakeBin(x){
}
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

//-Question-great johnny
function greet(name){
  
  if(name === "Johnny"){
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}
//-Answer-
function greet(name){
  
  if(name === "Johnny"){
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

//-Question-find the smallest integer
var isSquare = function(n){
  return false; // fix me
}
//-Answer-
var isSquare = function(n){
  if(n <= -1){
    return false;
  } else if (Math.sqrt(n) % 1 === 0){
    return true;
  } else {
    return false;
  }
}

//-Question-keep hydrated
function litres(time) {
  return 0;
}
//-Answer-
function litres(time) {
  return Math.floor(time / 2);
}

//-Question-even or odd
function even_or_odd(number) {
  // ...
}
//-Answer-even or odd
function even_or_odd(number) {
  if(number === 0){
   return 'Even';
  } else if (number % 2 === 0){
   return 'Even';
  } else {
   return 'Odd';
  }
}

//-Question-Who likes this
function likes(names) {

}
//-Answer-
function likes(names) {
  var string = '';
  if(names.length > 3){
    console.log(names[0]);
    string = string + names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    return string;
  }
  if(names.length === 0){
      return 'no one likes this';
  }
  for(var i = 0; i < names.length; i++){
    if(names.length === 1){
      return names[i] + ' likes this';
    } else if(i === names.length - 1){
      string = string + 'and ' + names[i];
    } else if(names.length === 2){
      return names[i] + ' and ' + names[i + 1] + ' like this';
    } else if(i === names.length - 2){
      string = string + names[i] + ' ';
    } else {
      string = string + names[i] + ', ';
    }
  }
  string = string + ' like this'
  return string;
}

//-Question-count the characters
function countChar(string, char) {
  // your mission, should you choose to accept it. 
}
//-Answer-
function countChar(string, char) {
  var letter = char.toLowerCase();
  var count = 0;
  var lowerCase = string.toLowerCase().split('');
  for(var i = 0; i < string.length; i++){
    if(lowerCase[i] === letter){
      count = count + 1;
    }
  }
  return count;
}

//-Question-all star code challenge #29
function reverseSentence(str){
//code here

}
//-Answer-
function reverseSentence(str){
  var arr = [];
  var words = str.split(' ');
  for(var i = 0; i < words.length; i++){
    var char = words[i].split('')
    char.reverse();
    arr.push(char.join(''));
  }
  return arr.join(' ');
}


//-Question-simple bead count
function countRedBeads(n) {
  //your code here
}
//-Answer-
function countRedBeads(n) {
  var red = 0;
  if(n === 0 || n === 1){
    return 0;
  }
  for(var i = 0; i < n; i++){
    red = red + 2;
  }
  if(n % 2 !== 0){
    return red - 2;
  } else {
    return red;
  }
}

//-Question-Longest word
function longest(words) {
  return ; //code here
}
//-Answer-
function longest(words) {
  var longestWord = 0;
  for(var i = 0; i < words.length; i++){
    var currentWord = words[i];
    for(var j = 0; j < words.length; j++){
      console.log(words[j]);
      var compare = words[j];
      if(currentWord.length > compare.length){
        if(longestWord < currentWord.length){
          longestWord = currentWord.length;
        } else {
          longestWord = longestWord;
        }
      }
    }
  }
  return longestWord;
}

//-Question-Bit counting
var countBits = function(n) {

};
//-Answer-
var countBits = function(n) {
  var count = 0;
  var bin = Number(n).toString(2);
  bin.split('');
  for(var i = 0; i < bin.length; i++){
    if(bin[i] == 1){
      count = count + 1;
    }
  }
  return count;
};

//-Question-Sum all arrays
function arraySum(arr) {
  return arr.reduce();
}
//-Answer-
function arraySum(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
  if(Array.isArray(arr[i])){
    for(var j = 0; j < arr[i].length; j++){
      if(Array.isArray(arr[i][j])){
        for(var x = 0; x < arr[i][j].length; x++){
          if(Number.isInteger(arr[i][j][x]) || parseInt(arr[i][j][x])){
            total = total + parseInt(arr[i][j][x]);
          }
        }
      }
      if(Number.isInteger(arr[i][j]) || parseInt(arr[i][j]) && !Array.isArray(arr[i][j]) ){
        total = total + parseInt(arr[i][j]);
      }
    }
  }
    if(!Array.isArray(arr[i]) && parseInt(arr[i])){
      total = total + Number(arr[i]);
    }
  }
  return total;
}

//-Question-sort and star
function twoSort(s) {
}
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
//-Question-bubble sorts
function bubblesortOnce(intArr) {

}
//-Answer-
function bubblesortOnce(intArr) {
  var num;
  for(var i = 0; i < intArr.length; i++){
    if(intArr[i] > intArr[i + 1]){
      num = intArr[i];
      intArr[i] = intArr[i + 1];
      intArr[i + 1] = num;
    }
  }
  return intArr;
}

//-Question-paul miserable score
function paul(x){

}
//-Answer-
function paul(x){
  var sum = 0;
  for(var i = 0; i < x.length; i++){
    if(x[i] === 'kata'){
      sum = sum + 5;
    } else if (x[i] === 'Petes kata'){
      sum = sum + 10;
    } else if (x[i] === 'eat'){
      sum = sum + 1;
    }
  }
  if(sum < 40){
    return 'Super happy!';
  } else if(sum < 70 && sum >= 40 ){
    return 'Happy!';
  } else if(sum < 100 && sum >= 70){
    return 'Sad!';
  } else if(sum >= 100){
    return 'Miserable!';
  }
}

//-Question-Catagorize new member
function openOrSenior(data){

}
//-Answer-
function openOrSenior(data){
console.log(data);
  var output = [];
  for(var i = 0; i < data.length; i++){
    if(data[i][0] >= 55 && data[i][1] > 7){
      output.push('Senior');
    } else {
      output.push('Open');
    }
  }
  return output;
}

//-Question-volume
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {

  };

  return Kata;

})();
//-Answer-
var Kata;

Kata = (function() {
  function Kata() {}

  Kata.getVolumeOfCuboid = function(length, width, height) {
    return length * width * height;
  };

  return Kata;

})();

//-Question-digitize
function digitize(n) {

}

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

//-Question-sum array except low and high
function sumArray(array) {

}
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

//-Question-sequence sum string
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {

  };

  return SequenceSum;

})();
//-Answer-
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var sum = '';
    var total = 0;
    //zero and negative numbers
    if(count === 0){
      return '0=0';
    } else if(count < 0){
      return count.toString() + '<0';
    }
    for(var i = 0; i <= count; i++){
      if(i !== count){
        sum = sum + i + '+';
      } else {
        sum =  sum + i; 
      }
    }
    for(var j = 0; j <= count; j++){
      total = total + j;
    }
    return sum + ' = ' + total.toString();
  };

  return SequenceSum;

//-Question-reverse first and last
function firstReverseTry(arr) {

}
//-Answer-
function firstReverseTry(arr) {
  if(arr.length === 0){
    return [];
  }
  var first = arr[0];
  var last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
}

//-Question-hoop count;
function hoopCount (n) {

}
//-Answer-
function hoopCount (n) {
   if(n >= 10){
    return "Great, now move on to tricks";
  }
   else if(n < 10){
    return "Keep at it until you get it";
   }
}

//-Question-Jaden Case
String.prototype.toJadenCase = function () {

};
//-Answer-
String.prototype.toJadenCase = function () {
  var output = []
  var word = this.split(' ');
  console.log(word);
  for(var i = 0; i < word.length; i++){
    var letters = word[i].split('');
    letters[0] = letters[0].toUpperCase();
    output.push(letters.join(''));
  }
  return output.join(' ');
};

//-Question-parity outlyer
function findOutlier(integers){

}
//-Answer-
function findOutlier(integers){
  var evens = [];
  var odds = [];
  for(var i = 0; i < integers.length; i++){
    if(integers[i] % 2 === 0 || integers[i] === 0){
      evens.push(integers[i]);
    } else if(integers[i] % 2 !== 0){
      odds.push(integers[i]);
    }
  }
  if(odds.length > evens.length){
    return evens[0];
  } else if(evens.length > odds.length){
    return odds[0];
  }
}

//-Question-plural
function plural(n) {

}
//-Answer-
function plural(n) {
  if(n === 1){
    return false;
  } else {
    return true;
  }
}

//-Question-remove spaces
function noSpace(x){

}
//-Answer-
function noSpace(x){
  var arr = x.split(' ');
  return arr.join('');
}

//-Question- count monkeys
function monkeyCount(n) {

}
//-Answer-
function monkeyCount(n) {
  var sum = []
  for(var i = 1; i <= n; i++){
    sum.push(i);
  }
  return sum;
}

//-Question-unique
function findUniq(arr) {

}

//-Answer-
function findUniq(arr) {
  var num = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i + 1]){
      num.push(arr[i + 1]);
    }
  }
  if(num[0] !== arr[1]){
    return num[0];
  } else {
    return arr[0];
  }
}


//-Question-Sum positives
function positiveSum(arr) {
  
}
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

//-Question-reverse words in a string
function reverseWords(str) {
}
//-Answer-
function reverseWords(str) {
  var output = []
  var words = str.split(' ');
  for(var i = 0; i < words.length; i++){
    var letters = words[i].split('');
    output.push(letters.reverse().join(''));
  }
  return output.join(' ');
}

//-Question-Sorting odds 
function sortArray(array) {

}
//-Answer-
function sortArray(array) {
  if(array.length === 0){
    return []
  }
  var odds = []
  for(var i = 0; i < array.length; i++){
    if(array[i] % 2 != 0){
      odds.push(array[i])
    }
  }
  odds.sort(function(a, b){
    return a - b
  });
  var count = 0;
  for(var j = 0; j < array.length; j++){
    if(count === odds.length + 1){
      break
    }
    if(array[j] % 2 != 0){
      array[j] = odds[count];
      count += 1;
    }
  }
  return array
}

//-Question-reversing words in string
function reverse(string){
}
//-Answer-
function reverse(string){
  var words = string.split(' ')
  return words.reverse().join(' ')
}

//-Question-Move zeros to the end
var moveZeros = function (arr) {

}
//-Answer-
var moveZeros = function (arr) {
  var zero = []
  var sliced = []
  for(var i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      sliced.push(arr[i])
    } else if(arr[i] === 0){
      zero.push(0)
    }
  }
  for(var j = 0; j < zero.length; j++){
    sliced.push(zero[j]);
  }
  return sliced;
}

//-Question-find non repeating letter
function firstNonRepeatingLetter(s) {

}
//-Answer-
function firstNonRepeatingLetter(s) {
  var letters = s.split('');
  for(var i= 0; i < letters.length; i++){
    var count = 0;
    var current = s[i]
    for(var j = 0; j < letters.length; j++){
      if(current.toLowerCase() === s[j].toLowerCase()){
        count += 1
      }
    }
    if(count === 1){
      return current;
    }
  }
  return ''
}

//-Question-simple multiplication
function simpleMultiplication(n){
}
//-Answer-
function simpleMultiplication(n){
   return n % 2 === 0 ? n * 8 : n * 9;
}

//-Question-convert to camel case
function toCamelCase(str){

}
//-Answer-
function toCamelCase(str){
  console.log(str);
  var words = str.split('');
  for(var i = 0; i < words.length; i++){
    if(words[i] === '-' || words[i] === '_'){
      words[i + 1] = words[i + 1].toUpperCase();
      delete words[i]
    }
  }
  return words.join('');
}

//-Question-Scramblies
function scramble(str1, str2) {

}

//-Answer-
function scramble(str1, str2) {
  var used = [];
  var letters1 = str1.split('');
  var letters2 = str2.split('');
  for(var i = 0; i < str2.length; i++){
    for(var j = 0; j < letters1.length; j++){  
      if(letters2[i] === letters1[j]){
        used.push(letters2[i]);
        letters1[j] = 0;
        break;
      }
    }
    if(used.join('') === str2){
      return true;
    }
  }
  return false;
}


//-Question-array diff
function array_diff(a, b) {

}
//-Answer-
function array_diff(a, b) {
  var arr = [];
  for(var i = 0; i < a.length; i++){
    if(a[i] !== b[0]){
      arr.push(a[i]);
    }
  }
  return arr;
}

//-Question-no camel casing
function solution(string) {

}
//-Answer-
function solution(string) {
  var noCamel = []
  var letters = string.split('');
  for(var i = 0; i < letters.length; i ++){
    if(letters[i].toUpperCase() !== letters[i]){
      noCamel.push(letters[i]);
    } else if (letters[i].toUpperCase() === letters[i]){
      noCamel.push(" ");
      noCamel.push(letters[i]);
    }
  }
  return noCamel.join('');
}

//-Question-
function domainName(url){

}
//-Answer-
function domainName(url){
  var chars = url.split('');
  var name = [];
  var flag = false
  if(chars[0] !== 'h'){
    for(var j = 0 ; j < chars.length; j++){
      if(chars[j] === '.' || (chars[j] === 'w' && chars[j + 1] === 'w')){
        break
      }
      name.push(chars[j]);
    }
  }
  for(var i = 0; i < chars.length; i++){
    if((chars[i] === 'h' || chars[i] === 't' || chars[i] === 'p' || chars[i] === 's' || chars[i] === ':' || chars[i] === '/' || chars[i] === 'w' || chars[i] === '.') && name.length === 0 && i < 13){
      if(chars[i] === 'h' && i > 0 && name.length === 0){
        name.push('h');
      } else if (chars[i] === 't' && i > 2){
        name.push('t');
      } else if (chars[i] === 'p' && i > 3){
        name.push('p');
      } else if (chars[i] === 's' && i > 4){
        name.push('s');
      } else {
        chars[i] = 0;
      }
    } else if ((chars[i] === '.' || chars[i] !== '/') && !flag && name.length <= 1){
      flag = true;
    } else if ((chars[i] === '.' || chars[i] === '/') && flag){
      flag = false
    }
    if(flag){
      name.push(chars[i]);
    }
  }
  return name.join('');
}

//-Question-remove zeros
function removeZeros(array) {

}
//-Answer-
function removeZeros(array) {
  var count = 0;
  for(var i = array.length; i > 0; i--){
    if(array[i] === 0){
      array.splice(i, 1);
      count += 1;
    }
  }
  var arr = array;
  for(var j = arr.length + count; j > arr.length; j--){
    arr[j] = 0;
  }
  for(var x = 0; x < arr.length; x++){
    if(arr[x] === undefined){
      arr[x] = 0;
    }
  }
  arr.splice(arr.length - 1, 1);
  return arr;
}

//-Question-simple pig latin
function pigIt(str){

}
//-Answer-
function pigIt(str){
  var result = [];
  var words = str.split(' ');
  for(var i = 0; i < words.length; i++){
    var letters = words[i].split('');
    var letters1 = letters.slice(1, letters.length);
    letters1.push(letters[0]);
    letters1.push('a');
    letters1.push('y');
    result.push(letters1.join(''));
  }
  return result.join(' ');
}

//-Question-Count the duplicates
function duplicateCount(text){
  
}
//-Answer-
function duplicateCount(text){
  console.log(text);
  var lower = text.toLowerCase();
  var duplicates = 0;
  var char = lower.split('');
  for(var i  =0 ; i < char.length; i++){
    var current = char[i];
    for(var j = 0; j < char.length; j++){
      if(current === char[j] && j !== i && current !== null){
        duplicates += 1;
        for(var x = 0; x < char.length; x++){
          if(char[x] === current){
            char[x] = null;
          }
        }
        break;
      }
    }
  }
  return duplicates;
}

//-Question-Adjacent pairs
function countAdjacentPairs(searchString) {

}
//-Answer-
function countAdjacentPairs(searchString) {
  var words = searchString.toLowerCase().split(' ');
  var count = 0;
  for(var i = 0; i < words.length; i++){
    var current = words[i]
    if(current === words[i + 1] && words[i] !== 0){
      count += 1;
      for(var j = 0; j < words.length; j++){
        if(words[j] === current) {
          words[j] = 0
        }
      }
    }
  }
  return count;
}

//-Question-Are they the same?
function comp(array1, array2){
}
//-Answer-
function comp(array1, array2){
  if(array1 || array1.length > 0){
    if(!array2){
      return false;
    }
    array1.sort(function(a, b){
      return a > b;
      });
    array2.sort(function(a, b){
      return a > b;
      });
    for(var i = 0 ; i < array1.length; i++){
      if(array1[i] * array1[i] !== array2[i]){
        return false;
      }
    }
    } else {
    return false;
  }
  return true;
}

//-Question-reversed string
function solution(str){

}
//-Answer-
function solution(str){
  return str.split('').reverse().join('');
}

//-Question-format string of names
function list(names){

}
//-Answer-
function list(names){
  console.log(names);
  var list = [];
  var str = '';
  if(names.length === 0){
    return str;
  } else if(names.length === 1){
    return str + names[0].name;
  }
  for(var i = 0; i < names.length; i++){
    list.push(names[i].name);
  }
  for(var i = 0; i < list.length; i++){
    if(i === (list.length - 2)){
      str = str + list[i] + ' & ' + list[i+1];
      break
    } else {
      str = str + list[i] + ', '
    }
  }
  return str
}

//-Question-
function oddOneOut(str) {

}
//-Answer-
function oddOneOut(str) {
  var char = str.split('');
  for(var i = 0; i < char.length; i++){
    var current = char[i];
    for(var j = 0; j < char.length; j++){
      if(i !== j && current === char[j]){
        char.splice(j, 1);
        if(j > i){
          char.splice(i, 1);
        } else if (i > j){
          char.splice(i - 1, 1);
        }
        i--
        break;
      }
    }
  }
  return char;
}

//-Question-string calculator
function calculate(string) {

}
//-Answer-
function calculate(string) {
  var final = []
  var words = string.split(' ');
  if(words[5] === 'loses'){
    return Number(words[2]) - Number(words[6]);
  } else if (words[5] === 'gains'){
    return Number(words[2]) + Number(words[6]);
  }
}

//-Question-numerology
function solution(date){

}
//-Answer-
function solution(date){
  var day = date.toISOString();
  var total = 0;
  var char = day.split('');
  for(var i = 0; i < char.length; i++){
    if(Number(char[i])){
      total = total + Number(char[i]);
    }
  }
  if(total > 10){
    var num = total.toString().split('');
    return Number(num[0]) + Number(num[1]);
  } else {
    return total;
  }
}

//-Question-
function count (string) { 

}
//-Answer-
function count (string) { 
  console.log(string);
  var count = {}
  var char = string.split('');
  for(var i = 0; i < char.length; i++){
    var current = char[i];
    var num = 0;
    for(var j = 0; j < char.length; j++){
      if(current !== 0 && current === char[j]){
        num = num + 1;
        char[j] = 0;
      }
    }
    if(current !== 0) {
      count[current] = num;
    }
  }
  return count;
}

//-Question- Camel Case method - 6
String.prototype.camelCase=function(){

}
//-Answer-
String.prototype.camelCase=function(){
console.log(this);
  let char = this.split('');
  if(char[char.length - 1] === ' '){
    char.splice(char.length - 1, 1);
  } else if(char.length === 0){
    return '';
  }
  char[0] = char[0].toUpperCase();
  for(let i = 0; i < char.length; i++){
    if(char[i] === ' ' && char[i + 1]){
      char[i + 1] = char[i + 1].toUpperCase();
      char.splice(i, 1);
      i--
    }
  }
  return char.join('');
}

//-Question-Where my anagrams at? - 5
function anagrams(word, words) {

}
//-Answer-
function anagrams(word, words) {
  var anagrams = [];
  if(word.length === 1){
    for(var j = 0; j < words.length; j++){
      if(word === words[j]){
        anagrams.push(words[j]);
      }
    }
    return anagrams;
  }
  var wordSorted = word.split('').sort().join('');
  var wordsSorted = words.map(function(char){
    return char.split('').sort().join('');
  });
  for(var i = 0; i < wordsSorted.length; i++){
    if(wordSorted === wordsSorted[i]){
      anagrams.push(words[i]);
    }
  }
  return anagrams;
}

//-Question-create phone number - kyu 6
function createPhoneNumber(numbers){

}
//-Answer-
function createPhoneNumber(numbers){
  var phone = '('
  for(var i = 0; i < numbers.length; i++){
    if(i < 2){
      phone = phone + numbers[i];
    } else if( i === 2){
      phone = phone + numbers[i] + ') '
    } else if(i < 4){
      phone = phone + numbers[i];
    } else if(i === 5){
      phone = phone + numbers[i] + '-';
    } else if (i < 10){
      phone = phone + numbers[i];
    }
  }
  return phone;
}

//-Question-all star challenge #15 - kyu 6
function rotate(str){

}
//-Answer-
function rotate(str){
  var reversed = [];
  var char = str.split('');
  var previous;
  for(var i = 0; i < char.length; i++){
    if(i === 0){
      reversed.push(char.join(''));
      previous = char.join('');
    } else {
      var action = []
      var prevChar = previous.split('');
      action.push(prevChar[previous.length - 1]);
        for(var j = 0; j < previous.length - 1; j++){
          action.push(prevChar[j]);
        }
      reversed.unshift(action.join(''));
      previous = action.join('');
    }
  }
  return reversed;
}

//-Question-dubstep - kyu 6
function songDecoder(song){

}
//-Answer-
function songDecoder(song){
  var lyrics = [];
  for(var i = 0; i < song.length; i++){
    if(song.charAt(i) !== 'W' && song.charAt(i + 1) !== 'U' && song.charAt(i + 2) !== 'B'){
      lyrics.push(song.charAt(i));
    } else if(song.charAt(i) === 'W' && song.charAt(i + 1) === 'U' && song.charAt(i + 2) === 'B') {
      i += 2;
      if(lyrics[lyrics.length - 1] !== ' '){
        lyrics.push(' ');
      }
    } else {
      lyrics.push(song.charAt(i));
    }
  }
  if(lyrics[lyrics.length - 1] === ' '){
    lyrics.splice(lyrics.length - 1, 1);
  }
  if (lyrics[0] === ' '){
    lyrics.splice(0, 1);
  }
  return lyrics.join('');
}

//-Question- finding the uniqe string - kyu 5
function findUniq(arr) {

}
//-Answer-
function findUniq(arr) {
  var sorted = []
  var lower = arr.map(function(str){
    return str.toLowerCase()
  });
  for(var i = 0; i < lower.length; i++){
    var letters = lower[i].split('');
    letters.sort();
    for(var x = 0; x < letters.length; x++){
      if(letters[x] === ' ' || letters[x] === letters[x + 1]){
        letters.splice(x, 1);
        x--
      }
    }
    if(letters.length <= 2){
      sorted.push(letters[0]);
    } else {
      sorted.push(letters[2]);
    }
  }
  for(var j = 0; j < sorted.length; j++){
    if(sorted[j] !== sorted[j + 1] ){
      return arr[j + 1];
    }
  }
}

//-Question-Reverse Words
function reverseWords(str){
}
//-Answer-
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

//-Question-kyu 6 find the odd int
function findOdd(A) {
}
//-Answer-
function findOdd(A) {
  let count = 0;
  for(let i = 0; i < A.length; i++){
    let current = A[i];
    for(let j = 0 ; j < A.length; j++){
      if(current === A[j]){
        count = count + 1;
      }
    }
    if(count % 2 !== 0){
      return current;
    } else {
      count = 0;
    }
  }
}

//-Question- find the divisors! kyu 6
function divisors(integer) {

};
//-Answer-
function divisors(integer) {
  let divisors = []
  for(let i = 2; i < integer; i++){
    if(integer % i === 0){
      divisors.push(i);
    }
  }
  if(divisors.length === 0){
    return integer.toString() + ' is prime';
  } else {
    return divisors;
  }
};

//-Question- replace with alphabet kyu 6
function alphabetPosition(text) {

}
//-Answer-
function alphabetPosition(text) {
  let string = [];
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var lower = text.toLowerCase().split('');
  for(let i = 0; i < text.length; i++){
    string.push(alphabet.indexOf(lower[i]) + 1);
  }
  for(let j = 0; j < string.length; j++){
    if(string[j] === 0){
      string.splice(j, 1);
      j--;
    }
  }
  return string.join(' ');
}

//-Question-is valid walk kyu 6
function isValidWalk(walk) {
}
//-Answer-
function isValidWalk(walk) {
  var count = 0;
  for(var i = 0; i < walk.length; i++){
    if(walk[i] !== walk[i + 1]){
      count = count + 1;
    }
  }
  return count === 10 ? true : false;
}

//-Question-Iterable Kyu 6
var uniqueInOrder=function(iterable){

}
//-Answer-
var uniqueInOrder=function(iterable){
  var arr = [];
  for(var i = 0; i < iterable.length; i++){
    if(iterable[i] !== iterable[i + 1]){
      arr.push(iterable[i]);
    }
  }
  return arr;
}

//-Question- Valid Parens Kyu 5
function validParentheses(parens){

}
//-Answer-
function validParentheses(parens){
  var single = parens.split('');
  if(single.length % 2 !== 0){
    return false;
  }
  var left = [];
  var right = [];
  for(var i = 0; i < single.length; i++){
    if(single[i] === '('){
      right.push(single[i]);
    } else if(single[i] === ')'){
      left.push(single[i]);
    }
  }
  if(single[0] === ')' || single[single.length - 1] === '('){
    return false;
  }else if(left.length === right.length){
    return true;
  } else {
    return false;
  }
}

//-Question- incrementString kyu 5
function incrementString (string) {

}
//-Answer-
function incrementString (string) {
  var numbers = [];
  var letters = [];
  var char = string.split('');
  for(var i = 0; i < char.length; i++){
    if(Number.isInteger(Number(char[i]))){
      numbers.push(char[i]);
    } else {
      letters.push(char[i]);
    }
  }
  if(numbers.length === 0){
    return string + '1';
  }else if(numbers.length === 1){
    var result = Number(numbers[0]) + 1
    return letters.join('') + result.toString();
  } else if(numbers.length > 1){
    var results = Number(numbers.join('')) + 1;
    var newNums = results.toString().split('');
    if(newNums.length < numbers.length){
      var count = newNums.length - 1;
      for(var j = numbers.length - 1; j >= 0; j--){
          if(count >= 0){
            numbers[j] = newNums[count]
            count -= 1;
          }
      }
      return letters.join('') + numbers.join('')
    } else if(newNums.length === numbers.length){
      return letters.join('') + newNums.join('');
    } else if(newNums.length > numbers.length){
      return letters.join('') + newNums.join('');
    }
  }
}

//-Question- Change to time formate kyu 5
function solution(hour) {

}
//-Answer-
function solution(hour) {
  var result = [];
  var str = hour.toString().split('');
  if(str.length === 3 || str.length === 4){
    for(var i = str.length - 1; i >= 0; i--){
      result.unshift(str[i])
      if(result.length === 2){
        result.unshift(':');
      }
    }
    return result.join('');
  } else {
    throw 'not the proper format';
  }
}

//-Question- powerSumDigTerm kyu 5
function powerSumDigTerm(n) {

}
//-Answer-
function powerSumDigTerm(n) {
    var count = 0;
    var result
    for(var i = 81; i > 0 ;i++){
      var sum = 0;
      var nums = i.toString().split('');
        for(var j = 0; j < nums.length; j++){
          sum = Number(nums[j]) + sum
        }
      for(var x = 0; x <= nums.length; x++){
        if(Math.pow(sum, x) === i){
          count += 1;
          result = i;
        }
      }
      if(count === n){
        return result;
      }
    }
}

//-Question-
//-Answer-
function validBraces(braces){
    var chars = braces.split('');
    var count = 0;
    for(var i = 0; i < chars.length; i++){
        if(chars[i] === '('){
            count += 1;
        } else if(chars[i] === ')'){
            count -= 1;
        } else if(chars[i] === '['){
            count += 1;
        } else if(chars[i] === ']'){
            count -= 1;
        } else if(chars[i] === '{'){
            count += 1;
        } else if(chars[i] === '}'){
            count -= 1;
        }
    }
    if(chars[0] === '(' && chars[chars.length - 1] !== ')' && count !== 0){
      return false;
    } else if(true){

    } else if(chars[0] === '(' && chars[chars.length - 1] === ')' && count === 0) { 
      return true;
    } else if(chars[0] === '{' && chars[chars.length - 1] !== '}'){
      return false;
    } else if(chars[0] === '{' && chars[chars.length - 1] === '}'){
      return true;
    } else if(chars[0] === '[' && chars[chars.length - 1] !== ']'){
      return false;
    } else if(chars[0] === '[' && chars[chars.length - 1] === ']'){
      return true;
    } else if(chars[0] === '(' && chars[chars.length - 1] === '}'){
      return false;
    } else if(count !== 0){
      return false;
    } else if(count === 0){
      return true;
    }
}

//-Question-has unique chars kyu 7
function hasUniqueChars(str){

}
//-Answer-
function hasUniqueChars(str){
  var chars = str.split('');
  for(var i = 0; i < chars.length; i++){
    var current = chars[i];
    for(var j = 0; j < chars.length; j++){
      if(current === chars[j] && j !== i){
        return false;
      }
    }
  }
  return true;
}

//-Question-IQ test Kyu 6
function iqTest(numbers){

}
//-Answer-
function iqTest(numbers){
  var nums = numbers.split(' ');
  var even = [];
  var odd = [];
  for(var i = 0; i < nums.length; i++){
    if(Number(nums[i]) % 2 === 0){
      even.push(Number(nums[i]))
    } else if (Number(nums[i]) % 2 !== 0){
      odd.push(Number(nums[i]))
    }
  }
  if(odd.length < even.length){
    return nums.indexOf(odd[0].toString()) + 1;
  } else if( odd.length > even.length){
    return nums.indexOf(even[0].toString()) + 1;
  }
}

//-Question- is prime kyu 6
function isPrime(num) {

}

//-Answer-
function isPrime(num) {
  if(num <= 1){
    return false;
  } else if (num === 2 || num === 3){
    return true;
  }
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
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


