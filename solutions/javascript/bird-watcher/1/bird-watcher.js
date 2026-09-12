/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let sum =0;
  for(let i = 0;i<birdsPerDay.length;i++){
    sum += birdsPerDay[i];
  }
  return sum;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let sum = 0;
  const start = (week * 7 ) - 7 ;
  const end = start + 6; 
  for(let i = start ;i<=end;i++){
    sum += birdsPerDay[i];
  }
  return sum;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {

  for(let i = 0;i < birdsPerDay.length;i++){
    if(i%2==0){
      birdsPerDay[i] += 1;
    }
    else{}
  }

  return birdsPerDay;
}
