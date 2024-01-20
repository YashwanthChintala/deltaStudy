// let arr =[{
//     name: "yash",
//     marks: 94,
// },{
//     name: "varsha",
//     marks: 99,
// },{
//     name: "abhi",
//     marks: 100,
// }];

// arr.forEach((el) => {console.log(el.marks)})

// let arrr=[1,2,3,4];
// let double = arrr.map((el)=>{return el *2})

// let gpa = arr.map((el)=>{
//     return el.marks/10;
// })

// let nums =[1,5,3,6,9,5,2,9,6,3,5,8,4,1,1,11,0,2,3,33,6,66];

// let even = nums.filter((el)=>{
//     return el%2==0;
// })

// const words = ["apple", "banana", "orange", "apple", "banana", "apple"];

// const wordCount = words.reduce(function (accumulator, currentValue) {
//   if (accumulator[currentValue]) {
//     accumulator[currentValue]++;
//   } else {
//     accumulator[currentValue] = 1;
//   }
//   return accumulator;
// }, {});

// console.log(wordCount);


// const arr=[10,20,30,40,50,60,70,80];
// const divbyTen=arr.every((el)=>{
//     return el%10==0});
//    console.log(divbyTen);

// let min = Infinity;
// let arr=[336,84,1,84,621,62,84,1,];
// let ans = arr.reduce((accumulator,el)=>{
//     if( accumulator>el){
//         accumulator=el;
//         return el;
//     }
//     else{
//         return accumulator;
//     }
// });
//    console.log(ans);


// let arr =[1,2,3,4,5];
// let newarr =[...arr];
// // console.log(newarr);

// let chars =[..."hello"];

// function min(){
//     console.log(arguments);
// }
// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

// let nums=[1,2,3,4,5];
// const square = nums.map((el)=> el*el);
// console.log(square);
// let sum = square.reduce((acc,el)=>acc+el,0);
// let avg = sum/nums.length;
// console.log(avg);
// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

// let array = [1,5,2,3,6,8,9];
// let newArray=array.map((el)=>el+5);
// console.log(newArray);
// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.
// let arr=["sam","ram","dan","ran"];
// console.log( arr.map((str)=>str.toUpperCase()));

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.44

// function doubleAndReturnArgs(arr,...args){
// let doubleArray=arr.map((el)=>el*2);
// let doubleArgs=args.map((el)=>el*2);
// const resultArray=[...doubleArray,...doubleArgs];
// console.log(resultArray);
// return resultArray;
// }
// const doubleAndReturnArgs =(arr,...args)=>[
//   ...arr,
//   ...args.map((v)=>v*2)
// ];
// console.log(doubleAndReturnArgs([1,5,9,6,3,6,9],8,5,6,3,9,7,55));

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object. 

// let obj1={
//     name:"yash",
//     age:21,
//     class:"btech graduate",
//     grade:7.08,
// };
// let obj2={
//     name:"ash",
//     age:22,
//     class:"btech graduate",
//     grade:8.08
// };
// const mergeObjects=(obj1,obj2)=>({...obj1, ...obj2});
// // console.log(mergeObjects({obj1},{obj2}));
// console.log( mergeObjects({
//     name:"yash",
//     age:21,
//     class:"btech graduate",
//     grade:7.08,
// },{
//     name:"ash",
//     age:22,
//     class:"btech graduate",
//     grade:8.08
// }));