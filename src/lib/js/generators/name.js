import alignments from '../stores/random/alignments';
import animals from '../stores/random/animals';
import genders from '../stores/random/genders';
import gods from '../stores/random/gods';
import locations from '../stores/random/locations';
import materials from '../stores/random/materials';
import moods from '../stores/random/moods';
import { first, middle, last } from '../stores/random/names';
import objects from '../stores/random/objects';
import occupations from '../stores/random/occupations';
import races from '../stores/random/races';
import sizes from '../stores/random/sizes';
import speeds from '../stores/random/speeds';
import strengths from '../stores/random/strengths';
import titles from '../stores/random/titles';
import weapons from '../stores/random/occupations';

/**
 * Get a random value.
 *
 * @param {string} option - A specific value inside array.
 * @param {array} array - The array.
 * @returns {string}
 */
 export const generator = {
  randomValue(array, option = null) {
    let result = null;

    if (option) {
      result = Object.keys(array)[option];
    } else {
      const keys = Object.keys(array);
      result = array[keys[keys.length * Math.random() << 0]];
    }

    const index = Math.floor(Math.random() * result.length);
    return result[index] || '';
  },

  randomGender() {
    const array = genders.genders;
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  },
}

/**
 * Random string generators.
 */
// export const generator = {
//   randomAnimal() {
//     return getRandomValue(animals.animals);
//   },

//   randomGender() {
//     const array = genders.genders;
//     const index = Math.floor(Math.random() * array.length);
//     return array[index];
//   },

//   randomGod() {
//     return getRandomValue(gods.gods);
//   },

//   randomLocation() {
//     return getRandomValue(locations.locations);
//   },

//   randomNameFirst(option = null) {
//     return getRandomValue(first, option);
//   },

//   randomNameMiddle(option = null) {
//     return getRandomValue(middle, option);
//   },

//   randomNameLast(option = null) {
//     return getRandomValue(last, option);
//   },

//   randomObject(option = null) {
//     return getRandomValue(objects.objects, option);
//   },

//   randomTitle(option = null) {
//     return getRandomValue(titles.titles, option);
//   }
// }
