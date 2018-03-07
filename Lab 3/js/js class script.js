/////////////////////////////////////////////////////////////////////////
// Navbar Should Change Color Upon Hovering - OK
var navBar = document.getElementById("tmNavbar");
var navLi = navBar.getElementsByTagName("a"); 

var hoverOver = function()
{
    this.style.backgroundColor = "white";
    this.style.color = "black";
}

var hoverOut = function()
{
    this.style.backgroundColor = "#383E4C";
    this.style.color = "white";
}

for (i = 0; i < navLi.length; i++) 
{
    navLi[i].onmouseover = hoverOver; 
    navLi[i].onmouseout = hoverOut; 
}

/////////////////////////////////////////////////////////////////////////
// Pop Up Elert for Empty Fields + Info Shared is Returned
var contactName = document.getElementById("name");
var contactEmail = document.getElementById("email");
var contactSubject = document.getElementById("subject");
var contactMessage = document.getElementById("message");

if (contactName.value.length == 0) {
    alert("Please Complete Your Name!");
}
else if (contactEmail.length == 0) {
    alert("Please Complete Your Email!");
 }
else if (contactSubject.length == 0) {
    alert("Please Complete Message Subject!");
}
else if(contactMessage.length == 0) {
    alert("Please Add a Message!");
}
else{
    alert("Your Name: " + contactName.value + "Your Email: " + contactEmail.value + "Your Subject: " + contactSubject.value);
}
console.log(contactName);


/////////////////////////////////////////////////////////////////////////
// Click Green Button, Change Text and Color - OK
var greenButton = document.getElementsByClassName("feature-content-link green-btn");

var greenHover = function()
{
    this.style.backgroundColor = "orange";
    this.innerHTML = "Hello!";
}

var greenOut = function()
{
    this.style.backgroundColor = "#178A27";
    this.innerHTML = "Green Button";
}

for (i = 0; i < 100; i++) 
{
    greenButton[i].onmouseover = greenHover; // Error Present, Unsure Why
    greenButton[i].onmouseout = greenOut; 
}

/////////////////////////////////////////////////////////////////////////
// Button Linked to Profile - SOMEWHAT WORKS?
var blueButton = document.getElementsByClassName("feature-content-link.blue-btn").href="https://github.com/AHendrix276/ICD0007";
