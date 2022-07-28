//Q1.Create one function with zero parameters having a console statement.
 function hello(){
    console.log("Hi! This is Reshma");
 }
 hello();

 //Q2. Create one function which takes two values as a parameter and print the sum of them as "Sum of 3,4 is 7".

 const add=(a,b)=>{
   return a+b;
 }
 console.log(add(3,4));

 //Q3.Create one arrow function
 
 const multiply = (x,y,z) =>
 {
    return x*y*z;
 }

 console.log(multiply(4,4,4));

 //Q4.Print output

 var x=21;
 var girl = function(){
    console.log(x);
    var x=20;
 };
 girl(); //undefined

 //Q5.Print output

 var x=21;
 girl();
 console.log(x);  //21
 function girl(){
    console.log(x); //undefined
    var x=20;
 };

 //Q6.Print output

 var x=21;
 a();          // a is not defined
 b();          //b is not defined
 console.log(a);

 a=function(){
    x=20;
    console.log(x);
 };

 b = function(){
    x = 40;
    console.log(x);
 };

//Q7.Write a program that accepts parameter n and returns factorial of n.

const factorial = (n) =>{
    let fact=1;
    while(n!=0){
        fact*=n;
        n--;
    }
    return fact;
}
console.log(factorial(5));