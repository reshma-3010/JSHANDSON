//Q.Second Smallest
//You are given 3 distinct integers X,Y, and Z,and your task is to find and return the second smallest integer among the three provided integers.
const findSndSmallest = (x,y,z) => {
    if((x<y && x>z) || (x>y && x<z)){
      return (x);
    }
    else if((y<x && y>z) || (y>x && y<z)){
      return (y);
    }
    else{
      return (z);
    }
};
console.log((findSndSmallest(2,9,23)));
