//Q1.You are given a string(STR) of length N,consisting of only the lower case English alphabet.
//Your task is to remove all the duplicate occurrences of characters in the string.
//input:
//abcadeecfb
//Output
//abcdef
 
let str="abcadeecfb";
let set= new Set();
let words =str.split("");
words.forEach(ele=>{
    set.add(ele)
})
console.log(set);

//Q2.You are given a string(STR) of length N,you have to print the count of all alphabet.(using maps)
//input
// abcadeecfb
//output
//a=2,b=2,c=2,d=1,e=2,f=1
 


var Count_Occ = (s) => 
{
    let Arr = s.split("").sort();
    var p;
    let map1 = new Map();
    for(let i =0; i<Arr.length;i++)
    {
      p=0;
      Arr.reduce((acc,val)=>
      {
        if(val == Arr[i])
        {
          p=acc+1;
        }
        return p;
      }, 0);
      map1.set(`${Arr[i]}` , p);
    }
    let z = [];
    map1.forEach((value,key)=>
    {
    if(value>=1)
    {
      z.push(key + "" + value);
    }
    
    });
    return (z.join(""));
};
 console.log(Count_Occ("abcadeecfb"));



    