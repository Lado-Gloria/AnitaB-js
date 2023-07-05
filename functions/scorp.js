// Globle variable

let a = 20   // Global variable-accessed by everyone
function add(b){
    console.log(a+b);
    let c =30; //local variable accessible i the scope define
    console.log(a+b+c)

}
add(20);

function greet(){
    let hello ="hey"

    function talk(){
        let greeting ="hello there"
        console.log(`${hello} ${greeting}`)
    }
    talk()
}
greet()





