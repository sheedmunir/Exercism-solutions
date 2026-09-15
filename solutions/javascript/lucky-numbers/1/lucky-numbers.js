/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let str1 = '';
  let str2 = '';
  array1.forEach((key) => {
    str1 += key;
  })
   array2.forEach((key) => {
    str2 += key;
  })

  return Number(str1) + Number(str2);

}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  const str = String(value);

  const array = str.split("");

  array.reverse();

  const str2 = array.join("");

  const testValue = Number(str2);

  if (value === testValue){
    return true;
  }else{
    return false;
  }
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {

  const num = Number(input);

  if(Boolean(input) == false){
   return 'Required field'
  }
  else if (Boolean(num) == false){
    return  'Must be a number besides 0';
  }
  else {
    return '';
  }
}
