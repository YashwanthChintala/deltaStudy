let h1=document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            h1.style.color= color;
            resolve();
        },delay);       
    });
}
changeColor("red",1000,)
.then(()=>{
    console.log("red color was completed");
    return changeColor("yellow",1000);
})
.then(()=>{
    console.log("yellow color was completed");
    return changeColor("pink",1000);
})
.then(()=>{
    console.log("pink color was completed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was completed");
})
// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("green",1000,()=>{
//             changeColor("violet",1000,()=>{
//                 changeColor("pink",1000,()=>{
//                     changeColor("blue",1000,()=>{})
//                 });
//             });
//         });
//     });
// });

// function savetoDb(data,success,failure){
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         success();
//     }
//     else{
//        failure();
//      }
// }
// // call back hell
// savetoDb("yashwanth",
// ()=>{
//     console.log("success:Your data was saved");
//     savetoDb("hello world",()=>{
//     console.log("success2:Your data was saved");
//     savetoDb("hello earth",()=>{
//     console.log("success3:Your data was saved");
//     },
//     ()=>{
//     console.log("failure3:Your data was saved");
//     }    
//     );
//     },
//     ()=>{
//         console.log("failure2:Your data was saved");
//     });
// },
// ()=>{
//     console.log("faliure:Weak connection.data is not saved");   
// }
// );


// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//     let internetSpeed=Math.floor(Math.random()*10)+1;
//     if(internetSpeed>4){
//         resolve("sucess:data was saved");//result
//     }
//     else{
//         reject("failure:weak connection ");//error
//      }
// });
// }
// savetoDb("apna college")
// .then((result)=>{
//     console.log("data1 saved");
//     console.log("result of promise:",result);
//     return savetoDb("hello world");
// })
// .then((result)=>{
//     console.log("data2 saved");
//     console.log("result of promise:",result);
//     return savetoDb("yashwanth");
// })
// .then((result)=>{
//     console.log("data3 saved");
//     console.log("result of promise:",result);

// })
// .catch((error)=>{
//     console.log("promise rejected");
//     console.log("error of promise:",error);
// })
