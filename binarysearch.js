/** First and last occurence of a element in a sorted array.
 *
 * Input:
   [1, 2, 3, 5, 5, 5, 6, 7, 8]
   2
   Output:
   4 //Index with first occurrence
   5 //Index with last occurrence
 */
// f=0 l=8 => 0+8/2 = 4 arr[4] = 5
// f=0 l=3

const firstOccurence = (arr, value) => {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.ceil((low + high) / 2);

        if (arr[mid] === value) {
            result = mid;
            high = mid - 1;
        }
        else if (value < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return result;
}

const lastOccurence = (arr, value) => {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.ceil((low + high) / 2);

        if (arr[mid] === value) {
            result = mid;
            low = mid + 1;
        }
        else if (value < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return result;
}

console.log(firstOccurence([1, 2, 3, 5, 5, 5, 6, 7, 8], 5));
console.log(lastOccurence([1, 2, 3, 5, 5, 5, 6, 7, 8], 5));
