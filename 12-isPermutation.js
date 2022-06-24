// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  A.sort();

  let ret = 0;

  for (i = 1; i <= A.length; i++) {
    if (A[i - 1] !== i) {
      return 0;
    } else {
      ret = 1;
    }
  }
  return ret;
}

console.log(solution([1, 2, 3, 4]));
