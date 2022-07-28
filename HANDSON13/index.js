//Q1. Print the Output

function counter(){
   var counter=0;

   
   function increaseCounter(){
    return counter+=1;
   };
   return increaseCounter;
}

var counter = counter();
alert(counter()); //1
alert(counter()); //2
alert(counter()); //3
alert(counter()); //4

//Q2.print output

let count=0;
(function immediate(){
    if(count ===0){
        let count=1;
        console.log(count); //1
    }
    console.log(count); //0
})();

//Q3.print the output

for(var i=0; i<3; i++){
    setTimeout(function log(){
        console.log(i); //3
    },1000);
}

//Q4.write a code to calculate area of a rectangle using inner function.In this case
//outer function should accept parameter length and inner function should accept parameter breadth.
function outer(length){
    
    function inner(breadth){
        let area = length*breadth;
        console.log(`area of the rectangle is  ${area} `);
    }inner(4);
}outer(5);


//Q5.Take a variable in outer function and create an inner function to increase the counter every time it is called

let facebookLikes = function()
{
    let likes=0;
    return  function()
    {
        likes++;
        console.log(`The count of the likes is ${likes}`);
    }
}
const countNumber = facebookLikes();
//console.log(countNumber);
countNumber();
countNumber();
countNumber();





//Q6.Print output

var a = 12;
(function (){
    alert(a);
})(); //12






//Q7.Print Output

var a = 10;
var x = (function(){
    var a= 12;
    return function(){
        alert(a);
    };
})();
x(); //12


//Q8.Print output

var globalVar = "xyz";

(function outerFunc(outerArg){
    var outerVar = 'a';
    (function innerFunction(innerArg){
        var innerVar='b';


        console.log(
            "outerArg = " + outerArg + "\n" + //outerArg = 123
            "innerArg = " + innerArg + "\n" +  //innerArg = 456
            "outerArg = " + outerArg + "\n" +  //outerArg = 123
            "innerArg = " + innerArg + "\n" +   //innerArg = 456
            "globalVar = "+ globalVar           //globalVar = xyz
        );
    })(456);
})(123);
