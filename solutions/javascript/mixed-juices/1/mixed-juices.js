/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer' :
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;   
  }
  
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {

  let sum = 0;
  let limesCount =0;
  let start = 0;
  if (wedgesNeeded==0 || limes.length ==0){
    return 0;
  }
  else{
    while(sum <wedgesNeeded && start <limes.length){
      const item = limes[start];

      switch (item){
        case 'small':
          sum += 6;
          limesCount +=1;
          break;
        case 'large':
          sum += 10;
          limesCount +=1;
          break;
        case 'medium':
          sum += 8;
          limesCount +=1;
          break;   }

    start++;
    }
      
    return limesCount;
 }
  
}

 

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

  let timeUsed = 0;
  while(timeUsed<timeLeft ){
    const item = orders[0];

    timeUsed += timeToMixJuice(item);
    orders.shift();
  
  }
  

  return orders;
}
