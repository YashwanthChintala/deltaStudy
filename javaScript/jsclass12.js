let url = "https://catfact.ninja/fact";
//  fetch(url)
// .then((res)=>{
//     return res.json()
//     })
// .then((data1)=>{
//     console.log("data1 = ",data1.fact);
//     return fetch(url)
// })
// .then((res)=>{
// return res.json()
// })
// .then((data2)=>{
//     console.log("data2 = ",data2.fact);
//     return fetch(url)
// })
// .then((res)=>{
//     return res.json()
//     })
// .then((data3)=>{
//     console.log("data3 = ",data3.fact);
// })
// .catch((err)=>{
//     console.log("ERROR - ",err);
// });
// console.log("happy ");

async function getFacts(){
    try{
    
            
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    }
    catch(e){
        console.log(e);  
    }   
}