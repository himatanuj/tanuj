let values =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


 
let result = values.reduce(function(previous,current) {
   current = current + previous;
   return current;

},0)
 
  
    


console.log(result)