// for loop
let num =[10,20,3,8,7,9,12];
for(let i =0; i < num.length;i++){
    console.log(i);

// let num2 =[10,20,3,8,7,9,12];
// for(let i =1; i <= num.length;i++){
//     console.log(i);
// }

console.log(num[i])
}
// for -loop2
for (let i =0; i<num.length; i++){
console.log({i});
if(i ===3){
    // break statement is use to stop the iteretion
    break;
}
}
for (let i =0; i<num.length; i++){
    
    if(i ===3){
    // skip the current condition and 
        continue
    }
    console.log({"continue":i});

}
