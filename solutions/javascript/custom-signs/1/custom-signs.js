
/**
 * Build a sign that includes both of the parameters.
 *
 * @param {string} occasion
 * @param {string} name
 *
 * @returns {string} template string combining both parameters
 */

export function buildSign(occasion, name) {
  const str =`Happy ${occasion} ${name}!`;
  return str;

}

/**
 * Build a birthday sign that conditionally formats the return string.
 *
 * @param {number} age
 *
 * @returns {string} template string based on age
 */

export function buildBirthdaySign(age) {

 const str = `Happy Birthday! What a ${age >=50 ? "mature" : "young" } fellow you are.`

  return str;
}

/**
 * Build a graduation sign that includes multiple lines.
 *
 * @param {string} name
 * @param {number} year
 *
 * @returns {string} multi-line template string
 */

export function graduationFor(name, year) {

 return  `Congratulations ${name}!
Class of ${year}`
  

}

/**
 * Determine cost based on each character of sign parameter that builds
 * the template string that includes the currency parameter.
 *
 * @param {string} sign
 * @param {string} currency
 *
 * @returns {string} cost to create the sign
 */

export function costOf(sign, currency) {

  const price = (sign.length *2 + 20);
  const fixed = price.toFixed(2);
  const str = `Your sign costs ${fixed} ${currency}.`
  
  return str;
}
