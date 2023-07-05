class Person{
    constructor(name,age,hieght){
        this.name =name
        this.age =age
        this.hieght =hieght
    }
    greet(){
        console.log("Henry",26,"5ft")
    }
}
let person=new Person("Henry",26,"5ft")
console.log({person})


class Robot extends Person{
    constructor(name,age,hieght){
        super(name,age,hieght)

}
}
let robot = new Robot("Elsa", 3, "4ft")
console.log({robot})


class CrazyRobot extends Person{
    constructor(name,age,hieght,dominate){
        super(name,age,hieght)
        this.walk = true
        this.height =hieght
        this.dominate =dominate


}
world(){
    console.log(`i will ${this.dominate} the world`)
}
}
let crazy = new CrazyRobot("felix", 3,"7ft")
crazy.world()

class LovingRobot extends CrazyRobot{
    constructor(name,age,hieght,dominate){
        super(name,age,hieght,dominate)
    }
}
let loving = new CrazyRobot("felix", 3,"7ft","love")
console.log({loving})