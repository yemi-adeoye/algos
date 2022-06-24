const maxCounters = (N, A) => {

    const findMax = (counter) => {

        let max = 0;

        for (let i = 0; i < counter.length; i++){
     
  
            if (i === 0){
              min = counter[0];
              max = counter[0];
              continue;
            }
      
             max = counter[i] > max ? counter[i] : max;
          }

          return max;
    }

    counter = new Array(N).fill(0);

    for(let i = 0; i < A.length; i++){

        const counterIndex = A[i];

        if(counterIndex >= 1 && counterIndex <= 5){

            counter[counterIndex % N - 1]++;

        }else if (counterIndex == N + 1){

            // find max
            let maxOfCounter = findMax(counter);

            counter = new Array(N).fill(maxOfCounter);
        }

        console.log(i, counterIndex % N, counter)
    }

    return counter;  

}

A = [3, 4, 4, 6, 1, 4, 4];

console.log(maxCounters(5, A));