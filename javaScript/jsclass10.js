// let btn =document.querySelector('button');

// btn.addEventListener('click',function(){
// let h3=document.querySelector("h3");
// let random=randomcolor();
// h3.innerText=random;

// let div =document.querySelector("div");
// div.style.backgroundColor=random;
// console.log("color updated")
// })
// function randomcolor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
// return color;
// }

// let inp=document.querySelector("#text");
// let para=document.querySelector("#para")
// inp.addEventListener('input',function(event){
// event.preventDefault();
// console.log(inp.value);
// para.innerText = inp.value;
// })


// let btn =document.querySelector('button');
// btn.addEventListener('mouseout',function(event){
// console.log("mouse is released");
// event.preventDefault();
// });

// window.addEventListener("load", (event) => {
//     console.log("page is fully loaded");
//   });
  // Adding a scroll event listener to the window object
// let btn =document.querySelector('button');
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor="green"
//     console.log("the button color changed to green ")
// })

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]

let inp=document.querySelector("#text");
let h2=document.querySelector("#h2")
inp.addEventListener('input',function(event){

event.preventDefault();
let clearedinput="";
h2.innerText = inp.value;
// console.log(inp.value);
for (let i=0;i<inp.value.length;i++){
let char = inp.value[i];
if((char>= 'a'&&char<='z')||(char>='A'&&char<='Z')||char===" "){
  clearedinput+=char;
}}})