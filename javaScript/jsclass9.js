let input=document.createElement('input')
let button = document.createElement('button')
button.innerText="click me";
let body =document.querySelector('body');
body.append(input);
body.append(button);

input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

let btn = document.querySelector("#btn");
btn.classList.add("btnstyle");
body.append(btn);

let h1=document.createElement('h1');
h1.innerText='DOM Practice';
h1.classList.add("dompractice");
body.append(h1);

let para = document.createElement("p");
para.innerHTML='<u>"Apna College <b>Delta</b> Practice"<u/>';
body.append(para);