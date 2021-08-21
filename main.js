// no1
// const button = document.getElementById("button")
// const input = document.getElementById("input")
// const list = document.getElementById("shoppingList")

// myArray = []

// button.addEventListener("click", function (){

// if (myArray.indexOf(input.value) == -1){
//     myArray.push(input.value)
//     list.innerHTML += `<li> ${input.value}</li>`
// }


// })

// no2
// const num1 = document.getElementById("num1")
// const num2 = document.getElementById("num2")
// const result = document.getElementById("result")
// result.addEventListener("click", function() {
//     let sum = Number(num1.value) + Number(num2.value)
//     console.log(sum);

// })

// no3
// const btn3 = document.getElementById("btn3")
// btn3.addEventListener("click", function() {
//     btn3.style.backgroundColor = "red"
// })

// no4
// const btn4 = document.getElementById("btn4")
// const para4 = document.getElementById("para4")
// btn4.addEventListener("click", function () {
//     para4.innerHTML += `<p> ${Math.random()} </p>`
// })

// no5

// no6
const btn6 = document.getElementById("button6")
const num6 = document.getElementById("num6")
const para6 = document.getElementsByClassName("para6")
let array=[12, 13, 51]

btn6.addEventListener("click", function () {
    // if (array.indexOf(num6.value) == -1){
    array += num6.value
    console.log(array)
    // para6.innerHTML += `<li> ${num6.value}</li>`
    
})


// no7
// const para7 = document.getElementById("para7")
// const date = document.getElementById("date")
// para7.addEventListener("click", function (){
//     para7.innerHTML = new Date ()
// })

// no8
// const para8 = document.getElementById("para8")
// let date = new Date ()

// para8.addEventListener("click", function (){
//     para8.innerHTML = date.getHours()
// })

// no9 
// const age = document.getElementById("number9")
// const btn9 = document.getElementById("btn9")
// const para9 = document.getElementById("para9")
// let date = new Date ()
// btn9.addEventListener("click", function () {
//     para9.innerHTML = date.getFullYear()-age.value
// })

// no10
//  let array10 = [12, 13, 51, 31, 32, 50, 890, 101, 202]
//  const btn10 = document.getElementById("btn10")
//  const num10 = document.getElementById("num10")
//  const para10 = document.getElementById("para10")

//  btn10.addEventListener ("click", function (){
//     for (let i=0; i<array10.length; i++)
//     if (num10.value == array10[i]) {
//         console.log( "the number exist in array")
        
//     }
//     else {console.log( "the number does not exist in array")}

    
// })

// no11
// const input = document.getElementById("firstLast");
// const p1 = document.getElementById("firstName");
// const p2 = document.getElementById("lastName");
// const button = document.getElementById("btn11");

// button.addEventListener("click", function () {
//     var space = input.value.indexOf(" ");
//     p1.innerHTML = input.value.substring(0, space);
//     p2.innerHTML = input.value.substring(space + 1);
// });

// no12
// const btn12 = document.getElementById("btn12")
// const first = document.getElementById("12first")
// const second = document.getElementById("12second")
// btn12.addEventListener("click", function() {
//     if (first.value.length>second.value.length) {
//         console.log("the first is longer")
//     }
//     else {console.log("the second is longer")}
// })

// no13
// const firstName = document.getElementById("13first");
// const eMail = document.getElementById("13email");
// const age2 = document.getElementById("13age");
// const button = document.getElementById("btn13");
// var arr = [];

// button.addEventListener("click", function () {
//     var objct = {};

//     objct.name = firstName.value;
//     objct.email = eMail.value;
//     objct.age = age2.value;
//     arr.push(objct);
//     console.log(objct);
//     document.write(`first name:${objct.name} email:${objct.email} age:${objct.age}`);
// });
