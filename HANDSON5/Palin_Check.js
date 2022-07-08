//Plaindrome Check
//You are given a string S,your task is to check whether the given string is a Palindrome or not.A palindrome is a string.which turnout same when read in reverse direction.
//Example: "naman" is a Palindrome
 
var Palin_Check = (str) =>
{
	 let length=str.length;
	 for(let i=0;i<length/2;i++){
	   if(str[i]!==str[length-1-i])
	   {
	     return ("False");
	   }
	 }
	 return ("True");
}

console.log(Palin_Check('Naman'));
console.log(Palin_Check('naman'));