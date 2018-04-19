/**
 * Module dependencies
 */

var _ = require('lodash');

/**
 * Apply a `limit` modifier to `data` using `limit`.
 *
 * @param  { Object[] }  data
 * @param  { Integer }    limit
 * @return { Object[] }
 */
module.exports = function (data, limit) {
  if ( limit === undefined || !data || limit === 0) return data;
  return _.take(data, limit);
};
