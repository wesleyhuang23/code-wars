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

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-


//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-


