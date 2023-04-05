// fetching data
const url ="http://localhost:3000/chargers"
fetch(url)
.then(res => res.json())
.then(chargers => chargers.forEach(chargers=> displayChargers(chargers)))

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

//display chargers
function displayChargers(chargers){
    const chargercards = document.createElement("p")
    chargercards.className = "card"
    chargercards.innerHTML =`
    <img src=${chargers.image}><br>
    <h3>${chargers.location}</h3>
    <h5>${chargers.description}</h5>
    <h5>${chargers.cost}</h5>
    <h5>${chargers.compatibility}</h5>


    `
    document.querySelector("#displayChargers").appendChild(chargercards)
}


