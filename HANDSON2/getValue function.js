//Q.Get Value
//You are provided with a table containing some characters and their corresponding values. 
//Your task will be to find the value from the table corresponding to an input character and return it.

// | P or p 	- PrepBytes      	|
// | Z or z 	- Zenith         	|
// | E or e 	- Expert Coder   	|
// | D or d 	- Data Structure 	|
const getValue = (a) => {
    switch(true){
      case (a=='P' || a=='p'):return ("PrepBytes");
      case (a=='Z' || a=='z'):return ("Zenith");
      case (a=='E' || a=='e'):return ("Expert Coder");
      case (a=='D' || a=='d'):return("Data Structure");
      default : return ("Invalid Input");
    }
};

console.log(getValue('E'));