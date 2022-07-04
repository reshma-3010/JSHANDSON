//Q.Find the number of digits
//Take a number from the user and print the count of digits in that number.
const Find_Digits = (N) => 
{
	  var count=0;
    while(N!==0){
    N=N/10;
    N=Math.floor(N);
    count=count+1;
    }
    console.log(count);
};
console.log(Find_Digits(1234));
