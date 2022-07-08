//Q.Count the Vowels and Consonants
//You are given a string S containing both uppercase and lowercase letters.you need to find out the number of vowels and the number of consonants in the given string.
var Count_Vowels= (S) => 
{
  let str="aeiouAEIOU";
  let vc=0;
  for(let i=0;i<S.length;i++){
    if(str.indexOf(S[i])!==-1)
    {
      vc+=1;
    }
  }
  return (vc);
      
};
console.log(Count_Vowels('Prepbytes'));
var Count_Consonants= (S) => 
{
  let cc=0;
  for(let i=0;i<=S.length-1;i++){
    if(S[i]!=="a" && S[i]!=="e" && S[i]!=="i" && S[i]!=="o" && S[i]!=="u" && S[i]!=="A" && S[i]!=="E" && S[i]!=="I" && S[i]!=="O" && S[i]!=="U" )
    
    {
      cc+=1;
    }
  }
  return (cc);
};
 
console.log(Count_Consonants('prepbytes'));
