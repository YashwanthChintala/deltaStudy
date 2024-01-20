// //event bubbling;
// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");
// div.addEventListener("click",function(event){
// console.log("div was clicked");
// event.stopPropagation();

// })
// ul.addEventListener("click",function(event){
//     console.log("ul was clicked") ;
//     event.stopPropagation();

// })
// for (li of lis) {
//     li.addEventListener("click",function(event){
//         console.log("li was clicked");
//         event.stopPropagation();

    
//     });
// }
// ///


let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
        let newLi=document.createElement('li');
        newLi.innerText=inp.value;
        
        let delbtn=document.createElement('button'); 
        delbtn.innerText="delete";
        delbtn.classList.add("delete");

        newLi.append(delbtn);
        ul.appendChild(newLi);

        inp.value="";
 
    });

    ul.addEventListener("click",function(event){
       if( event.target.nodeName=="BUTTON"){
            let parEle=event.target.parentElement;
            parEle.remove();
       }
    })

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click",function(){
//         let par =this.parentElement;
//         // console.log(par);
//         par.remove();
//     })
// }