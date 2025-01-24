const mergeSort = (arr)=>{
if (arr.length <2) {
    return arr
}const mid = Math.floor(arr.length/2)

const leftarr = arr.slice(0,mid);
const rightarr = arr.slice(mid)
return merge(mergeSort(leftarr),mergeSort(rightarr))
}


function merge(leftarr,rightarr){
    let sortedArr =[]
    while (leftarr && rightarr) {
        if (leftarr[0] <= rightarr[0]) {
            sortedArr.push(leftarr[0].shift)
        }else{
            sortedArr.push(rightarr[0].shift)
        }
    }return [sortedArr,...leftarr,...rightarr]
}
console.log(mergeSort([-2,30,3,-9,10,100,0]));
