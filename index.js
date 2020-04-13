var totalLength = document.querySelectorAll(".drum").length;
for(var i=0;i < totalLength;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
    var elementInnerHtml = this.innerHTML;
    makeSound(elementInnerHtml);
    makeAnimation(elementInnerHtml);
  });
}
document.addEventListener("keypress" , function (event){
  makeSound(event.key);
  makeAnimation(event.key);
});

function makeSound(play){
  switch(play){
      case 'w':
        var audio = new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case 'a':
        var audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case 's':
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case 'd':
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case 'k':
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case 'j':
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case 'l':
        var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
  }
}

function makeAnimation(get){
  document.querySelector("."+get).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + get).classList.remove("pressed");
  } , 100);
}
