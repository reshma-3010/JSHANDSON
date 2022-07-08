//Q.String Replace
//You are given a string S,along with a pattern string and a text string. 
//You need to repalce the pattern string in S to the next text.

var Replace = (S, pattern , text) => 
{
     return S.split(pattern).join(text); 
};
 
console.log(Replace('Hi,I am You','You','Prepbytes'));
