//Q.Check whether the condition is fulfilled or not?
//Write a program that takes a number and prints whether the number is divisible by 6 and 9 or not.
const Check_divisibility = (N) => {
    if(( N % 6  == 0) && (N % 9 == 0)){
     return ("Divisible by both");
   }
   else{
     return (" Not Divisible by both");
   }

   
};
console.log(Check_divisibility(36));
console.log(Check_divisibility(27));