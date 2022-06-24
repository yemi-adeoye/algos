const maxMin = (list) => {
    let min = 0;
    let max = 0;

    for (let i = 0; i < list.length; i++){
     
  
      if (i === 0){
        min = list[0];
        max = list[0];
        continue;
      }

       min = list[i] < min ? list[i] : min;
       max = list[i] > max ? list[i] : max;
    }
  
    return { min, max, maxProfit: max - min }
  }
  console.log(maxMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))