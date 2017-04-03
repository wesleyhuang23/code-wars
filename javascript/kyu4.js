//-Question-Range Extraction
//-Answer-
function solution(list){
 let result  = '';
 let dash = false;
 for(let i = 0; i < list.length; i++){
   if(i === 0 && list[i + 1] - list[i] === 1 && list[i + 2] - list[i + 1] === 1 && !dash){  
     result = result + list[i] + '-'
     dash = true;
   } else if(i === 0){
     result = result + list[i]
   } else if(list[i + 1] - list[i] === 1 && list[i + 2] - list[i + 1] === 1 && !dash){
     result = result + ',' + list[i] + '-';
     dash = true;
   } else if (list[i + 1] - list[i] !== 1 && dash){
     result = result + list[i]
     dash = false;
   } else if(list[i + 1] - list[i] !== 1){
     result = result + ',' + list[i]
   } else if(list[i + 1] - list[i] === 1 && !dash){
    result = result + ',' + list[i]
   }
  }
  return result;
}

//-Question-Human readable duration format
//-Answer-
function formatDuration (seconds) {
  if(seconds === 0){
    return 'now';
  }
  let sec = 0; let minutes = 0; let hours = 0; let days = 0; let years = 0;
  let count = 0;
  let s = false; let m = false; let h = false; let d = false; let y = false;
  let result = [];
  while(seconds > 0){
    if(seconds < 60){
      sec += seconds
      seconds -= seconds;
    } else if(seconds >= 86400){
      seconds -= 86400;
      days += 1;
    } else if(seconds >= 3600){
      seconds -= 3600;
      hours += 1;
    } else if(seconds >= 60){
      seconds -= 60;
      minutes += 1;
    } 
    if(minutes === 60){
      minutes = 0;
      hours += 1;
    }
    if(hours === 24){
      hours = 0;
      days += 1;
    }
    if(days === 365){
      days = 0;
      years += 1;
    }
  }
  if(sec > 0){
    count++;
  }
  if(minutes > 0){
    count++;
  }
  if(hours > 0){
    count++;
  }
  if(days > 0){
    count++;
  }
  if(years > 0){
    count++;
  }
  for(let i = 0; i < count; i++){
    if(sec === 1 && !s){
      result.unshift('second');
      result.unshift('1');
      s = true;
    } else if(sec > 0 && !s){
      result.unshift('seconds');
      result.unshift(sec.toString());
      s = true;
    } else if(minutes === 1 && !m){
      result.unshift('minute');
      result.unshift('1');
      m = true;
    } else if(minutes > 0 && !m){
      result.unshift('minutes');
      result.unshift(minutes.toString());
      m = true;
    } else if(hours === 1 && !h){
      result.unshift('hour');
      result.unshift('1');
      h = true;
    } else if(hours > 1 && !h){
      result.unshift('hours');
      result.unshift(hours.toString());
      h = true;
    } else if(days === 1 && !d){
      result.unshift('day');
      result.unshift('1');
      d = true;
    } else if(days > 1 && !d){
      result.unshift('days');
      result.unshift(days.toString());
      d = true;
    } else if(years === 1 && !y){
      result.unshift('year');
      result.unshift('1');
      y = true;
    } else if(years > 1 && !y){
      result.unshift('years');
      result.unshift(years.toString());
      y = true;
    }
  }
  if(count === 2){
    result.splice(2, 0, 'and');
    return result.join(' ');
  } else if(count === 3){
    result[1] = result[1] + ',';
    result.splice(4, 0, 'and');
    return result.join(' ');
  } else if(count === 4){
    result[1] = result[1] + ',';
    result[3] = result[3] + ',';
    result.splice(6, 0, 'and');
    return result.join(' ');
  } else if(count === 5){
    result[1] = result[1] + ',';
    result[3] = result[3] + ',';
    result[5] = result[5] + ',';
    result.splice(8, 0, 'and');
    return result.join(' ');
  }
  return result.join(' ');
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