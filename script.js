let arr  =[1,2,3,4,5,6,1,2]
console.log(arr.includes(1))
console.log(arr.lastIndexOf(1))
console.log(arr.findIndex(function(el){
    return el > 2
}))
