/**
 * 
 * @param {integer} n the index of the fibonnacci number to be retuned
 * @returns {integer} returns the fibonacci number at index n
 */
const fibonacci = (n) => {
    if (n < 3){
        return 1;
    }
    return fibonacci(n - 1 ) + fibonacci(n - 2)
}

console.log(fibonacci(5));