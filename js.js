var hours = 0;
var minutes = 30;
var timerHours;
var timeMinutes;

$(document.getElementById("playFull")).hide();

$('#up').on('click', function() {
  minutes += 30;
  while(minutes === 60){
    minutes = 0;
    hours += 1;
  }
  if(hours === 24){
    hours = 0;
    minutes = 30;
  }
  console.log(minutes);
  var a = document.createElement('a');
  a.className = "changeTime";
  a.innerHTML = hours + " : " + minutes;
  $(".changeTime").replaceWith(a);
});

$('#down').on('click', function() {
  if(minutes === 0){
    minutes = 30;
    hours -= 1;
  }else{
    minutes -= 30;
  }

  if((minutes === 0)&&(hours === 0)){
    minutes = 30;
    hours = 23;
  }

  var a = document.createElement('a');
  a.className = "changeTime";
  a.innerHTML = hours + " : " + minutes;
  $(".changeTime").replaceWith(a);
});

function timer(){
    if(minutes === 0){
      minutes = 59;
      hours -= 1;
    }else{
      minutes -= 10;
    }
}

$('#play').on('click', function() {
  $(document.getElementById("play")).hide();
  $(document.getElementById("playFull")).show();
  var a = document.createElement('a');
  a.className = "timeToWork";
  a.innerHTML = timerHours + " : " + timeMinutes;
  $(".timeToWork").replaceWith(a);
  var timerId = setInterval(function() {
    if((timerHours > 0) && (timeMinutes == 0)){
      timerHours -= 1 ;
      timeMinutes = 59;
    }else if(timeMinutes > 0){
        timeMinutes -=1
        a.className = "timeToWork";
        a.innerHTML = timerHours + " : " + timeMinutes;
        $(".timeToWork").replaceWith(a);
    }else if((timerHours == 0) && (timeMinutes == 0)){
      timerHours = hours;
      timeMinutes = minutes;
    }
  }, 60000);
  $('#pause').on('click', function() {
    setTimeout(function() {
      clearInterval(timerId);
      console.log(timeMinutes);
      $(document.getElementById("play")).show();
      $(document.getElementById("playFull")).hide();
    });
  });
  $('#stop').on('click', function() {
    setTimeout(function() {
      clearInterval(timerId);
      var a = document.createElement('a');
      a.className = "timeToWork";
      a.innerHTML = hours + " : " + minutes;
      $(".timeToWork").replaceWith(a);
      timerHours = hours;
      timeMinutes = minutes;
      $(document.getElementById("play")).show();
      $(document.getElementById("playFull")).hide();
    });
  });

});
