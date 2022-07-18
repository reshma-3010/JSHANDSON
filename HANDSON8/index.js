let studentRecords = [
    {name:'John',id:123, marks:98},
    {name:'Baba',id:101, marks:23},
    {name:'Yaga',id:200, marks:45},
    {name:'Wick',id:115, marks:75},
];

//Q1.We are interested in retrieving only the name of the students and all the names should in caps.
// ['JOHN','BABA','YAGA','WICK']

 let studentNames = studentRecords.map((items)=> items.name.toUpperCase());
 console.log(studentNames);


 //Q2.Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

//[{name:'John',id:123, marks:98},{name:'Wick',id:115, marks:75},]
 
let studentMarks= studentRecords.filter((item) => item.marks>50);
console.log(studentMarks);

//Q3.Retrive the details of students who score more than 50 marks and have id greater than 120
 
let studentId = studentRecords.filter((item)=> item.marks>50 && item.id>120);
console.log(studentId);

//Q4.Consider the same scenario we have discussed above, but this time we would like to know the sum of the total  marks of the students.
 
let marksSum = studentRecords.reduce(((acc,curr) => acc+curr.marks),0);
console.log(marksSum);

//Q5.This time we want to get only the names of the Students who scored more than 50 marks from the same dataset used above.

let studentNameMarks = studentRecords.filter((items)=> items.marks>50).map((item)=>item.name);
console.log(studentNameMarks);


//Q6. This time we are required to print the sum of marks of the students with id>120

let SumId = studentRecords.filter((item)=>item.id>120).reduce(((acc,curr) => acc+curr.marks),0);
console.log(SumId);

//Q7.This time we are required to print the total marks of the students with id>120.
//grace of 15 marks has been added to those students who scored less than 50.

for(let i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks<50){
    studentRecords[i].marks+=15;
    }
}

let MarksId = studentRecords.filter((item)=> item.id>120).reduce(((acc,curr) => acc+curr.marks),0);
console.log(MarksId);


//Q8.Create 6 objects,each object will have name,class,roll no as properties.Store these objects in an array of objects.

function Student(student_name,student_class,student_rollno){
    this.name=student_name;
    this.class=student_class;
    this.rollno=student_rollno;
}
 let studentOne = new Student("reshma",2,5);
 console.log(studentOne);

 
 let studentTwo = new Student("rahul",3,6);
 console.log(studentTwo);


 
 let studentThree = new Student("mahesh",4,27);
 console.log(studentThree);


 
 let studentFour = new Student("ravi",8,7);
 console.log(studentFour);


 
 let studentFive= new Student("rakul",6,55);
 console.log(studentFive);

 
 let studentSix = new Student("roji",7,15);
 console.log(studentSix);

