/**This function varify if number is prime
 * @constructor
 * @param {int} number : Is number integer
 * @returns{boolean} is true or false
 */

 var numberPrime = (number)=>{
   if(number<1){
        return false;
    }else{
        for(iterator = 2; iterator<number; iterator++){
            if((number % iterator)==0){
                return false;
            }
        }
        return true;
   }
 }

 module.exports.numberPrime = numberPrime;