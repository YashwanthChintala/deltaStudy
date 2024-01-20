let p =document.createElement('p');
p.innerText="Hey!I'm red!";
document.querySelector('body').append(p);
p.classList.add('red');

let h3 =document.createElement('h3');
h3.innerText="i'm a blue h3!"
document.querySelector('body').append(h3);
h3.classList.add("blue");

// p.style.color="red";

// h3.style.color="blue";

let div =document.createElement('div');
document.querySelector('body').append(div);
div.classList.add('box');

let h1=document.createElement('h1');
h1.innerText="I'm in a div";
document.querySelector('div').append(h1);

let np= document.createElement('p')
np.innerText="ME TOO!";
document.querySelector('div').append(np);

