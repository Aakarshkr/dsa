// Only works on sorted arrays
const binarySearch = (arr, t) => {
    let lefti = 0;
    let righti = arr.length - 1;

    while (lefti <= righti) {
        let mid = Math.floor((lefti + righti) / 2);

        if (arr[mid] === t) {
            return mid; 
        } else if (arr[mid] < t) {
            lefti = mid + 1; // Search in the right half
        } else {
            righti = mid - 1; // Search in the left half
        }
    }

    return 'Not Found'; 
};

console.log(binarySearch([-5, 2, 4, 7, 10, 40], 10)); // Output: 4
