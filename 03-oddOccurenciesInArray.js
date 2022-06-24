const addOccurence = (arr) => {
    const dictionary = {};
    for (let i of arr){
        if(!dictionary[i]){
            dictionary[i] = 1;
        }else{
            dictionary[i]++
        }    
    }

    console.log(2 % 2)
    
    const keys = Object.keys(dictionary);

    const values = Object.values(dictionary);

    let index;

    for (i of values)
    {
        console.log(i, i % 2);
        if (i % 2 === 1){
            index = values.indexOf(i)
        }
    }
    return keys[index];

}

a = [2, 3, 4, 3, 4, 4, 2, 3, 3];

console.log(addOccurence(a))