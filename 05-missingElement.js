const findMissing = (N) => {

    let sumMissingArray = 0;

    for (item of N){
        sumMissingArray += item;
    }
    
    
    const sum = (n) => {
        let total = 0;
        for (let i = 1; 1 <= n; i++){
            total += i;
        }
        return total;
    }

    const sumOriginal = sum(N.length + 1);

    return sumOriginal - sumMissingArray;
}

a = [2, 3, 1, 5];

console.log(findMissing(a));