
// // Biggie Size - Given an array, write a function that changes 
// all positive numbers in the array to "big".  
// Example: makeItBig([-1,3,5,-5]) returns that same array, 
// changed to [-1, "big", "big", -5].
function biggie(arr)
{
    for (var i = 0; i<arr.length;i++) {
        if(arr[i]>0){
            arr[i]='big';
        }
        return arr;
    }
    console.log(biggie);
}
//  2.Print Low, Return High - Create a function that takes array of numbers.  
//  The function should print the lowest value in the array,
//   and return the highest value in the array.

function printlowReturnHigh(arr) {
    var max =[0];
    var min = [0];
    for(var i = 0;i<arr.length;i++){
        if(arr[i]>max);{
        max= arr[i];
        }
        
    }
    return max;
    for (var i =0; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
          
        }
      
    }
    console.log(min);
}

// 3.Print One, Return Another - Build a function that takes array of numbers.  
// The function should print second-to-last value in the array, 
// and return first odd value in the array.

function printOneReturnAnother(arr){
      console.log((arr[arr.length-2]));

    for(var i =0;i<arr.length;i++){
    if(arr[i]%2 ===1){
        return arr[i];

    }
}
}

var output = printOneReturnAnother([-5,2,12,3,25,30,25]);
console.log(output);

// 4.Double Vision - Given array, create a function to return 
// a new array where each value in the original has been doubled. 
//  Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleNum(arr){
    var newarr=   [i];
    for(var i =0; i<arr.length; i++){
        newarr[i]= arr[i]*2;
    }
     return newarr;
}
console.log(doubleNum([10,20,50]));

// Count Positives - Given array of numbers, create function 
// to replace last value with number of positive values. 
//  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr){
    var count = [i];
     for( var i =0;i<arr.length;i++){
     if(arr[i] > 0){
     count++;
      
     }
    
     }
      arr[arr.length-1]=count;
      return arr;
      
    }
     
     console.log(countPositives([-2,-3,1,3,5,6,8]));
     // Evens and Odds - Create a function that accepts an array.  
// Every time that array has three odd values in a row, print "That's odd!".  
// Every time the array has three evens in a row, print "Even more so!"

 function evenOdd(arr){
    var count =0 ;
     var even = [];
    for(var i =0; i<arr.length;i++){
      console.log("In for loop, i: ", i)
      if(arr[i]%2 ===0){
        console.log("if(arr[i]%2 ===0) TRUE arr[i] = ", arr[i])
        count++; 
        
         even.push(arr[i]);
         if(count==2){
           console.log(count);
         }
      } else {
               console.log("if(arr[i]%2 ===0) FALSE")
 
      }
     
    } 
     
     return even;
  }
   console.log(evenOdd([1,3,5,9,11,12,14,26,30]));
    
    //  Increment the Seconds - Given an array of numbers arr, add 1 to every second element, 
    //  specifically those whose index is odd (arr[1], [3], [5], etc).
    //  Afterward. console.log each array value and return arr.
     
    function incrementodd(arr){
        for (var i =0; i <arr.length;i++){
           if (i%2 ===1)
           arr[i]++;
        }
         return arr;
    }
   console.log(incrementodd([2,3,5,6]));
   =====================

//    Previous Lengths - You are passed an array containing strings. 
//     Working within that same array, replace each string with 
//     a number - the length of the string at previous array index - and return the array.  For example, 
//    previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
 function PreviousLength(["hello","dojo","awsome"]){

 }

    //=====================

//    Previous Lengths - You are passed an array containing strings. 
//     Working within that same array, replace each string with 
//     a number - the length of the string at previous array index - and return the array.  For example, 
//    previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
 
function previousLength(arr){
    var newarr =[ 0];
   for(var i =0;i<arr.length-1;i++){
     newarr[0+1]=arr[i].length;
     newarr[1]= arr[0].lenth
   }
   newarr[0]=arr[0];
   return newarr;
   
 }
 console.log(previousLength(['hello','Dojo', 'santyy']));


//  ---------------------------------------
// Add Seven to Most - Build function that accepts array.
//  Return a new array with all values except first,
//   adding 7 to each. Do not alter the original array.

function Addmost(arr){
    var newarr =[];
     for(var i =1;i<arr.length;i++){
       newarr.push(arr[i]+7);
     }
    return newarr;
  
}
console.log(Addmost([2,5,6,8]));
// ==========================

// //Reverse Array - Given an array, write a function that reverses values, in-place.
//   Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3]. 
//  Do this without creating an empty temporary array.  (Hint: you'll need to swap values)
function Reversearr(arr){
    for(var i =0; i <arr.length/2;i++){
      var temp = arr[i];
      arr[i]=arr[arr.length-1-i]
      arr[arr.length-1-i]=temp;
    }
    return arr
 }
 
 console.log(Reversearr([1,5,6,8,9]));
// [9,8,6,5,1]
// ======================================
// Outlook: Negative - Given an array,
//  create and return a new one containing all the values 
//  of the provided array, made negative 
// (not simply multiplied by -1). 
// Given [1,-3,5], return [-1,-3,-5].

function outlookNegative(arr){
    for (var i =0; i <arr.length; i++){
       if ( arr[i]>0){
         arr[i]= -arr[i];
       }
      
    }
    return arr;
 }
console.log(outlookNegative([2,-6,9,-10]));
// =================================
//   Always Hungry - 
//   Create a function that accepts an array,
//     and prints "yummy" each time one of the values is equal to "food". 
//     If no array elements are "food",
//    then print "I'm hungry" once.
function alwaysHungry(arr){
    for(var i = 0; i < arr.length; i++){
       if(arr[i] === "food"){
         console.log("yummy");
       }
       else if( arr[i]!= "food"){
        console.log("i am hungry");
    } 
 
     return arr;
  }
  }
 console.log(alwaysHungry(["food","food","cloths","phone","food"]));
//  =================================
//  Swap Toward the Center - Given array, 
//   swap first and last, third and third-to-last, etc.  
//   Input[true,42,"Ada",2,"pizza"] becomes 
//   ["pizza", 42, "Ada", 2, true]. 
// Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function SwapTowardtheCenter(arr){
   
    var temp = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    var temp1 = arr[2];
    arr[2] =arr[arr.length-3];
    arr[arr.length-3]=temp1;
    
  
   return arr;
}
console.log(SwapTowardtheCenter([10,3,56,86,4,2]))
// ===========================================

// Scale the Array - Given an array arr and a number num,
//   multiply all values in arr by num, and return the 
//   changed array arr.  For example, scaleArray([1,2,3],3) 
//   should return [3,6,9].
function scaleTheArray(arr,y){
    var changed = [];
    for(var i = 0; i<arr.length;i++){
      changed[i]  =arr[i]*y ;
    }
    return changed ;
  }
console.log(scaleTheArray([2,5,6,8,],3));
// ======================================