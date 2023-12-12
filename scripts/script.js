// JavaScript Document
console.log("hi");




// Open menu
var openmenu = document.querySelector("header button");
openmenu.onclick = openmenufunction;

function openmenufunction(){
    document.querySelector("nav").classList.add("openMenu"); /* roept de nav op > kijkt in de lijst van nav classes > voegt een class toe */
    document.querySelector("nav > ul:nth-of-type(1)").setAttribute("aria-hidden",false);
    document.querySelector("nav > ul:nth-of-type(2)").setAttribute("aria-hidden",false);
    document.querySelector("nav > article").setAttribute("aria-hidden",false);
}

   
// Sluit menu
var closemenu = document.querySelector("nav button");
closemenu.onclick = closemenufunction;

function closemenufunction(){
    document.querySelector("nav").classList.remove("openMenu");
    document.querySelector("nav > ul:nth-of-type(1)").setAttribute("aria-hidden",true);
    document.querySelector("nav > ul:nth-of-type(2)").setAttribute("aria-hidden",true);
    document.querySelector("nav > article").setAttribute("aria-hidden",true);
}


// winkelmand - Met hulp van codepen animaties opdracht 3 
var winkelmandKnop = document.querySelectorAll("main article:nth-of-type(2) button:nth-child(1)");
for (let i = 0; i < winkelmandKnop.length; i++) {
    winkelmandKnop[i].addEventListener("click", addToShoppingCart);
}

function addToShoppingCart() {
    let mandAmount = document.querySelector("header ul:nth-child(1) a p");
    let currentAmount = mandAmount.innerHTML;
    currentAmount = parseInt(currentAmount);
    let nieuwAmount = currentAmount + 1;
    mandAmount.innerHTML = nieuwAmount;
}


// foto verandering https://www.shecodes.io/athena/15247-how-to-change-the-src-in-img-after-clicking-button-with-addeventlistener

// const imgPijltje = document.querySelector("main summary img");
// const summary = document.querySelector("main summary");

// var open = true;

// summary.addEventListener("click", function() {
//     if (open) {
//         imgPijltje.src = "../images/icon/open.png"
//     } 
//     else {
//         imgPijltje.src = "../images/icon/dicht.png"
//     }
//     open = !open;
// });