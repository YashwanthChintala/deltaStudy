// let btn = document.querySelector("button");
// let p =document.querySelector("#result");
// let img =document.querySelector("img");


// btn.addEventListener("click",async()=>{
//     try{let dimg = await getDogImg();
//         img.src=dimg;
//         console.log(dimg); 
//     }
//      catch(e){
//          throw e;
//      }
//  })

// btn.addEventListener("click",async()=>{
//    try{let facts = await getFacts();
//    p.innerText=facts;
// }
//     catch(e){
//         throw e;
//     }
// }
// )


// let url = "https://catfact.ninja/fact";
// let url2 ="https://dog.ceo/api/breeds/image/random";
// async function getDogImg(){
//     try{
//     let res = await axios(url2);
//      return res.data.message;
//     }
//     catch(e){
//         throw e;  
//     }   
// }


// query in header 
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let state = document.querySelector("input").value;
    let collArr= await getCollege(state);
    show(collArr);
});

function show(collArr){
    let list =document.querySelector("#list")
    list.innerText="";
    for( col of collArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);

    }

}

let url="http://universities.hipolabs.com/search?country=india&state-province=";

async function getCollege(state){

try{
    let res = await axios.get(url+state);
    return res.data;
}
catch(e){
    console.log("error:",e)
}
}
