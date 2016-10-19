//-Question-

function multiply(a, b){
  a * b
};

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
}

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
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-

//-Question-
//-Answer-
