
//For Loops
for (let i=1; i<=5; i++){

    console.log("*****");
}


//Calculate sum of 1 to n?
// let sum=0;
// let n=100;
// for (let i=1; i<=n; i++ ){
//     sum=sum+i;

// }
// console.log("sum =",sum);
// console.log("Loop has ended")


//
// for(let i=1; i<=5; i++){
//     console.log("i = ",i);
// };
// console.log(i);



//Infine loop- A loop that never Ends 
// dont create loop 
//if Stopping condition true then that loop will never ends 



/* While Loops 

We can do all works with all diff loops 

syntax
while (condition){
    //do some work 
    updation
} 
let i=1;
while (i<=5){
    console.log("*");
    i++;
};

*/


/* Do While Loop*/

// let i=1;
// do{
//     console.log("*")
//     i++;
// } while(i<=10);



/* for - of - Loop
for string and array  we can user this 

for ( let value of strvariable){
    //do somework
} */

//Iterator -> characters
// let str= "shubham shinde";

// for ( let i of str ){
//     console.log("i = ",i)
// }


// let str="shubham shinde";
// let size=0;

// for(let i of str){
//     //iterator -> characters
//     console.log("i = ",i);
//     size ++;

// }
// console.log("String Size =", size);


/* for-in-loop (in)
for object we can use for of loop

for (let value in strvariable){
    //do some work
} */


// let student={
//     name:"shubham",
//     age:28,
//     cgpa:7.8,
//     isPass:true,

// };
// for(let key  in student){
//     console.log("key =",key,"value=",student[key]);
// };


//Practice Q1
/*Print all even number from 0 to 100

let i=0;

for ( i=0; i<=100; i++){
    if (i%2!==0){
        console.log("odd numbers =",i)
    } 

};

*/

//Practice 2

//create a game where you start any random game number . ask the user to keep 
//guessing the game number until the user enters correct CSSMathValue.


// let gameNum=25;
// let userNum = prompt("Guess the game number:");

// while(userNum != gameNum) {
//     userNum=prompt("You entered wrong number please guess correct one: ");
    
// }
// console.log("Congratulation, You entered the right number");
