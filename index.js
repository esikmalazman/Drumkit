// .addEventListener("type",listener); setup function that will be call
// type= represents type of event listener and case sensitive
// listener = js function    //function inside listener doesnt need to have ()

// document.querySelector("button").addEventListener("click", handleClick); //TYPE 1
// function handleClick() {
//   alert("Clicked");
// }

// document.querySelectorAll("button").addEventListener("click", function  {      //TYPE 2      Anonymous Function
//     alert("I already been clicked");
// });
//detecting click
var nummberOfButtons = document.querySelectorAll(".drum").length; //all button 1-7
for (var a = 0; a < nummberOfButtons; a++) {
  document.querySelectorAll(".drum")[a].addEventListener("click", function () {
    //available when click
    //this = a identity //for click! button //this.style.color=white  = .drum.style.color=white
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimation(buttonInnerHTML);
  });
}

// function handleClick() {
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
// }

//detecting keyboard
document.addEventListener("keydown", function (event) {
  //event is to log keyboard
  //entire html will detect when keypress
  makeSound(event.key);
  makeAnimation(event.key);
});

function makeSound(key) {
  //key to trigger which char had been trigger
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function makeAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
