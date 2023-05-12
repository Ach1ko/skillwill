console.log("Hello Skillwill")

// let myName = "Achi"
// myName = "Adam"

// const myNumber = 10
// const myStrNumber = "10"
// const myBoolean = true

// console.log(myNumber === myStrNumber)

// const a = 3
// const b = 5

// if(a+b===8){
//     console.log(true)
// }else{
//     console.log(false)
// }

// function calculate(name){
//     return name
// }

// console.log(calculate("Giorgi"))

// function calculate(num1,num2){
//     if(typeof num1 === 'string'){
//         return false
//     }
//     if(typeof num2 === 'string'){
//         return false
//     }

//     return num1 + num2
// }

// console.log(calculate(110,90))

// const user = {
//     name: 'James',
//     lastName: 'Bond',
//     userName: '007',
//     move: function() {
//       console.log('James Bond in Action');
//     }
//   };
  
//   console.log(user.userName);

// let A = 30
// let B = A

// A=45

// console.log(A,B);

// const A = {
//     name: 'James',
//     lastName: 'Bond',
//     userName: '007',
// };

// console.log(A)

// let B = A
// B.name = 'Jon' 

// console.log(B)

// const bu = 'კუ'

// const numbers = ['კუ', bu, 3, 4, 5];

// console.log(
//     numbers[0],
//     numbers[1],
// );

// const arr = ['James', 'Giorgi', 'Giga']

// const A = {
//     name: 'James',
//     lastName: 'Bond',
//     userName: '007',
// };

// for(const f in A){
//     console.log(A[f])
// }

// for(let i=0; i < arr.length; i++){
//     console.log(arr[i] + ' ' + 'Run');
// }

// for(const name of arr){
//     console.log(name)
// }

// function randomNumber(){
//     return parseInt(Math.random() * 10) + 1
// }

// let result = randomNumber()


// while(result !==9){
//     result = randomNumber()
//     console.log(result)
// }

// const arr = ['James', 'Giorgi', 'Giga']

// const resMap = arr.map(function(element, index) {
//     return index + ' is equal to ' + element
// })

const array = [1,3,5,2,3,6,7,9]
const resFilter = array.filter (function(element){
    return element >= 5
})

const resFind = array.find(function(el){
    return el > 6
})
console.log(array)
console.log(resFind)



