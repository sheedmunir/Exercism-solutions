
/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {

  const ratePerDay = ratePerHour * 8;
  const numberOfDays = budget / ratePerDay;
  return Math.floor(numberOfDays);

  
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

  const ratePerDay = ratePerHour * 8;
  const nonDiscountedDays = numDays % 22;
  const discountedDays = numDays - nonDiscountedDays;
  const afterDiscountRate = 1 - discount;
  const totalDiscountedPayment = ratePerDay * discountedDays * afterDiscountRate;
  const totalNonDiscountedPayment = ratePerDay * nonDiscountedDays;
  const total = totalDiscountedPayment + totalNonDiscountedPayment;

  return Math.ceil(total);


  
}
