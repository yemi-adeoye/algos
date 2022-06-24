const merge = (listA, listB) => {

    let merged = [];

    while(listA.length && listB.length){

        let temp;

        if (listA[0] < listB[0]){

            temp = listA.shift();

        }else{

            temp = listB.shift();
        }

        merged.push(temp)
    }
    
    merged = listA.length ? merged.concat(listA): merged;
    merged = listB.length ? merged.concat(listB): merged;

    return merged;
}

const mergeSort = (list) => {

    if (list.length == 1 ) return list;

    const mid = Math.floor(list.length / 2);

    const listA = list.slice(0, mid);

    const listB = list.slice(mid);

    return merge(mergeSort(listA), mergeSort(listB))
   
}

console.log(mergeSort([0, 19, 6, 9, 7, 1]))
