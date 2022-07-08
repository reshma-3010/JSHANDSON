//Q.Count Occurrences
//You are given an array A containing N integer elements and an integer K,and your task is return the count of occurrences of K in aray A.
const findCount = (N, K, Arr) => 
{
  let count=0;
  for(let i=0; i<N ; i++){
    if(Arr[i] === K){
      count=count+1;
    }
  }
    return (count);
};
 console.log(findCount(4,3,[3,3,1,2]));