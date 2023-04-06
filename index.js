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
    <div class="baton"><button class="book-now-btn" >BOOK FROM 8am-10am</button></div>
    <div class="baton"><button class="book-now-btn2" >BOOK FROM 10am-12am</button></div>
    <div class="baton"><button class="book-now-btn3" >BOOK FROM 12am-2pm</button></div>
    <div class="baton"><button class="book-now-btn4" >BOOK FROM 2pm-4pm</button></div>
  `;
  //
  document.querySelector("#displayChargers").appendChild(chargercards);

  const btn = chargercards.querySelector(".book-now-btn");
  const btn1 = chargercards.querySelector(".book-now-btn2");
  const btn2 = chargercards.querySelector(".book-now-btn3");
  const btn3 = chargercards.querySelector(".book-now-btn4");



  const status = chargercards.querySelector(".station-status");


  // Add event listener for mouseover event
  btn.addEventListener("mouseover", function() {
    btn.blur(); // Blur the button on mouseover
  });

  // Add event listener for mouseover event
  btn1.addEventListener("mouseover", function() {
    btn1.blur(); // Blur the button on mouseover
  });

  // Add event listener for mouseover event
  btn2.addEventListener("mouseover", function() {
    btn2.blur(); // Blur the button on mouseover
  });

  // Add event listener for mouseover event
  btn3.addEventListener("mouseover", function() {
    btn3.blur(); // Blur the button on mouseover
  });

  btn.addEventListener("click", function() {
    
    const names = prompt("WRITE YOUR NAME HERE  NB:(YOU CAN ONLY BOOK AN EV CHARGER FOR THE DATE PRESENT TODAY!):");
    btn.innerText = "THIS STATION IS BOOKED FROM 8am-10am";
    
  });

  btn1.addEventListener("click", function() {
    
    const names = prompt("WRITE YOUR NAME HERE  NB:(YOU CAN ONLY BOOK AN EV CHARGER FOR THE DATE PRESENT TODAY!):");
    btn1.innerText = "THIS STATION IS BOOKED FROM 10am-12am";
    
  });

  btn2.addEventListener("click", function() {
    
    const names = prompt("WRITE YOUR NAME HERE  NB:(YOU CAN ONLY BOOK AN EV CHARGER FOR THE DATE PRESENT TODAY!):");
    btn2.innerText = "THIS STATION IS BOOKED FROM 12am-2pm";
    
  });
  
  btn3.addEventListener("click", function() {
    
    const names = prompt("WRITE YOUR NAME HERE  NB:(YOU CAN ONLY BOOK AN EV CHARGER FOR THE DATE PRESENT TODAY!):");
    btn3.innerText = "THIS STATION IS BOOKED FROM 2pm-4pm";
    
  });



}

