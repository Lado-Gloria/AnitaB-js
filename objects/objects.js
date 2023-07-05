let person={
    name:"Ann",
    age:20,
    friend:{
        name: "Amanda",
        age:25,

        myfriend:{
            name:"susan",
            age:21,
        }
    }

}
let person2=new Object();
person2.name="Ann";//adding properties
person2['age']=30;
console.log(person);
person.name =56;//updating properties
console.log({person})
console.log(person.name)//access a class

console.log(person.friend.myfriend.name)
console.log(person["friend"]["myfriend"]["name"])

// clone 
let person3 =Object.assign();
console.log({keys});
