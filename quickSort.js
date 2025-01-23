const quickSort =(arr)=>{
    if (arr.length<2) {
        return arr
    }
    let pivot = arr[0];
    let left = []
    let right = []
    for (let i = arr.length-1; i > 0; i--) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
        
    }return [...quickSort(left) , pivot ,...quickSort(right)]

}

console.log(quickSort([90,-34,-3,3,232,2232,23423,56,-12312]));
