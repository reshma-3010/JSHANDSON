//Q.Create a function.
//complete a function in the editor.In which you are given one object as a parameter,in that object,there is data member named name.
//your task is to create a method inside this object named setter,such that this method will print the value of the data member named as name.

function Check(obj1){
    obj1.setter=function(){
      console.log(this.name);
    }
 }
 
