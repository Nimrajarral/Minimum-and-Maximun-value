// TypeScript language 

function MinMax(array: number[]): [ number,number] {
    let miniValue: number = array[0];
    let maxiValue: number = array[0];

    for (let num of array) {
        if (num < miniValue) {
            miniValue= num;
        } else if (num > maxiValue) {
            maxiValue= num;
        }
    }

    return [miniValue, maxiValue];
}

const array: number[] = [30, 11, 8, 5, 1];
const [minimumValue, maximumValue] = MinMax(array);
console.log(" The required Minimum value is :", minimumValue);
console.log("The required Maximum value is :", maximumValue );

