//Q.Find the Product.
//Write a program that takes an array as input from the user and find out the product of the elements.
const Find_Prod = (array, N) => 
{
   let product=1;
   for(let i=0;i<N;i++){
     product=product*array[i];
   }
   return (product);
     


};
 console.log(Find_Prod([1,2,3,4,5],5));