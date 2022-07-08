//Q.Unique Color Shirts
//Prepbuddy is very tasteful of clothes. He has

 //numbers of shirts hanging in the hanger in his wardrobe.
//Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, 
//he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M

 //unique color shirts are left in the wardrobe. 
//Prepbuddy wants you to find M.

function Unique_Shirts (arr,N) {

  
    let remains=0;
    for(let i=0;i<N;i++){
      let count=0;
      for(let j=0;j<N;j++){
        if(arr[i]==arr[j])
        {
          count++;
        }
      }
      if(count==1){
        remains++;
      }
    }
      return (remains);
  }
console.log(Unique_Shirts([3,2,4,1,2,3],6));  