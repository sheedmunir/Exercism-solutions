/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {

  const number = Math.floor(1000 + Math.random() *(10000 - 1000) );
  return "NCC-"+number;

}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const number = Math.floor(41000 + Math.random() *(42000 - 41000) );
  return number;

  
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {

  const arr =['D','H','J','K','L','M','N','R','T','Y'];
  const randomnumber = Math.floor(Math.random() * (10) )
  return arr[randomnumber];
  
  

}
