


//Q1.Create 2 objects-parent and child.Attach methods to parent  and use those methods in child object using parents prototype.


const parentProto= {
    calcAge(){
      console.log(`My name is ${this.fName} ${this.lName} and my age is ${2021-this.bYear}`);
  
    },
  
    initialise(fName,lName,bYear)
    {
  
      this.fName=fName;
      this.lName=lName;
      this.bYear=bYear;
    }
  }
  
  
  const childProto = Object.create(parentProto);
  childProto.initialise("uma","rangu",2000);
  console.log(childProto);
  childProto.calcAge();

//Q2.write a code to explain prototype chaining.
const personProto= {
  calcAge(){
    console.log(`My name is ${this.fName} ${this.lName} and my age is ${2021-this.bYear}`);

  },

  initialise(fName,lName,bYear)
  {

    this.fName=fName;
    this.lName=lName;
    this.bYear=bYear;
  }
}

const studentProto= Object.create(personProto);

studentProto.initial = function(fName,lName,bYear,course){
  personProto.initialise.call(studentProto,fName,lName,bYear);
  this.course = course;
}

studentProto.introduce = function(){
  console.log(`student name is ${this.fName} ${this.lName} and is pursuing course as ${this.course}`);
}

const sejhal = Object.create(studentProto);
sejhal.initial("sadiya","shaik",2001,"CSE");
sejhal.introduce();
sejhal.calcAge();

//Q3.Add a method to calculate sum of all elements in array in arrays's prototype,use that method to calculate sum for multiple arrays.

function add(a){

  let sum=0;
  for(let i in a)
  {
  sum+=a[i];
  
}
return sum;
}
let array=[1,1,1,1,1,1];
console.log(add(array));



 //Q4.Write a javascript program to retrieve all the names of object's own and inherited properties.
 
 
   function details(fname,lname,dob)
   {
    this.fname=fname;
    this.lname=lname;
    this.dob=dob;
   }

 const objTwo= new details("mahi", "golla","2000");
 console.log(objTwo);
 

 details.prototype.wish=function(){
  console.log("ALL the Best!");

 }

 objTwo.wish();