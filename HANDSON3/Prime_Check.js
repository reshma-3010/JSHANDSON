//Q.Check whether a Number is a prime or not.
//Write a program which takes  a number from user and check whether number is prime number or not a prime number.
const Prime_Check = (N) => 
{  
   
	 
	 let count=0;
	 for(let i=1;i<=N;i++)
	 {
	   if((N%i) == 0)
	   {
	     count=count+1;
	   }
	   
	 }
	 if(count==2)
	   return ("YES");
	 else 
	   return ("NO");
	 
	
};
console.log(Prime_Check(31));
console.log(Prime_Check(21));
