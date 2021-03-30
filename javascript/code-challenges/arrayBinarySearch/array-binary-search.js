'use strict' ;

module.exports = function BinarySearch(sortedArr, searchKey) {
   
    let left = 0   ; 
    let right = sortedArr.length - 1 ; 
    let index ; 
    
   if (sortedArr.length === 0 ){
     return 'please insert valid array' ; 
   }
    while (left <= right){
       let midIndex = Math.ceil((left + right)/2)
      //  console.log(midIndex)
         if (sortedArr[midIndex] < searchKey){
            left = midIndex +1 ; 
         } else if (sortedArr[midIndex] > searchKey){
            right = midIndex - 1 ; 
         } else if (searchKey === sortedArr[midIndex]) {
          //  console.log("hiii")
             index = midIndex ; 
             return index ; 
         } 
    }
  return -1 ;   
    
}
