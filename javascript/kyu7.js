//-Question-Reverse Letters in Sentence
//-Answer-
function reverser(sentence) {
	var word = [];
	var words = sentence.split(' ');
	console.log(words);
  for(var i = 0; i < words.length; i++){
    word.push(words[i].split('').reverse().join(''));
    }
    return word.join(' ');
}

//-Question-Get the Middle Character
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

//-Question-Double Trouble
//-Answer-
function trouble(x, t){
  for(var i = x.length - 1; i > 0; i--){
    if(x[i] + x[i - 1] === t){
    x.splice(i, 1);
    }
  }
    return x;
}

//-Question-Sum of all the multiples of 3 or 5
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

//-Question-Mubling
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

//-Question-Find how many times did a team from a given country win the Champions League?
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

//-Question-Digits explosion
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

//-Question-Vowel one
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

//-Question-Your Square!
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

//-Question-All Star Code Challenge #29
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

//-Question-Thinkful - List Drills: Longest word
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

//-Question-Sum all arrays
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

//-Question-Bubble sort Onece
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

//-Question-Categorize New Member
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

//-Question- First Reverse Try
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

//-Question-Jaden Case String
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

//-Question-Sum of numbers from 0 to N
//-Answer-
var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    var sum = '';
    var total = 0;
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

})();

//-Question-Count the characters
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

//-Question-reverse string
//-Answer-
function solution(str){
  return str.split('').reverse().join('');
}

//-Question-Fruit string calculator

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

//-Question-All unique
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

//-Question-high and low
//-Answer-
function highAndLow(numbers){
  let num = numbers.split(' ').sort(function(a, b){
      return a - b;
    });
  let result = '';
  return result + num[num.length - 1] + ' ' +  num[0]; 
}

//-Question-Disemvowel Trolls
//-Answer-
function disemvowel(str) {
console.log(str);
  let words = str.split('');
  for(let i = 0; i < words.length; i++){
    if(words[i].toLowerCase() === 'a' || words[i].toLowerCase() === 'e' || words[i].toLowerCase() === 'i' || words[i].toLowerCase() === 'o' || words[i].toLowerCase() === 'u'){
      words.splice(i, 1);
      i--;
    }
  }
  return words.join('');
}

//-Question-find twins
//-Answer-
function elimination(arr){
  let obj  ={};
  for(let i  =0; i < arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1;
    } else {
      return arr[i]
    }
  }
  return null;
}

//-Question-All Star Code Challenge #20
//-Answer-
function addArrays(array1, array2) {
  if(array1.length !== array2.length){
    throw 'will not work'
  }
  let result = [];
  for(let i = 0; i < array1.length; i++){
    result.push(array1[i] + array2[i]);
  }
  return result;
}

//-Question-Multiple characters
//-Answer-
function spam(number){
  let result = '';
  for(let i = 0; i < number; i++){
    result = result + 'hue';
  }
  return result;
}

//-Question-describeList
//-Answer-
function describeList(x) {
  if(x.length === 0){
    return 'empty'
  } else if(x.length === 1){
    return 'singleton';
  } else if (x.length > 1){
    return 'longer';
  }
}

//-Question-simple beads count
//-Answer-
function countRedBeads(n) {
  let red = 0;
  let blue = false;
  let blueCount = 0;
  let count = 0;
  for(let i = 0; blueCount < n; i++){
    if(!blue){
      blue = true;
      blueCount++
    } else if(blue && red < 1){
      red++
      count++;
    } else if(red === 1 && blue){
      red = 0;
      count++;
      blue = false;
    }
  }
  return count;
}

//-Question-multiplyAllelements in the array
//-Answer-
function multiplyAll(arr){
  return function(n){
    return arr.map((el) => {
      return n * el;
    });
  }
}

//-Question-tailSwap
//-Answer-
function tailSwap(arr) {
  let first = arr[0].match(/\:(.*)/);
  let second = arr[1].match(/\:(.*)/);
  arr[0] = arr[0].replace(/\:(.*)/, second[0])
  arr[1] = arr[1].replace(/\:(.*)/, first[0])
  return arr;
}

//-Question-Catagorize New Member
//-Answer-
function openOrSenior(data){
  let result = [];
  for(let i = 0; i < data.length; i++){
    if(data[i][0] >= 55 && data[i][1] > 7){
      result.push('Senior');
    } else {
      result.push('Open');
    }
  }
  return result;
}

//-Question-Sort numbers
//-Answer-
function solution(nums){
  if(nums === null){
    return [];
  }
  return nums.sort(function(a, b){
    return a - b;
  })
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