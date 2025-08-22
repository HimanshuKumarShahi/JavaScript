// const arr=[2,4,5,6];
// const name=["ram","sita","laxman","bharat"]
// console.log(arr[0]); 
// console.log(name[0],name[3]); 
const arr2=new Array(2,4,6,8,0)
// Array methods
// arr.push(234);
// arr.push(999);
// arr.pop();
// arr.unshift(9);
// arr.shift();
// console.log(arr2.includes(10)); 
// console.log(arr2.indexOf(2)); 


const newArr= arr2.join();
console.log(newArr);
console.log(typeof(newArr));

console.log("A",arr2)
const arr1=arr2.slice(1,3);
console.log("B",arr1)

const arr3=arr2.splice(1,3);
console.log("C",arr3)

console.log("c",arr2);