// const mul =(a,b) => ( a * b );
 
// console.log('hi there !');
// setTimeout(() => {
//     console.log("apnacollege");
// },4000);
//  let id =setInterval(() => {
//     console.log("apnacollege");
// },2000);
// console.log("welcome to");


   
// const square = (n) => ( n*n);

// let id =setInterval( () =>{
//     console.log("Hello World");
// },2000);


// setTimeout(()=>{
//     clearInterval(id);
//     console.log("time out ");
// },10000);

// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers.
 
// const arrayAverage = (array) =>{
// let total =0;
// for(let i =0;i<array.length;i++){
//     total +=array[i];
// }
// let avg =total/array.length;
// return avg;
// };

// let arr =[1,2,3,4,5,6,7,8,9,10];
// console.log(arrayAverage(arr));


//Write an arrow function named isEven() that takes a single number as argument
//and returns if it is even or not.
// const isEven =(n) =>{
// return n%2===0;
// } ;

// Qs3. What is the output of the following code :
// const object = {
// message: 'Hello, World!',
// logMessage() {
// console.log(this.message);
// }
// };
// setTimeout(object.logMessage, 1000);

// Qs4. What is the output of the following code :
// let lh = 4;

function callback() {
console.log(this.lh);
}
// const object = {
// lh: 5,
// method(callback) {
// callback.bind(this)()
// },
// };

// object.method(callback, 1, 2);
callback();
