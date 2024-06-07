/**
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/
Array.prototype.isSubsetOf = function (arr){
  var x=true
  for(val of this){
    if(Array.isArray(val)){
      x=val.isSubsetOf(arr)

    }else if(!arr.includes(val)){
      x=false

l    }
  }return x
} 
//  function isSubsetOf(arr1,arr2){
//  let arr = []
//   for (var i = 0; i < arr1.length; i++) {
//     if (!arr.includes(arr1[i])) {
//       arr.push(arr1[i]);
//     }
//   }

  
//   for (var i = 0; i < arr.length; i++) {
//     if (!arr2.includes(arr[i])) {
//       return false;
//     }
//   }

//   return true;
// }
  

;

/** */


