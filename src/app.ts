function getUnitTime(){
  var r = Math.random();
  if(r < (1/4)){
    return 1000 * 0
  }else if(r < (3/4)){
    return 1000 * 1
  }else{
    return 1000 * 2
  }
}



function advanceClock(date:Date){
  var twoDigit = function (num:number) {
    var digit
    if( num < 10 ){ 
      digit = "0" + num; 
    }else { 
      digit = num; 
    }
    return digit;
  }

  date.setTime(date.getTime()+getUnitTime());

  var hour = twoDigit(date.getHours());
  var minute = twoDigit(date.getMinutes());
  var second = twoDigit(date.getSeconds());

  document.getElementById("strange_clock_time").textContent = hour + ":" + minute + ":" + second;
}

var strange_date = new Date();

setInterval(advanceClock, 1000, strange_date);
