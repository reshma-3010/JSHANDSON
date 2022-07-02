//Q.Calculator
//Write a program to make a simple calculator using switch statement that takes operator and two numbers from user and print the result after operation.
const Calculator = (A, B, C) => 
{
	switch(A){
	  case '+':
	    return (B+C);
	  case '-':
	    return (B-C);
	  case '*':
	    return (B*C);
	  case '/':
	    return (B/C);
	  default:
	    return ("Invalid Input");
	}
    
};
console.log(Calculator('+',2,3));