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






