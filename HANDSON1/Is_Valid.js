//Q.Find if the conditions are obeyed or not?
//You are given two numbers first as A and second as B and check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.
const Is_Valid = (a,b) => {
    return (a<10 && a>b)? "true" :"false" ;
  };
  console.log(Is_Valid(5,3));