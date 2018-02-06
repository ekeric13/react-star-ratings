// polyfill for ie
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' && 
    isFinite(value) && 
    Math.floor(value) === value;
};


import StarRatings from './star-ratings';

export default StarRatings;