//Q1.Write the code to access element which is having id as "text".

 let elementOne = document.getElementById("text");
 console.log(elementOne);

//Q2.Write the code to access element which is having tag as "h1"

let elementTwo = document.getElementsByTagName("h1");
console.log(elementTwo);

//Q3.Write a code to access element which is having class as "box".

let elementThree=document.getElementsByClassName("box");
console.log(elementThree);

//Q4.<h1>Hello</h1>
//Change the heading from "Hello" to "Hello World" using DOM function.

document.getElementsByTagName("h1")[1].innerText="Hello World" ;

//Q5.Create three cards on html page and arrange them using flex property in row or horizontal direction and also
//create button at the bottom named "Change Flex Direction".When user clicks on this button,the cards arrangement should be changed to vertical direction.

function changingdirection()
{
  document.getElementById("parent").style.flexDirection= "column";

}

//Q6.what is the difference between window vs document?

//answer:Window Object-Top of the hierarchy.It is the outmost element of the object hierarchy.
//Document Object-Each HTML document that gets loaded into a window becomes a document object.



//Q7.<h1>Hello</h1>
//Add one style attribute and give text color as red and id attribute and give the id values as "heading"
//in the above given h1 tag using DOM functions.

let elementFour = document.getElementById("heading");
elementFour.innerText= "heading";
elementFour.style.color = "red";



//Q8.Create an HTML page having content as Hello World and a button named Replaced Text.when user will click on this button page content should be changed to
//"Welcome to Elevation academy"
 
function changeText()
{
  document.getElementsByTagName("h1")[2].innerText = "Welcome to Elevation Academy";
}
//Q9. Write code to implement timer clock using JS-display HH:MM:SS- the time should keep updating every second.
const clock=()=>{
    const time = new Date();
    let hh=time.getHours();
    let mm=time.getMinutes();
    let ss=time.getSeconds();
    let session = document.getElementById("am-pm");

    if(hh>=12)
    {
        hh=hh-12;
    }

    if(hh==0)
    {
      hh=12;
    }

    if(hh>= 12){
        
      session.innerText = "AM";
   }
   else  {
      session.innerText = "PM";
   }

   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
    




 document.getElementById("hours").innerText= `${hh}: `;
 document.getElementById("minutes").style.fontSize ="50px";
 document.getElementById("minutes").innerText= `${mm}: `;
 document.getElementById("hours").style.fontSize ="50px";
 document.getElementById("seconds").innerText= `${ss} `;
 document.getElementById("seconds").style.fontSize ="50px";
 session.style.fontSize="50px";
}
setInterval(clock,1000);
//Q10.Create a select drop down for selecting Year 20-21,21-22 etc. Print the item text selected
function getOption() {
  selectElement = document.querySelector('#year');
  output = selectElement.value;
  document.querySelector('.output').textContent = output;
}


//Q11.Create a form having name,email,phone no.,birth year
//Add validations-phone no. should start with 91,it should be 10 digits
//email should be domain prepbytes.com
//birth year should be >95

const input = document.getElementById('email');
const defaultEmail = '@prepbytes.com';
input.value = defaultEmail;