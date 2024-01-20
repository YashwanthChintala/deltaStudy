// for(let i=1;i<=15;i=i+2){
// console.log(i);
// // if((2*i)-1==15){
// //     break;
// // }
// }

// for(let i=2;i<=10;i=i+2){
//     console.log(i);
//     }

//     console.log("backwards");

// for(let i=10;i>=2;i=i-2){
//     console.log(i);
//     }.

// infinte loop
//multiplication
// let n =prompt("enter the number");
// n=parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
//     }

// for(let i=5;i<=50;i=i+5){
//     console.log(i);
//     }

// for(let j=1;j<=5;j++){
//     console.log("this is outer loop"+j);
// for(let i=1;i<=5;i++){
//     console.log(i);
//     }}

// const favMovie ="limitless";
// let guessMovie=prompt("Guess my favourite movie");

// while((guessMovie != favMovie)&&(guessMovie !== "quit")){
//     guessMovie=prompt(`wrong guess please try again`);
// }


//  if(favMovie==guessMovie){
//     console.log(`yes  my favourite movie is ${guessMovie}`); 
// }
// else{
//     console.log(`YOU QUIT my favourite movie is ${favMovie}`); 
// }
// let fruits=['mango','apple','banana','litchi','orange']

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

// let heros = [ ['ironman','spiderman','thor'] ,
// ['superman','thor','batman'] ];
// for(let i=0;i<heros.length;i++){
//     console.log(i,heros[i],heros[i].length)
// for(let j=0;j<heros[i].length;j++){
//     console.log(`i=${i},j=${j},${heros[i][j]}`);   
// }    
// }

// for(list of heros){
//     for(hero of list){
//     console.log(hero);
// }}

// let arr=[1,2,3,4,5,6,2,3];
// num=2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);



// let number =287152;
// let originalNumber = number;
// let count=0;
// let remNum = number;
// let remainder;
// while(remNum>0){
//     remNum = Math.floor(remNum/10);
//     count++;
// }
// console.log(`the number of digits in the ${number} is `+count);
// while(number>0){

//     remainder = number%10;
//     number = Math.floor(number/10);
//     count +=remainder;
// }
// console.log(`the sum of digits in the ${originalNumber} is `+count);

// let result =1;
// let number =prompt("enter the number for the factorial");
// let n= Math.floor(number);
// if(n<0){
//     console.log('the input number should be greater than or eqaual to zero');
// }
// else{
// for(let i=1;i<=n;i++){
//      result *= i;
// }
// console.log(`${n}! (factorial of ${n}) = `+result);
// }
let arr =[9,5,6,3,4,7,11,15,12,16,23,17,19,20,21,18];
let num = arr[0];
for(let i =1;i<arr.length;i++){
    if(num<arr[i+1]){
        num=arr[i+1];
    }

}console.log(num);