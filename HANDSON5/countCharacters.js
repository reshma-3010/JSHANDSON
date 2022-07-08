//Count Characters
//You are given a string S,
//and your task is to return an array B having a size of 2,where
// B[0] contains the count of character A (uppercase) in Strings S and B[1] contains the count of character D(uppercase) in string s.
const countCharacters = (S) => 
{
  let countA=0;
  let countD=0;
  let B=[2];
  for(i=0;i<S.length;i++){
    if(S.charAt(i)=="A"){
      countA+=1;
    }
    else if(S.charAt(i)=="D"){
      countD+=1;
    }
    else{
      countA;
      countD;
    }
  }
  B[0]=countA;
  B[1]=countD;
  return B;
  
};
 console.log(countCharacters("AbaDd"));

 
