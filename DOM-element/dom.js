// // SELECTORS IN DOM ELEMENT
// // ACCESSING element

// // CLASS
// const body = document.getElementsByClassName("body");
// console.log(body)


// //  ID
// const header = document.getElementById("header")
// console.log(header)


// //TAG NAME

// const hOne = document.getElementsByTagName("h1")
// console.log(hOne)




// //    QuerySelector


// const classElement = document.querySelector(".body")
// console.log(classElement)

 


// //   QuerySelector
// const all = document.querySelectorAll(".body")
// console.log(all)




// DOM manipulation

// textContent


const header = document.getElementById("header")
header.textContent = 'hello Univers'



const p = document.querySelector ("p")
console.log(p)
p.textContent = 'welcome to javaScript';




// INNERHTML
const container = document.querySelector("div")
container.innerHTML = `<h1>i do read</h1>
 <p> and we play football <p>`


 //     styling

 container.style.color = 'orange'



  //adding and removing class name

  const myH7 = document.querySelector('myH6')
 

//   p.classList.remove('body')
  console.log(p)



  // ADDING EVENT LISTENER

document.querySelector('button').addEventListener('click', function(){

    document.getElementById('message').textContent = 'you just clicked me';
})

//mouse event
document.getElementById("box").addEventListener("mouseover", function(){
    document.getElementById("box").style.backgroundColor = 'yellow'

})
document.getElementById("box").addEventListener("mouseout", function(){
  document.getElementById("box").style.backgroundColor = 'black'

})

document.getElementById('textinput').addEventListener('keyup', function(event){
  document.getElementById('output').textContent = 'you pressed:' + event.key 
})

function greet(name){
  alert("hello, " + name + "!")
  

}

document.getElementById("greetBtn").addEventListener("click",() => greet("idris"))



function comming(name){
  prompt("you can comming " + name + "👍")
}
document.getElementById("comming").addEventListener("click", () => comming("mr idris"))



const newBox =document.createElement("div")
newBox.textContent ="how are you doing today"
document.body.appendChild(newBox)



const jav = document.createElement("h1")
jav.textContent = 'the javascript in me is going crazy'
document.body.appendChild(jav)


const  box = document.getElementById("box")

const newH1 = document.createElement("h1")
newH1.textContent = 'bro'
newH1.style.color = 'white'
box.appendChild(newH1)



