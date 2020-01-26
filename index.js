const noofbut = document.querySelectorAll(".drum").length;
document.addEventListener("keypress", handleKey);

for (let i = 0; i < noofbut; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick() {
  let key = this.innerHTML;
  sound(key);
  buttonAnimation(key);
}
function handleKey(event) {
  sound(event.key);
  buttonAnimation(event.key);
}

function sound(key) {
  let link2;
  switch (key) {
    case "w":
      link2 = "tom-1.mp3";
      break;

    case "a":
      link2 = "tom-2.mp3";
      break;

    case "s":
      link2 = "tom-3.mp3";
      break;

    case "d":
      link2 = "tom-4.mp3";
      break;

    case "j":
      link2 = "snare.mp3";
      break;

    case "k":
      link2 = "crash.mp3";
      break;

    case "l":
      link2 = "kick-bass.mp3";
      break;

      dafault: console.log("Wrong Choice");
  }
  let link = "sounds/" + link2;
  let sound = new Audio(link);
  sound.play();
}
function buttonAnimation(key){
    key="."+key;
    document.querySelector(key).classList.add("pressed");
    setTimeout(function(){document.querySelector(key).classList.remove("pressed");},100)
}
