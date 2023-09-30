const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hand =  document.querySelector(".hand");

function setTime() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  if(seconds === 0) {
    hand.style.transition = "none";
  }
  if(seconds !== 0) {
    hand.style.transition = "all 0.05s";
  }
  const secsDegrees = seconds * 6 + 90;
  const minsDegrees = minutes * 6  + 90;  
  const hoursDegrees = hours * 6 + 90;
  
  secondHand.style.transform = `rotate(${secsDegrees}deg)`;
  minuteHand.style.transform  = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(() => {
    setTime();
}, 1000);
