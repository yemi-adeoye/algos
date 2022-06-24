const cyclicRotation = (arr, n) => {

    const rotatedArr = new Array(arr.length);

    let noOfRotations = n % arr.length;

    if (noOfRotations == 0){
        
        return arr;
    }

    for(let i = 0; i < arr.length; i++){

        if (i === 0){
            rotatedArr[i % noOfRotations] = arr[arr.length - 1]
        }

        rotatedArr[(i + noOfRotations) % arr.length] = arr[i];
    }

    return rotatedArr;

}

a = [1, 2, 3, 4, 5];

n = 2;

console.log(cyclicRotation(a, n));