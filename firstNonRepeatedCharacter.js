/**
 *  Given an arbitrary input string, return the first nonrepeated character in
 *  the string. For example:
 *  firstNonRepeatedCharacter('ABA'); // => 'B'
 *  firstNonRepeatedCharacter('AACBDB'); // => 'C'
 *  Should return null or empty string of there is no repeated characters
 * 
 * @function firstNonRepeatedCharacter
 * @param {String} string 
 * @returns {String}
 */

const firstNonRepeatedCharacter = function (string) {
    // TODO: your solution here

   var str=string[string.length-1]
   for(var i=0;i<string.length;i++){
    if(string[0]!==str){
      return str
  
    }else{return ''}
   } 
  }