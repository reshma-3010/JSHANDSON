//Q.Match the Strings.
//You are given two strings S1 and S2,your task is to print YES if both strings are same else print NO

var String_Match = (S1,S2) => 
{
     let lengthOne=S1.length;
     let lengthTwo=S2.length;
     if(lengthOne==lengthTwo){
       return ("YES");
     }
     return ("NO");
};
 
console.log(String_Match('Prepbytes','Prepbytes'));