//-Question-remove zeros
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

//-Question-First non-repeating number
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

//-Question-Conver to camelcase
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

//-Question-break camelCase
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

//-Question-Extract the domain name from a URL
//-Answer-
function domainName(url){
  console.log(url);
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

//-Question-Simple pig latin
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

//-Question-Where my anagrams at?
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

//-Question-validParentheses
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

//-Question-String incremebter 
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

//-Question-time like string formate
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

//-Question- Directions Reduction
//-Answer-
function dirReduc(arr){
  for(let i = 0; i < arr.length; i++){
    if((arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') || (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') || (arr[i] === 'EAST' && arr[i + 1] === 'WEST') || (arr[i] === 'WEST' && arr[i + 1] === 'EAST')){
      arr.splice(i + 1, 1);
      arr.splice(i, 1);
      i = -1;
    }
  }
  return arr
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