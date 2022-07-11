 //Check whether the year is leap or not
 //Write a program which takes an year N

//as input from the user and find out whether the given year is a Leap Year or not.
var Check_Leap = (year) => 
{
  if ((year%4===0) && (0!==year%100) || (year%400 === 0)){
    return ("Leap Year");
  }
  return ("Non Leap Year");
  

};
 
console.log(Check_Leap(2013));