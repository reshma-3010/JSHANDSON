//Q1.Write one example explaining how you can write a callback function.
// setTimeout((colour)=>{
//     console.log(`My favourite colour is ${colour}`);
// },2000,"yellow");



//Q2.Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec, 
//2 should be printed after 2 secs, 3 should be printed after 3 secs and so on.
//Explain callback hell
//Numbers
//1
//2
//3
//4
//5
//6
//7


// setTimeout(()=>{
//     console.log("1");

// },1000);
// setTimeout(()=>{
//     console.log("2");
// },2000);
// setTimeout(()=>{
//     console.log("3");
// },3000);
// setTimeout(()=>{
//     console.log("4");
// },4000);
// setTimeout(()=>{
//     console.log("5");
// },5000);
// setTimeout(()=>{
//     console.log("6");
// },6000);
// setTimeout(()=>{
//     console.log("7");
// },7000);


//Q3.Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec
// 2 should be printed after 2 secs,3 should be printed after 3 sec and so on.


//Numbers
//1
//2
//3
//4
//5
//6
//7

// let promise = new Promise((resolve,reject) => {
//     resolve();
// });

// promise
// .then(()=>{
//     setTimeout(()=>{
//         console.log("1");
//     },1000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("2");
//     },2000)
// }
    
// )
// .then(()=>{
//     setTimeout(()=>{
//         console.log("3");
//     },3000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("4");
//     },4000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("5");
//     },5000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("6");
//     },6000)
// })
// .then(()=>{
//     setTimeout(()=>{
//         console.log("7");
//     },7000)
// });


//Q4.Create a promise function accepting a argument,if yes is passed to the function then it should
//go to resolved state and print Promise Resolved,and if nothing is passed then it should go to
//reject state and catch the error and print Promise Rejected.

// const promiseOne= new Promise((resolve,reject)=>{
//     let arr =["reshma","shameena","Mahi","Maresh"];
//     console.log(arr);
//     resolve();
// })

// promiseOne
// .then((data)=>{
//     console.log("Promise Resolved");
// })
// .catch((error)=>{
//     console.log("Promise Rejected");
// })
// .finally(()=>{
//     console.log("End of the Promise");
// });



//Q5.Create examples to explain callback function

// setTimeout((soapOne,soapTwo) =>{
//     console.log(`The soaps i used are ${soapOne} and ${soapTwo}`);
// },2000,"Mysoor sandal", "santoor");


//Q6.Create examples to explain callback hell function

// const getEmpId = () =>{
//     setTimeout(() =>{
//         console.log("Fetching the ID,s");
//         let id =[1,2,3,4,5];
//         console.log(id);
//         setTimeout(() => {
//             let empDetails = {
//                 fName : "Harsh",
//                 lName : "Bajaj",
//                 age : 28,
//             }
        
//             console.log(`My name is ${empDetails.fName} ${empDetails.lName} and age is ${empDetails.age} `);
//         setTimeout(() => {
//             empDetails.gender = "Male";
//             console.log(`My name is ${empDetails.fName} ${empDetails.lName} and age is ${empDetails.age} and the gender is ${empDetails.gender}`);
//         },2000);
        
//         },2000);
//     },2000);
// }
// getEmpId();

//Q7.Create examples to explain promises function

// const promiseTwo = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let fruits=["apple","banana","carrot","beetroot"];
//         resolve(fruits);
//         reject("Error in fetching the datails");
//     },1000);
   

// });
// promiseTwo
// .then((data)=>{
//     console.log("The names of the fruits are:",data);
// })
// .catch((error)=>{
//     console.log(error);
// });



//Q8.Create examples to explain async await function
// const functionOne =()=>{
//     return ("I am function One");
// }

// const functionTwo = () =>{
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("I am function Two");
//         },3000);
//     })
// }

// const functionThree = ()=>{
//     return ("I am function Three");

// }

// const CallAllFunctions = async ()=>{
//     let responseOne = functionOne();
//     console.log(responseOne);

//     let responseTwo = await functionTwo();
//     console.log(responseTwo);

//     let responseThree = functionThree();
//     console.log(responseThree);
// }

// CallAllFunctions();



//Q9.Create examples to explain promises all function.

p1 = Promise.resolve(50);
    p2 = 200
    p3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'geek');
    });
 
    Promise.all([p1, p2, p3]).then(function(values) {
        console.log(values);
    });