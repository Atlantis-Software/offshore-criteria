/**
 * Module dependencies
 */

var _ = require('lodash');

/**
 * Apply a `skip` modifier to `data` using `numToSkip`.
 *
 * @param  { Object[] }  data
 * @param  { Integer }   numToSkip
 * @return { Object[] }
 */
module.exports = function (data, numToSkip) {

  if (!numToSkip || !data) return data;

  // Ignore the first `numToSkip` tuples
  return _.drop(data, numToSkip);
};
