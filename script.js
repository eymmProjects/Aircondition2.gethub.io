// $("h1").css("color","red");

//slider

$(".slider").slider({
    slide:function(event,ui){
 const slidersVal= $("#sliderVal").val(ui.value);
    },
    min:16,
    max:32
});

// console.log(sliderValue);



//label
$( "#slider" ).slider({
    value: 4,
    min: 16,
    max: 32,
    step: 1
})
.each(function() {

  //
  // Add labels to slider whose values 
  // are specified by min, max and whose
  // step is set to 1
  //

  // Get the options for this slider
  var opt = $(this).data().uiSlider.options;
  
  // Get the number of possible values
  var vals = opt.max - opt.min;
  
  // Space out values
  for (var i = 0; i <= vals; i++) {
    
    var el = $('<label>'+(i+16)+'</label>').css('left',(i/vals*100)+'%');
  
    $( "#slider" ).append(el);
    
  }
  
});

$("#sliderVal").val(16);


//button
$(".on-off").button();
//timer
$(".timer-choices").spinner({
  min:1,
  max:60
})
$(".timer-choices").val(0);


//timer2
$(".timer-2choices").selectmenu();
$(".mode-choices").selectmenu();
$(".automatic-ornot").selectmenu();



//functions start here



// converter
// 
/*
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(45);
*/


//weather generate random if the user choose automatic
//<!-- sunny, snow, cloudy, fog, raining, wind   -->

const weather =[
  {
  state : "sunny",
  mode :  "cool",
  temp: 20

},
{
  state : "snow",
  mode :  "heat",
  temp: 32

},
{
  state : "cloudy",
  mode :  "fan",
  temp: 26

},
{
  state : "raining",
  mode :  "cool",
  temp: 22

},
{
  state : "wind",
  mode :  "cool",
  temp: 29

},

];

/*

 <!-- date -->
                <h2 class="inp screen-Date">date here</h2>
                <!-- time -->
                <h2 class="inp screen-time">time here</h2>
                <!-- sunny, snow, cloudy, fog, raining, wind   -->
                <h2 class="inp screen-state">state here</h2> 
                <!-- cool fan heat-->
                <h2 class="inp screen-mode">mode</h2> 
                <!--countdown timer -->
                <h2 class="inp screen-countdown">Timer here</h2> 
                <!-- automatic or not -->
                <h2 class="automatic">automatic or not</h2>
                <!-- Digit -->
                <h2 class="inp screen-temp">temp number here <span class="measure">C</span> </h2>
*/



//choose value
const screenState =document.querySelector('.screen-state');
const screenMode= document.querySelector('.screen-mode');
const automatic=document.querySelector('.automatic');
const screenTemp=document.querySelector('.screen-temp');
const feedbackAction=document.querySelector('.feedback-action');
  
let ranVal = Math.floor(Math.random()*weather.length);
  screenState.innerHTML=weather[ranVal].state;
  screenMode.innerHTML="cool";

  $(".inp").hide();


jQuery(".btn-submit-3").click(function(e){
  e.preventDefault();
  // const automaticVal=$(".automatic-ornot").val;
  // $("#one").find(':selected').text();
  // console.log(automaticVal);
  const automaticVal=$(".automatic-ornot").find(':selected').text();

   let ranVal = Math.floor(Math.random()*weather.length);
  if(automaticVal === "Automatic"){
   

      
      screenState.innerHTML=weather[ranVal].state;
      screenMode.innerHTML=weather[ranVal].mode;
      automatic.innerHTML="Automatic";
      screenTemp.innerHTML=`${weather[ranVal].temp} C`;
      showFeed(feedbackAction,"change to Automatic",true);
    }else{
      
      
      automatic.innerHTML="Manual";
      screenState.innerHTML=weather[ranVal].state;
      showFeed(feedbackAction,"change to Manual",true);
      
  }



      // screenMode.innerHTML=weather[ranVal].mode;
  
  // console.log("working")
});

// console.log(automaticVal);
// if(${})



//mode start

$(".btn-submit-2").click(function(e){
      e.preventDefault();
      const modeVal=$(".mode-choices").find(':selected').text();
      const automaticVal=$(".automatic-ornot").find(':selected').text();
      console.log(automaticVal);
      if(automaticVal==="Manual"){
        showFeed(feedbackAction,`change to ${modeVal}`,true);
        $(".screen-mode").html(modeVal);
        
      }else{
        showFeed(feedbackAction,"change to manual!",false);
      }

      // console.log(modeVal);

     
  });
  //mode end




//date and time


function showTime() {

 let date = new Date();
 let hours = date.getHours();//0-23
 let minutes = date.getMinutes()//0-59
 let seconds = date.getSeconds()//0-59


 let formatHours = convertFormat(hours)

 hours = checkTime(hours)

 hours = addZero(hours)
 minutes = addZero(minutes)
 seconds = addZero(seconds)
 document.querySelector('.screen-time').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`


}

 //days


function showDate(){
    let date =new Date();
    let days = date.getDay();
    let months = date.getMonth();
    let years = date.getFullYear();


    document.querySelector('.screen-Date').innerHTML = `${days} / ${months} / ${years}`
}

function convertFormat(time) {
 let format = 'AM'
 if (time >= 12) {
  format = 'PM'
 }
 return format;
}

function checkTime(time) {
 if (time > 12) {
  time = time - 12;
 }
 if (time === 0) {
  time = 12;
 }
 return time
}

function addZero(time) {
 if (time < 10) {
  time = "0" + time;
 }
 return time
}
showDate();
setInterval(showTime, 1000)




//date and time end



//timer start






//timer end


//temperature value



// var count = jQuery(".screen-temp").slider("value");
  $(".screen-temp").html(`${0} C`);
  $(".screen-temp").css("font-size","45px");
$('.btn-submit').click(function(e){
  e.preventDefault();
  const automaticVal=$(".automatic-ornot").find(':selected').text();
  var val=jQuery(".slider").slider("value");
  console.log(val);
  if(automaticVal ==="Manual"){
          $(".screen-temp").html(`${val} C`);

    }else{

  // $(".feedback-action").html("Change to manual");
  //   $(".feedback-action").show();
  // setTimeout(function(){
  //   $(".feedback-action").hide();

  // },1500);
  showFeed(feedbackAction,"Change to manual first",false);

   }

  /*
     let val= jQuery(".slider").slider("value"); 
   val = (val/100)*10;
   console.log(val);
   showFeed(feedbackAct,`The valve open by ${val.toFixed(2)} %`,true);
  */
});


//btn increase decrease
var count =15;
$(".btn-Increase").click(function(){

var val =$(".screen-temp").html(`${count} C`);
    const automaticVal=$(".automatic-ornot").find(':selected').text();
    
    if(automaticVal==="Manual"){

      count++;
    }else{
      showFeed(feedbackAction,"change to manual first!",false);
    }
// if(val >='32' ){
//   count =15;
// }
//  if(val>'0'){
//   counter.style.color = '#4caf50';
//  }
//  else if(val === '0'){
//   val.style.color = 'white';
//  }
//  val.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
});
$(".btn-decrease").click(function(){

  var val =$(".screen-temp").html(`${count} C`);
  const automaticVal=$(".automatic-ornot").find(':selected').text();
  
  if(automaticVal==="Manual"){
    
    count--;
    }else{
      showFeed(feedbackAction,"change to manual first!",false);
    }
//  if(val>'0'){
//   counter.style.color = '#4caf50';
//  }
//  else if(val === '0'){
//   val.style.color = 'white';
//  }
//  val.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:'forwards'});
});

//temperature value end



//countdown timer start

/*
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
**/

const screenTimer= $(".timer-2choices").find(':selected').text();
const screenCountdown = $(".screen-countdown");
//screen-countdown
$(".btn-submit-1").click(function(){
  //const modeVal=$(".mode-choices").find(':selected').text();
  // const automaticVal=$(".automatic-ornot").find(':selected').text();

  
  var val=$(".timer-choices").val();
  console.log(val);
  // startTimer(val,screenCountdown);

});


///


// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//   var x = setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.text(minutes + ":" + seconds);

    
//     if (x < 0) {
//       window.clearInterval();
//     // timer = 0;
//     }
//     --timer


//     }, 1000);
// }



// jQuery(function ($) {
//     var fiveMinutes = 60 * 5,
//         display = $('#time');
//     startTimer(fiveMinutes, display);
// });

//countdown timer end


//button  on-off toggle
$(".on-off").click(function(){


  $(".inp").toggle("slow");

  // $(".feedback-action").html("Please wait...");
  // $(".feedback-action").show();
  // setTimeout(function(){
  //   $(".feedback-action").hide();

  // },1500);

  showFeed(feedbackAction,"please wait...",true);

})


//feed-action
function showFeed(element,text,value){
if(value===true){
    element.classList.add('success');
    element.innerText = text;
    screen.value='';
    setTimeout(function(){
    element.classList.remove('success');

    },3000)
}else{
    element.classList.add('alert');
    element.innerText = text;
    screen.value='';
    setTimeout(function(){
    element.classList.remove('alert');
},3000)

}
}