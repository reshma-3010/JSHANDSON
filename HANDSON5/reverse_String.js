//Reverse the String
//You are given a string S,Your task is to Reverse the string.
//String can contain both upppercase lowercase letters.
 
var Reverse_String = (str) => 
{
    let s="";
    for(let i=str.length-1; i>=0;i--)
    {
      s+=str[i];
    }
    return s;
    
}
 
console.log(Reverse_String('I am utkarsh raj'));