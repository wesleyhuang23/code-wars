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

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
