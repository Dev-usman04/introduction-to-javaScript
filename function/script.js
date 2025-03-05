// Function declaration


// function myName(){
//     return 'hello world'
// }


// // Function expression


// const myName1 = function(){
//     return 'hello world'
// }

// // Arrow function

// const myName2 =() => {
//     return 'hello world'

// }
console.log(add(2,10))

function add(a,b){
    return a + b;
}

function jamb(age){
    if(age > 25){
        return ' you  are too old to register'
    }else if(age < 25 && age > 18){
return 'you are qualified to register'
    }else{
     return   'too young to register'
    }
}
console.log(jamb(26))

console.log(checkTemperature('wednesday'))

function checkTemperature(day){
    if(day === 'monday'){
        return 'the temperature is moderate'
    }else if(day === 'tuesday'){
        return 'what a raining day'
    }else if(day === 'wednesday'){
        return 'what a sunny day'
    }else if(day === 'thursday'){
        return 'we enjoing a wonderful cool day'
    }else if(day === 'friday'){
        return 'what a torrential rainfall'
    }else if(day === 'saturday'){
        return ' i love the nice weather'
    }else{
        return 'not a sunny day'
    }
}

console.log(everyDay('wednessday'))
function everyDay (day){
    switch(day){
        case 'monday':
            return 'it is bright day'
            case 'tuesday':
                return 'we are enjoing a cool day'
            case 'wednessday':
                return 'what a sunny day'
             case 'thursday' : 
             return 'very cool'
             case ' friday':
                return 'nice day'
              case 'saturday':
                return 'rainning day'  
                default:
                    return 'eeeehn'
    }
    
}



const checknUmber = (num) => {
    if(num > 0 ){
        return 'possitive'
    }else if(num < 0){
        return 'negative'
    }else{
        return 'Zero'
    }
}
console.log(checknUmber(0))
console.log(checknUmber(4))
console.log(checknUmber(-4))

const isEven = (num) => num %2 === 0 ? 'even' : 'odd'
console.log(isEven(3))

const login = (userName, password, isAdmin) => {
    if(!userName || !password ) return 'please fill the required fields';
    if(isAdmin) return 'admin log in successfully';
    return userName === 'user' && password === 'pas789' ? 'user login successfull' : 'invalid credentials';
}
console.log(login('user', 'pas789', false))


const register = (yourName, passWd, email) => {
    if(!yourName || !passWd || !email)  return 'please fill the empty spaces';
    if(email) return 'your email is accepted'
    return yourName === 'name' &&  passWd === 'Negative123'? 'registration successfull' : 'this user have registered before';
}
console.log(register('name','Negative123',  ''));


const registration = (userName, password, country, state, email) => {
if (!userName || !password) return 'please fill the required fields'
if(password.lenght < 6) return 'minimum of 6 characters';
return userName === 'anate' && password === 'pas123' ? 'user already exist' : `${userName} 'successfully registered'`
}
console.log(registration('anate', 'pas123', 'Nigeria', 'kogi', 'email'  ))

// scope
//globa && local scope

// 1. GLOBAL SCOPE
let globalVar = 'global village'
function showVar(){
    console.log(globalVar)
}


showVar();
// LOCAL SCOPE

function showMe(){
    let scopeVar = 'local village'
    console.log(scopeVar)
    
}
showMe()

// lexical scope
function outer(){
   let outerVer = 'i am outside';
   function inner(){
    console.log(outerVer)
   }
   inner()
}
outer();




function employer(name){
    function employee(){
       return  console.log(` good morning mr ${name} `)
    }
    employee()
}
employer('idris')

const myFunction = (name) => {
    const babyFunction = () => {
        return console.log(`good morning mr ${name}`)
    }
    babyFunction();
}
  myFunction('idris');

  const prac = (greet) => {
const sonPrac = () => {
return console.log(` ${greet} to the holly month of Ramdan`)
}
sonPrac();
  }
  prac('welcome'); 


  const food = ['indomi', 'rice','fufu', 'beans']
  for(let i = 0; i < food.length; i++){
    console.log(food[i])
  }
  const hobbies = ['gym','swimming', 'watching football', 'writing code']
  for(let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i])
  }
 const numbers = [2,3,4,3,6,1]
 for(i = 0; i < numbers.length; i++){
    let element = numbers[i]
    numbers[i] = element * 2;
    console.log(numbers[i])
 } 
 let user1 = {
    name: 'usman',
    age: 30,
    city: 'lagos'
}
for(key in user1){
    console.log(key +  ':' ,user1 [key])
}
  

  

 







// const forIn = {
//     name: 'DevDre',
//     age: 25,
//     email: 'bighalo77@gmail.com',
//     gender: 'male',
//     tribe: 'fufulde'
// }

// for(key in forIn){
//     console.log(key + ':', forIn[key])
//}

 const arr = ['usman idris', 'lagos', 'nigeria', 'rice and beans']
 for(key in arr){
    console.log(key  +':', arr[i])
 } 



 // for loop
 // for in loop
 //for of loop
 //for each loop



              //for of loop
 const myArr = ['mum', 'dad', 'siblins']
 for(idris of myArr){
    console.log(idris)
 }

               // for in
     const forIn = {
        name: 'ifris',
        state: 'lagos',
        preferState: 'Abuja'
     }          
     for(key in forIn){
        console.log(key + ':', forIn[key])
     } 

     
      

    const myObj = {
        name: 'legacy',
        password: 12345678,
        age: 23,
        state: 'lagos',
        sex: 'male'
     }


     for(key in myObj){
        console.log(key + ':', myObj[key]) 


        
     }

     const countries = ''
     switch (countries){
        case 'cameroon':
            console.log('i av not really been to cameroon')
            break;
            case 'japan':
                console.log(' i love japa')
                break;
                case 'nigeria':
                    console.log('nigeria is not a country')
                    break;
                    default:
                        console.log('why dont u think of relocatuing to USA')

     }
     
const favoriteMeal = ['rice', 'beans', 'noodles', 2]
for(let i = 0; i < favoriteMeal.length; i++){
element = favoriteMeal[i]
favoriteMeal[i] = element + element
    console.log(favoriteMeal[i])
}
const myDetails = {
    name: 'idris',
    state: 'lagos',
    gender: 'female'

}
for(key in myDetails){
    console.log(key + ':', myDetails[key])

}
 let numB = 3
for(let i = 0; i <= 12; i++){
    console.log(`${numB} * ${i} = ${numB * [i]} `)
    

}
 
    let fruits = ["mango", "orange", "banana"]
 let w = 0;
 while(w < fruits.length){
    console.log(fruits[w]);
   w++;
 }


  

let fruitss = ["Apples", "Mangoes", "Oranges", "Watermelon"];
let z = 0;
while (z < fruitss.length){
  console.log(fruitss[z]);
  z++;
}


 



















