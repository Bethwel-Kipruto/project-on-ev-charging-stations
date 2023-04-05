// fetching data
const url ="http://localhost:3000/chargers"
fetch(url)
  .then(res => res.json())
  .then(chargers => chargers.forEach(chargers=> displayChargers(chargers)));

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// display chargers
function displayChargers(chargers){
  const chargercards = document.createElement("div");
  chargercards.className = "card";
  chargercards.innerHTML = `
    <img src=${chargers.image}><br>
    <h3 style="text-align:center">${chargers.location}</h3>
    <h5 style="text-align:center">${chargers.description}</h5>
    <h5 style="text-align:center">${chargers.cost}</h5>
    <h5 style="text-align:center">${chargers.compatibility}</h5>
    <div class="baton"><button class="book-now-btn" >BOOK NOW</button></div>
    <p class="station-status">THIS STATION IS FREE</p>
  `;
  
  document.querySelector("#displayChargers").appendChild(chargercards);

  const btn = chargercards.querySelector(".book-now-btn");
  const status = chargercards.querySelector(".station-status");

  btn.addEventListener("click", function() {
    const date = prompt("Choose a date for booking the charging station (YYYY-MM-DD format):");
    const timefrom = prompt("Choose a time from which you want to charge your car(am/pm format):");
    const timeto = prompt("Choose a time to which you'd want to charge your car (the time you'll be done charging your car) (am/pm format):");
    const names = prompt("Write your customer code here (if you don't have one contact our office):");
    btn.innerText = "THIS STATION IS BOOKED";
    status.innerText = `THIS CHARGING STATION IS BOOKED BY #${names} ON ${date} FROM ${timefrom} TO ${timeto}`;
  });
}
