// function printpoem(){
//     console.log("twinkle twinkle little star");
// }

// function rollDice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }

// function avgOfthreenum(a,b,c){
//     console.log((a+b+c)/3);
// }

// // avgOfthreenum(684864,8484,96);

// function mulTable(a){
//     let i,result;
//     for(i=1;i<=10;i++){
//         result=a*i;
//         console.log(a+'*'+i+'='+result);
//     }
// }
// // mulTable(9);
// let result=0 ;
// function sumofNum(n){
//  for(let i=1;i<=n;i++){
//      result += i;
//  }
// return result;
// }

// function multipleGreet(func,n){
//     for(i=1;i<=n;i++){
//         func();
//     }

// }

// function greet(){
//     console.log("hello");
// }
// multipleGreet(greet,5);
 


// assignment//

// Qs1. Write a JavaScript function that returns array elements larger than a number.


// function largerElement(arr,n)
// {
// let result = [];    
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>n){
//      result.push(arr[i]);
//     }
// }return result;
// }


// let array=[4,5,1,3,6,9,8,7,2,6,10,12];
// let n = 5;

// console.log(largerElement(array,n));

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”
// function unqChar(str){
//     let ans ="" ;
//     for(let i =0;i<str.length;i++){
//         let currElement = str[i];
//         if(ans.indexOf(currElement)==-1){
//             ans+=currElement;
//         }
//     }return ans;
// };
// let str = "abcdabcdefgggh";
// let unq=unqChar(str);
// console.log(unq);


// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

// function longestName(arr){
//     let longest = arr[0];
//     for(let i =1;i<arr.length;i++){
//         if(longest.length<arr[i].length){
//             longest = arr[i];
//         }
//     } return  longest;
// };

// let country = ["Australia", "GermanyGermanyGermanyGermanyGermany", "United States of America"]
// // output : "United States of America"
// console.log(longestName(country));

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.
// My code 
// function numOfVowels(str)
// { let count =0;
//     let vowels =["a","e","i","o","u"];
//     for(let i =0;i<str.length;i++){
//         for(let j =0;j<vowels.length;j++){
//            if( str[i]==vowels[j]){
//             count++;
//            }

//         }
    
//     }return count;

// }
// console.log(numOfVowels("yashwanth"));

// function numOfVowels(str)
// { let count =0;
//     let vowels =["a","e","i","o","u"];
//     for(let i =0;i<str.length;i++){
//        if( vowels.includes(str[i])){
//             count++;    
//         }
//     }return count;
// }
// console.log(numOfVowels("yashwanth"));

// Qs5. Write a JavaScript function to generate a random number within a range (start, end).
function randomNumRange(start,end){
   let Number=(Math.floor(Math.random()*(end-start+1))+start);
   return Number;
}
console.log(randomNumRange(11,20));