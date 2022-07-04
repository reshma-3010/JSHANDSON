//Q.Print the Odds.
//Write a program which takes  a number from user and print all odd numbers in between 2 and N, but print 2 first.
const Print_Odd = (N) => 
{
	 console.log("2");
    for(let i=3;i<=N;i=i+2){
        console.log(i);
    }
};
console.log(Print_Odd(21));