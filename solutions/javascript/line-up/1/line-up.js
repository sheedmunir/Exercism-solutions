//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name,number) => {

  var newNumber = number.toString();
  const length = newNumber.length;
  if (newNumber[length-1]==1 && newNumber[length-2]!=1){
    newNumber += "st";
    }
  else if(newNumber[length-1]==2 && newNumber[length-2]!=1){
    newNumber += "nd";
  }
  else if(newNumber[length-1]==3 && newNumber[length-2]!=1){
    newNumber += "rd";
  }
  else {
    newNumber += "th";
  }

  return name + ", you are the " + newNumber + " customer we serve today. Thank you!"
  

  

console.log('Debug message');
  
};