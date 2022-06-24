// returns the lomngest binary gap in the binary represenation of a positive integer

/**
 * 
 * @param {Integer} N The integer to be converyed to binary format
 * @returns { Integer } The longest binary gap in the binary representation of N
 */
const getBinaryGap = (N) => {

    const binaryOfN = N.toString(2)
    
    let binaryGap = 0; // stores the longest binary gap
    let tempBinaryGap = 0; // holds temporaray gap
    let isClosedGap = false;

    for (let i = 0; i < binaryOfN.length; i++){
       
        if (binaryOfN.charAt(i) == 1){

            if (i !== 0){
                isClosedGap = true;
            }
            
            if (tempBinaryGap > binaryGap && isClosedGap){
                binaryGap = tempBinaryGap;
            }

            // reset temp gap
            tempBinaryGap = 0;

        }else if(binaryOfN.charAt(i) == 0){

            tempBinaryGap++;

        }
    }

    return binaryGap;

}

console.log(getBinaryGap(20)) 