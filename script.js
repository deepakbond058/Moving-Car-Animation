// let song =new Audio("sound.mp3");
console.log("hi");
let song= document.createElement("audio");
song.setAttribute("src", "sound.mp3");
song.play();
song.loop=true;
