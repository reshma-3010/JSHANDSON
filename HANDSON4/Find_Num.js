//Q.Find whether the number is present or not
//Write a program which takes an array as input from the user and a number.
const Find_Num = (array,N,M) => 
{
   for(let i=0;i<=N;i++){
     if(array[i]==M){
       return("YES");
     }
   }
   return ("NO");
};
 console.log(Find_Num([1,2,3,4,5],5,2));