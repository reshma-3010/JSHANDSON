 //Reverse a Number
 //Write a program which takes a number N

//as input from the user and You need to reverse the number.
var Reverse_Number = (N) => 
{
  const reverse = (N) => parseInt(String(N)
.split("")
.reverse()
.join(""), 10);
return (reverse(N));

};
 
console.log(Reverse_Number(2000));