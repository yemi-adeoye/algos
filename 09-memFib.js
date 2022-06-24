/**
 *
 * @param {integer} n the index of the fibonnacci number to be retuned
 * @returns {integer} returns the fibonacci number at index n
 */
const memFib = (n, cache) => {

  cache = cache || [];

  if (cache[n]) {

    return cache[n];

  } else {

    if (n < 3) {

      return 1;

    } else {

      cache[n] = memFib(n - 1, cache) + memFib(n - 2);

    }
  }

  return cache[n];
};

console.log(memFib(3));