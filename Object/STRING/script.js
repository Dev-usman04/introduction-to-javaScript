




// const mixedString = 'welcome to my world of javaScript';

// const  myUpperCase = mixedString.toUpperCase()
// console.log(myUpperCase)


// // indextOf()
// // lastIndextOf()
// // includes()
// //startWIT()
// //ENDWITH()
// //slice()
// // splice()
// //reverse()
// //join()
// //trim()
// // trim()
// // trimStart()


// const myString = 'welcome to our world'
// const checkIndex = myString.indexOf('world')
// console.log(checkIndex);
// //             SLICE

// //slice() extracts a part of a string and returns the extracted part in a new string.
// // The method takes 2 parameters: start position, and end position ( start will be included but end not included).

// const players = 'messi, ronaldo, mbappe';
// const slicePlayers = players.slice(4,10)
// console.log(slicePlayers)


// //////***********************SUB-STRING */
// // substring() is similar to slice().

// // The difference is that start and end values less than 0 are treated as 0 in substring().

// // **************************REPEAT
// // The repeat() method returns a string with a number of copies of a string. The repeat() method returns a new string.
// // The repeat() method does not change the original string.

// const me = 'DevDre';
// const repeateMe = me.repeat(4)
// console.log(repeateMe)

// // ***************REPLACE
// // the replace() replaces specified value with another value in a string

// const carear = ' i am a Geographer, Geographer is what i am  meant to be';
// const changeCarear = carear.replace('Geographer', ' software-Developer')
// console.log(changeCarear);
// const insensitiveCase = carear.replace(/geographer/i, 'senior web-developer')
// console.log(insensitiveCase)
// // to replace that specific string value from anywhere in tyhe sentence
// const anyWhere = carear.replace(/Geographer/g, 'software-developer')
// console.log(anyWhere)
// //   *****************REPLACEALL()
// const all = carear.replaceAll(/Geographer/g, 'successful bettor')
// x = all
// console.log(x)

// // ********************SPLIT***********
// // converting a string into nan array
// // (',')
// // (' ')
// // ('|')
// // let text = 'hammed'
// // const myArr = text.split(',')
// // text = '';

// // for(let i = 0; i < myArr.length; i++){
// //      text += myArr[i] 
// // }
// // console.log(myArr)

// let text = "Hello";
// const myArr = text.split('');

// text = "";
// for (let i = 0; i < myArr.length; i++) {
//   text += myArr[i] + " "
// }
// console.log(text)



// /// let try -
// // ('-')





// **************************WELCOME TO STRING IN DETAILS
//1************* STRINGS LENGTH METHOD
let item = 'Dlt Africa'
const length = item.length;
console.log(length)
const index = item.charAt(2)
console.log(index)
const firstOccurence = item.indexOf('Africa')
console.log(firstOccurence)

const extractE1 = item.substring(1,5)
console.log(extractE1)
const extractE2 = item.slice(0,7)
console.log(extractE2)


const split = item.split(' ')
console.log(split)
const join = split.join(',')
console.log(join)
const upper = item.toUpperCase()
console.log(upper)
const lower = upper.toLowerCase()
console.log(lower)
const checkAvailability = item.includes('Africa')
console.log(checkAvailability)
const startWith = item.startsWith('Dlt')
console.log(startWith)
const endWith = item.endsWith('Nigeria')
console.log(endWith)

const email = '  yourName.gmail   '
console.log(email)
const trimMe = email.trim()
console.log(trimMe)
const repeat = email.repeat(5)
console.log(repeat)
const lastIndex = item.lastIndexOf('a')
console.log(lastIndex)
const concat = item.concat(trimMe)
console.log(concat)


//  ************VALUE AND REFERENCE IN JS
// Primitive [passed by Value]

let a = 6
let b = a
console.log(b)
console.log(a);
a = 10
console.log(b);
let firstName = 'feranmi'
let fullName = firstName
console.log(fullName);


//***********NON PRIMITIVES */
// ***************[passed by Value]
let example1 = {age: 12}
let example2 = example1;
example2.age = 20
console.log(example1)
console.log(example2)

///   SPREAD OPERATORS
// IT ALLOWS U TO COPY AN ARRAY OR AN OBJECT AND THIS IS CALLED SHALLOW CLONING /SHALLOW COPY
const arr = [1,2,10,5, 405]
const arrClone = [...arr]
console.log(arrClone)
arrClone.push(4)
console.log(arr)
// WE CAN USE SPREAD OPERSTOR TO MATCH 2 OR MORE ARRAYS TOGETHER
let arr1 = [1.2]
let arr2 = [3,4]
const merged = [...arr1, ...arr2]
console.log(merged)
let number1 = {name: 'idris'}
let number2 = { age: 25}
const mergeMe = {...number1, ...number2}
console.log(mergeMe)


function sum(a,b,c){
  return a + b + c;
}
const values = [12,12,12]
const result = sum(...values)
console.log(result);

//*************DESTRUCTURING */
let person = {name: 'alhaji agba', age: 102, status: 'Dead'}
const {name, age} = person;
console.log(age);

let fruits = ['Banana', 'Mangoe', 'Date', 'Egg plant']
const [first, second,third] = fruits;
console.log(first);


const paragraph = 'welcome to the wold of programming'
const checkLength = paragraph.length
console.log(checkLength);
const cutMe = paragraph.slice(4,25)
console.log(cutMe)
const subSngM = paragraph.substring(3,10)
console.log(subSngM)
const idris = paragraph.includes('idris')
console.log(idris);



const obj1 = {name1: 'techknowlogy',age: 40, maritalStatus: 'single' }
const {name1, maritalStatus} = obj1
console.log(maritalStatus)
const myArr = ['money', 'food', 'clothes', 'house']
const [firstt, secondd,thirdd, one] = myArr


console.log(one);