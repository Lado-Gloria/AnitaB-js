let items = [2,5, "sweet",false,45];
// array methods adding array at the end =(.push)
// adding array at the beginning = (.unshift)
// remove item at the end = (.pop)
// remove item at the start =(.shift)

items.push(62);
console.log(items);
items.unshift(6.5);
console.log(items);
items.pop();
console.log(items);
items.shift();
console.log(items)

// arrange item in decending order

let num = [1,9,34,12,25,30];
let sorted = num.sort((a,b)=> a-b);
console.log(sorted);
let sortd = num.sort((a,b)=> -a-b);
console.log(sortd);
// given an array of x elements. return an array with each element in x multiplied by 2

// creat an array of x go through every elements in array x *2
const result = num.map(
    (items)=>{
    return items *2}
    
)
console.log(result)
// let newArray =[]
// const results2 = num.forEach((items,index)=>{ newArray.push(items*2)});
// console.log(newArray);
// console.log({results2})


let a = [1,2,3]
let b = [4,5,6]
let joined1 = a.concat(b);
console.log({joined1});
let c = [1, ...a];
console.log({c});
// array distructor turning array elements in a new value
let [z,x, ...e] = c;
console.log({z});
console.log({x});
console.log({e});