/**
 * 
 * @param {array} list a set of numbers to be sorted
 * @returns { array } array sorted in ascending order
 */
const bubbleSort = (list) => {

  for (let i = 0; i < list.length - 1; i++) {

    for (let j = 0; j < list.length - 1; j++) {

      if (list[j] > list[j + 1]) {

        let temp = list[j];

        list[j] = list[j + 1];

        list[j + 1] = temp;

      }
    }
  }

  return list;
};

console.log(bubbleSort([1, 19, 6, 7, 9, 0]));
