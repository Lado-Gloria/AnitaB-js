function Person(name,age,height){
    this.name =name
    this.age=age
    this.height =height

}
let person =new Person("agnes",23,"4ft")
console.log({person})

let person2 =new Person("ann",20,"6ft")
console.log(Person.prototype)

Person.prototype.weight=50;
console.log({person})
person2.weight =60
console.log(person.weight)
console.log("wiight2".person2.weight)

console.log(person instanceof Person)

