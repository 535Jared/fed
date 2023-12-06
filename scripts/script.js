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