//Q.Find the sum of the digits of a given number.
//Write a program that takes a number from the user and get the sum of the digits present in the number.
const Number_Sum = (N) => 
{
	 let sum=0;
    while(N!==0){
        let rem=N%10;
        N=Math.floor((N/10));
        sum=sum+rem;
    }
    return (sum);

};
console.log(Number_Sum(5289));

