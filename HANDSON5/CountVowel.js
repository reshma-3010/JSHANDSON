//Q.count the vowels
//you are given a string S containing both uppercase and lowercase letters.you need to find out the number of vowels in the given string.

var Count_Vowels= (S) => 
{
    let count=0;
    let string=S.toString();
    for(let i=0;i<=string.length-1;i++){
      if(string.charAt(i)=='a'|| string.charAt(i)=='e' || string.charAt(i)=='i' || string.charAt(i)=='o' || string.charAt(i)=='u' || string.charAt(i)=='A' || string.charAt(i)=='E'|| string.charAt(i)=='I' || string.charAt(i)=='O'|| string.charAt(i)=='U')
      {
        count+=1;
      }
    
    }
    
    return (count);
      
    
};
console.log(Count_Vowels('Prepbytes'));