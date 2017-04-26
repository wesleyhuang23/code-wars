//-Question-Who likes it
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

//-Question-Bit counting
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

//-Question-Party unifier
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

//-Question-reverse words
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

//-Question-Sort the odd
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

//-Question-Arrary.Diff
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

//-Question-count duplicates
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

//-Question-Adjacent pairs in a string
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

//-Question-Are they the same
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

//-Question-Format a string of names like 'Bart, Lisa & Maggie'.
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

//-Question-Numerology
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

//-Question-count characters in the string
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

//-Question-CamelCase
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

//-Question-create phone number
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

//-Question-All Star Code Challenge #15
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

//-Question-Dubstep
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

//-Question-Find unique string
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
//-Answer-
function reverseWords(str){
  return str.split(' ').reverse().join(' ');
}

//-Question-find the odd int
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

//-Question-Find the divisors
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

//-Question-replace with alphabetPosition
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

//-Question-take ten minute walk
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

//-Question-unique in order
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

//-Question-IQ test
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

//-Question-is it a prime number
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

//-Question-Write Number in Expanded Form - Part 2
//-Answer-
function expandedForm(num) {
  var before = '';
  var str = [];
  var numStr = num.toString();
  var dec = false;
  var intZero = '';
  var zero = '10';
  for(var j = 0; j < numStr.length; j++){
    if(numStr[j] === '.'){
      break;
    }
    before = before + numStr[j];
  }
  if(before !== '0'){
    for(var x = before.length - 1; x >= 0; x--){
      str.unshift(before[x] + intZero);
      intZero = intZero + '0';
    }
  }
  for(var i = 0; i < numStr.length; i++){
    if(numStr[i] === '.'){
      dec = true;
    } else if(dec && numStr[i] !== '0'){
      str.push(numStr[i] + '/' + zero)
      zero = zero + '0'
    } else if(dec && numStr[i] === '0'){
      zero = zero + '0'
    }
  }
  for(var b = 0; b < str.length; b++){
    if(str[b] === '0'){
      str.splice(b, 1);
      b--
    }
  }
  return str.join(' + ');
}

//-Question-Write Number in Expanded Form
//-Answer-
function expandedForm(num) {
  var result = [];
  var position = '';
  var numStr = num.toString();
  for(var i = numStr.length - 1; i >= 0; i--){
    if(numStr[i] === '0'){
      position = position + '0'
    } else {
      result.unshift(numStr[i] + position);
      position = position + '0'
    }
  }
  return result.join(' + ');
}

//-Question-prime numbers
//-Answer-
function isPrime(number) {
  if(number <= 1){
    return false;
  }
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
  return true;
}

function getPrimes(start, finish) {
  let primes = [];
  if(start === 0 && finish === 0){
    return primes;
  } else if(start > finish){
    var first = start
    start = finish;
    finish = first;
  }
  for(var j = start; j <= finish; j++){
    var current = j;
    var count = true;
    if(current === 1 || current === 0){
      count = false;
    }
    for(var x = 2; x < current; x++){
      if(current % x === 0){
        count = false
        break;
      }
    }
    if(count === true){
      primes.push(current);
    }
  }
  return primes
}

//-Question-Order please
//-Answer-
function order(words){
  let obj = {};
  let result = [];
  var word = words.split(' ');
  for(let i = 0 ; i < word.length; i++){
    let current = word[i];
    for(let j = 0; j < current.length; j++){
      if(parseInt(current[j]) % 1 === 0){
        obj[current[j]] = current;
        break;
      }
    }
  }
  for(let x in obj){
    result.push(obj[x]);
  }
  return result.join(' ');
}

//-Question-Kebabize
//-Answer-
function kebabize(str) {
  let result = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase() && Number(str[i]) % 1 !== 0 && result.length > 0){
      result.push('-');
      result.push(str[i].toLowerCase());
    } else if(Number(str[i]) % 1 === 0 || str[i] === '-'){
      continue;
    } else {
      result.push(str[i].toLowerCase());
    }
  }
  return result.join('');
}

//-Question-Find the most senior developer
//-Answer-
function findSenior(list) {
  let ages = [];
  let seniors = [];
  for(let i = 0; i < list.length; i++){
    ages.push(list[i].age);
  }
  ages.sort();
  for(let j = 0; j < list.length; j++){
    if(list[j].age === ages[ages.length - 1]){
      seniors.push(list[j]);
    }
  }
  return seniors;
}

//-Question-duplicate arguments
//-Answer-
function solution(){
  let values = [];
  let obj = {};
  for(let i in arguments){
    values.push(arguments[i]);
  }
  for(let j = 0 ; j < values.length; j++){
    if(!obj[values[j]]){
      obj[values[j]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

//-Question-Will all continents be represented?
//-Answer-
function allContinents(list) {
  var continents = {
    Africa: false,
    Americas: false,
    Asia: false,
    Europe: false,
    Oceania: false
  }
    
  for(var i = 0; i < list.length; i++){
    if(list[i].continent === 'Africa'){
      continents.Africa = true;
    } else if (list[i].continent === 'Americas'){
      continents.Americas = true;
    } else if (list[i].continent === 'Asia'){
      continents.Asia = true;
    } else if (list[i].continent === 'Europe'){
      continents.Europe = true;
    } else if (list[i].continent === 'Oceania'){
      continents.Oceania = true;
    }
  }
  
  for(let j in continents){
    if(continents[j] === false){
      return false;
    }
  }
  return true;
}

//-Question-Dashatize it
//-Answer-
function dashatize(num) {
  if(num % 1 !== 0){
    return 'NaN';
  } else if(num < 0){
    num = Math.abs(num);
  }
  let result = '';
  let strNum = num.toString();
  for(let i = 0; i < strNum.length; i++){
    if(Number(strNum[i]) % 2 !== 0 && i !== 0){
      result = result + '-';
      result = result + strNum[i];
    } else {
      if(Number(strNum[i - 1]) % 2 !== 0){
        result = result + '-';
      }
      result = result + strNum[i];
    }
  }
  if(result[0] === '-'){
    result = result.split('').splice(1, result.length - 1).join('');
  }
  return result;
};


//-Question-Multiples of 3 and 5
//-Answer-
function solution(number){
  let sum = 0;
  for(let i = 0; i < number; i++){
    if(i % 3 === 0){
      sum = sum + i
    } else if (i % 5 === 0){
      sum = sum + i;
    }
  }
  return sum;
}

//-Question-String transformer
//-Answer-
function stringTransformer(str) {
  let words = str.split(' ');
  let result = [];
  for(let i = 0; i < words.length; i++){
    let currentWord = words[i].split('');
    if(words[i] == ''){
      result.unshift('');
    }
    for(let j = 0; j < currentWord.length; j++){
      if(currentWord[j] === currentWord[j].toUpperCase()){
        currentWord[j] = currentWord[j].toLowerCase();
        if(j === currentWord.length - 1){
          result.unshift(currentWord.join(''));
        }
        continue
      } else if(currentWord[j] === currentWord[j].toLowerCase()){
        currentWord[j] = currentWord[j].toUpperCase();
        if(j === currentWord.length - 1){
          result.unshift(currentWord.join(''));
        }
        continue
      }
    }
  }
  return result.join(' ');
}

//-Question-Reverse vowel in a string
//-Answer-
function reverseVowels(str) {
  let chars = str.split('');
  let vowels = [];
  let count = 0;
  let obj = {'a': 1, 'e': 1, 'i': 1, 'o': 1,'u': 1}
  for(let i = 0; i < chars.length; i++){
    if(obj[chars[i].toLowerCase()]){
      vowels.unshift(chars[i]);
      chars[i] = null
    }
  }
  for(let j = 0; j < chars.length; j++){
    if(chars[j] === null){
      chars[j] = vowels[count];
      count++;
    }
  }
  return chars.join('');
}

//-Question-sumConsecutives
//-Answer-
function sumConsecutives(s) {
  let result = [];
  let sum = 0;
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i + 1]){
      sum = sum + s[i]
    } else if(s[i] !== s[i + 1] && sum !== 0) {
      result.push(sum + s[i]);
      sum = 0;
    } else{
      result.push(s[i]);
    }
  }
  return result;
}

//-Question-split strings
//-Answer-
function solution(str){
  let char = str.split(''); let result = []; let count = 0; let x = 0;
  for(let i = 0; i < char.length; i++){
    if(count === 0){
      result[x] = '';
    }
    result[x] = result[x] + char[i];
    count++
    if(count === 2){
      count = 0;
      x++
    }
  }
  if((char.length - 1) % 2 === 0){
    result[result.length - 1] = result[result.length - 1] + '_';
  }
  return result
}

//-Question-Arrays Similar

//-Answer-
function arraysSimilar(arr1, arr2) {
  arr1.sort(function(a, b){
    return a - b;
  });
  arr2.sort(function(a,b){
    return a - b;
  });
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  if(arr1.length === arr2.length){
    return true;
  }
}

//-Question-Find the unique number
//-Answer-
function findUniq(arr) {
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] = obj[arr[i]] + 1;
    }
  }
  for(let i in obj){
    if(obj[i] === 1){
      return Number(i);
    }
  }
}


//-Question- Fizz/Buzz
//-Answer-
function solution(number){
  let result = [0, 0, 0]
  for(let i = 1; i < number; i++){
    if(i % 3 === 0 && i % 5 !== 0){
      result[0] += 1;
    } else if (i % 5 === 0 && i % 3 !== 0){
      result[1] += 1;
    } else if ( i % 3 === 0 && i % 5 === 0){
      result[2] += 1;
    }
  }
  return result;
}

//-Question- Master of Files
//-Answer-
String.prototype.isAudio= function(){
  let period = false;
  for(let i = 0; i < this.length; i++){
    if((this[i] === ' ' || Number(this[i]) % 1 === 0) && !period){
      return false;
    }
    if(this[i] === '.'){
      period = true;
      continue;
    }
    if(period){
      if(this[i] == this[i].toUpperCase() && this[i] % 1 !== 0){
        return false;
      }
    }
  }
  let file = this.match(/\.(.*)/g)
  if(file[0] === '.mp3' || file[0] === '.flac' || file[0] === '.alac' || file[0] === '.aac'){
     return true 
   } else {
     return false
   }
   
};
String.prototype.isImage= function(){
  let period = false;
  for(let i = 0; i < this.length; i++){
    if((this[i] === ' ' || Number(this[i]) % 1 === 0) && !period){
      return false;
    }
    if(this[i] === '.'){
      period = true;
      continue;
    }
    if(period){
      if(this[i] == this[i].toUpperCase() && this[i] % 1 !== 0){
        return false;
      }
    }
  }
  let file = this.match(/\.(.*)/g)
  if(file[0] === '.jpg' || file[0] === '.jpeg' || file[0] === '.png' || file[0] === '.bmp' || file[0] === '.gif'){
     return true
   } else {
     return false
   }
};

//-Question-N-th Fibonacci
//-Answer-
function nthFibo(n) {
  switch(n){
    case 0:
      return 0;
    case 1:
      return 0;
    case 2:
      return 1;
    case 3:
      return 1;
  }
  let result = [0, 1, 1];
  for(let i = 2; i < n; i++){
    result.push(result[i] + result[i - 1])
  }
  return result[result.length - 2];
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