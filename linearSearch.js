const linearSearch = (arr,t)=>{
for (let index = 0; index < arr.length; index++) {
if (arr[index]===t) {
return index    
}    
}return -2
}

console.log(linearSearch([-5,10,28,58,100], 0)); //=>output -> 4
