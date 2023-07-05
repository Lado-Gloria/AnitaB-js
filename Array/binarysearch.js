// // given an array of numbers, search for the following target and return -1 of not found
// // esle the index

// function binary(arr,target){
//     let leftIndex =0;
//     let rightindex= arr.length-1;
//     console.log("left1",leftIndex)
//     console.log("right1",rightindex)

// while(leftIndex<=rightindex){
//     // console.log("left2",leftIndex)
//     // console.log("right2",rightindex)
//     let middle = Math.floor((leftIndex+rightindex)/2);
//     if(arr[middle] === target){
//         return middle;
//     }
//     else  if(arr[middle]>target){
//         rightindex = middle +1
        
//     }
//     else{
//         leftIndex = middle -1
//     }
// }
// return -1;
// }
// let num = [1,3,6,8,9,56,89];
// let target = 9;
// console.log(binary(num,target));



function mergesort(arry){
    if(arry.length<=1){
    return arry;
}
    let midd =Math.floor(arry.length/2);
    let left =arry.slice(0,midd);
    let right =arry.slice(midd);
    return mergest(mergesort(left),mergesort(right));
}
function mergest(left,right){
    let empty=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
        empty.push(left.shift());
    }
    else{
        empty.push(right.shift());
    }
}

    return [...empty,...left,...right];  

}
let numm =[4,6,8,9,3,5,1]
console.log(mergesort(numm))


function number(arr,target){
    let leftIndex=0;
    rightIndex =arr.length-1;
    while(leftIndex<=rightIndex){
        let middle =Math.floor((leftIndex+rightIndex)/2);
        if(arr[middle]===target){
            return middle;
        }
        else if(arr[middle]>target){
           rightIndex= middle+1
        }
        else{
            leftIndex=middle-1
        }
        return-1
    }
}
let num =[1,4,6,8,9,3,5]
let target=8
console.log(number(num,target))



function merg(arr1){
    if(arr1.length<=1){
        return arr1;
    }
    let mid =Math.floor()
}