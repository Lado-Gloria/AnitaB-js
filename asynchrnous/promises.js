let success =true
let promise =new Promise((resolve,reject)=>{
    if(success){
    resolve("i succeeded")
    }
    else{
        reject("i am looking for a job")
    }
}).then(()=>{console.log("I will work hard")})
.catch(()=>{console.log("I will upskill")})
.finally(()=>{console.log("I am worthy")})
console.log({promise});