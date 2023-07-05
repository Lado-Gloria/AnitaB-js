let student ={
    name: "steven",
    age:19,
    greet:function(){
        console.log("Hello")
        console.log(`Hello my name is ${student.name}and am ${student.age}year old`)
        console.log(`Hello my name is ${this.name}and am ${this.age}year old`)
    }
}
student.greet();
student.talk =()=>{
    console.log("Hello there")
}
student.talk();
