const cohorts = ['feranmi', 'lateefat','abazz', 'Dolapo', 'Damilare', 'Ridwan', 'kabir']
console.log(cohorts)
const nested = [[1,2], [3,4],[5,6]];
console.log(nested)

const newArr = nested [0][1]
console.log(newArr);
console.log(nested.length);
const replaceE1 = (cohorts[1] = 'idris')
console.log(replaceE1)
console.log(typeof replaceE1);



// To add a new element to last index of an array

cohorts[1] = 'Tinubu'
console.log(cohorts);

cohorts.forEach((te) => {
    console.log(te.toUpperCase())
}) 



const checkAddition = [2,4,3,4,5,6]
for(let i = 1; i < checkAddition.length; i++){
  console.log(checkAddition[i])
}



const students = ['Bukky', 'Jennifa', 'Joy','Esther','Familisu']
console.log(students)

               // ARRAY METHOD
        //PUSH it to the end of an array
 const pushed = students.push('friday', 'fashola')
 console.log(pushed)

   //*************POP METHOD */
   const num = [1,2,3,4,5,6,7,8,9]
   console.log(num)
   const popped = num.pop()
   console.log(popped)
   console.log(num)

     // *************SHIFT METHOD
     // to remove the first element from the array
     const learnShift = ['rice','beans', 'yam', 'fufu']
     console.log(learnShift)
     const checkShift = learnShift.shift();
     console.log(learnShift)
      
     // *********** UNSHIFT
     // opposite of shift method, add an element to the array
     
     const colors = ['blue', 'red', 'orange',]
     console.log(colors)
     const checkUnshift = colors.unshift('black')
     console.log(checkUnshift)
     console.log(colors)

            // *********SPLICE
    const foods = ['rice','beans', 'yam', 'fufu']
    console.log(foods)

    foods.splice(1, 2, 'indomie', 'yam')
    console.log(foods)

    const wears = ['gucci', 'Amani', 'Versace']
    console.log(wears)
    wears.splice(2)
    console.log(wears)


    //**********************SLICE */


    const myNumber = [1,2,3,4,5,6]
    console.log(myNumber)
    const checkSlice = myNumber.slice(2)
    console.log(checkSlice)

    const male = ['Ambode', 'idris','ibrahim','Samuel', 'Soliu']
    console.log(male)
     const checkMyName = 'idris'
     console.log(checkMyName.length)
     const SlicedIdris = checkMyName.slice(2,4)
     console.log(SlicedIdris)
     const slicedMale = male.slice(1,3)
     console.log(slicedMale)

     // ************ counting from element (-1)
     const subtraction = male.slice(-1)
     console.log(subtraction)


     // ****************** include
     const ifInclude = male.includes('legacy')
     console.log(ifInclude)

     const idrisInclude = male.includes('idris')
     console.log(idrisInclude)


     // ***********SORTS

      const sortedd = male.sort()
     console.log(sortedd)
     

     // ****************INDEX
     const num1 = [1,2,3,4,5,6,7,8,9,10,11,1]
     const index1 = num1.indexOf(4)
     console.log(index1)

     //********************LASTINDEXOF */

     const lastIndextOf = num1.lastIndexOf(1)
     console.log(lastIndextOf)


     // *****************FOREACH

    //   const ooooh = name.forEach(function(){

    //  })

     const name = ['memunat', 'ainsha','fathia']
     const sisters = name.forEach((value,i,arr) => {
        console.log(value)
        console.log(i)
        console.log(arr)
     })

let totalVal = 0
const trns = [45,42,26,13,16]
trns.forEach((me) => {
    console.log(totalVal, me, (totalVal += me))


   console.log(totalVal)
}) 




 const myArr = [4,2,1]
 let checkMe = 0;
 for(let c = 0; c < myArr.length; c++){
    checkMe += myArr[c];
 }
 console.log(checkMe)

const arr = [23, 34, 77, 99, 324];
 let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);


name.forEach((me) => console.log(`congratulation
     ${me}  you will be representing DLTAfrica in UK next month`))


// *************************MAP ********************************
// it create a new array and apply function to each element without modifying the original array.


const inventory = [
    {name: 'rice', price: 6000},
    {name: 'beans', price: 300},
    {name: 'yam', price: 5000},
    {name: 'semo', price: 4000}
]

const prices = inventory.map((me) => {
    return me.price
})
console.log(prices)

const commodities = inventory.map((value) => {
    return value.name
})
console.log(commodities)




const num2 = [20,5,12,8,5]
let total = 0;
let checkNum = num2.forEach((me) => {
 return  console.log(total, me, (total += me));


})
console.log(checkNum)





const ar = [1, 2, 3, 4, 5, 6]
const multiplyVal = arr.map((el) => el * 2);
console.log(multiplyVal)


const words = ['hello', 'world', 'javascript'];
const changeMe = words.map((me) => {
  me.toUpperCase();
});

const pricesInUSD = [200, 120 ,360, 90]
const exchangeRate = 1490;
console.log(pricesInUSD.map((el) => el * exchangeRate));



const products = [
  {name: 'laptop', price: 300},
  {name: 'Desktop', price: 3000},
  {name: 'keybord', price: 900},
  {name: 'mouse', price: 24000}
];

const productWithId = products.map((product, index) => ({
id: index + 1,
...product,

}));
console.log(productWithId)

const newProduct = {name: 'glasses', price: 200}
const addMe = products.unshift(newProduct)
console.log(products)

const extractId = productWithId.map((product,id) => {
return product.id

})



const arrayNum = [1,2,3,4,5,6,7,8,9,10]
const extractNum = arrayNum.map((num) =>{
  if(num < 6 ){
    return num
  }
})
console.log(extractNum)



// ********************FILTER METHOD 

const evenNum = arrayNum.filter((me) => me % 2 === 0)
console.log(evenNum)



const bellow = productWithId.filter((product) => 
  product.price <= 1000

)
console.log(bellow)


const shortName = productWithId.filter((me) =>
  me.name.length < 7

)
console.log(shortName)

let compleXData = ['mangoes', 3000, null, undefined, {}, false]
const filterString = compleXData.filter((el) => {
  return typeof el === 'string'
})
console.log(filterString)



let sumTotal = 0;
const sumItUp = productWithId.map((product) => {
  console.log(sumTotal += product.price) 
  
})

const myVarables = ['germany', 'italy', 'spain', 'argentinal', 'mexico','england']
const arrangeMe = myVarables.map((el) => {

  myVarables.sort()
})
console.log(myVarables)
myVarables.sort();
console.log(myVarables)


const sliceMyVarable = myVarables.slice(2,5)

console.log(sliceMyVarable)
const joinMe = myVarables.join('-')
console.log(joinMe)
console.log(joinMe.toUpperCase())

 myVarables[myVarables.length] = 'france', 'nigeria', 'south-africa'
 console.log(myVarables);


 const newElements = ['lebanos', 'nigeria', 'paragua', 'ethopia']
 const mergeMe = myVarables.concat(newElements)
 console.log(mergeMe)
  const copyMe = mergeMe.copyWithin(2,1)
 console.log(copyMe)





//  const myS = ['Bukky', 'memunat', 'Esther', 'Idris']
//  const firstLetter = studentsName.charAt(0);
//  const fistLetterUpperCase  =  firstLetter === firstLetter.toUpperCase();
// console.log(fistLetterUpperCase)




const userNames = [{name: 'soliu',age: 15}, {name: 'feranmi', age: 10}]
const addAge = userNames.map((name, index) => ({
  ...name,
  age: name.age + 5,
  height: name.age + 10,
  id: index + 1,

}))
console.log({addAge})






     //***********************REDUCE */
     // SYNTAX : Array.reduce ((Accummulator , currentValue, CurrentIndex, array), initialValue)
     //1. Sum of Array elements
     //2 Flatten an array
     //3. occurences of an element in an array 
    //4. Find the maximum value
    //5 grouping data by a property

    // EXAMPLE 1:   Sum of Array in element

const myNumbers = [2, 3, 4,]
const summ = myNumbers.reduce((accumulator, currValue) =>  (accumulator + currValue), 0)
const subtract = myNumbers.reduce((accumulator, currValue) =>  (accumulator - currValue), 0)
const mutiplication = myNumbers.reduce((accumulator, currValue) =>  (accumulator * currValue),2) 
const div = myNumbers.reduce((accumulator, currValue) =>  (accumulator / currValue), 2)




const nestedArray = [[1, 2], [3, 4], [4, 6]]

  // const flattenedArray = nestedArray.reduce((acc, curr) => (acc.concat(curr)), [])
  const flattenedArray = nestedArray.reduce((acc,curr)=> {
   if(!acc.includes(curr)){
   acc.push(curr)
    }
   return acc;
  }, [])

 console.log(flattenedArray)
console.log(nestedArray)
// console.log(checkThisMethod)

// to remove duplicate from the result, u can use reduce, filter and also for each method

const flatFilter = flattenedArray.filter((e, index, array) => array.indexOf(e) === index) 
console.log(flatFilter)


// EXAMPLE 3: Occurence of an element in an array

// const myFruit = ['grape', 'Banan', ' orannge', 'Aanana']
// const fruitsCount = myFruit.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || )
// })


// EXAMPLE 4: fine the maximum value
const maxExample = [10, 30, 3, 100, 4]
const max = maxExample.reduce((acc, curr) => curr > acc ?  curr : acc, maxExample[0]);
console.log(max)




 const seeNumber = [[2,1], [3,4], [3,120]]
const mergedNum = seeNumber.reduce((acc,cur) => (acc.concat(cur)), [])
console.log(mergedNum)
const flatMethod = seeNumber.flat(3)
console.log(flatMethod)

 





const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];










const array = [[2,3],[20,2],[20,5]]
// merge array 

const letMergArray = array.reduce((acc,curr) => (acc.concat(curr)), [])
console.log(array)
console.log(letMergArray)
const suum = letMergArray.reduce((acc, cur) => (acc + cur), 0)
console.log(suum)

const mode = letMergArray.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) +1
  return acc;
}, {})
console.log(mode)

const  greaterNum = letMergArray.reduce((acc, cur) => acc > cur ? acc : cur )

console.log(greaterNum)


const complexDatta = [
  {fruit: 'mangoe', hobby: 'gym', food: 'beans'},
  {fruit: 'orange', hobby: 'swimming', food: 'rice'},
  {fruit: 'mangoe', hobby: 'gym', food: 'beans'}
]
const  grouped = Object.values(
  complexDatta.reduce((acc, obj) => {
    acc[Object.category] = acc[Object.category] || [];
    acc[obj.category].push(obj)
    return acc;
  }, {})  
);
// const groups = {};

// for(let data in compleXData){
//   if(!groups[data.fruit]) {
// groups[data.fruit] = [];
// grouped.push(groups[data.fruit]);
//   }
//   groups[data.fruit].push(data)
// }
console.log(grouped)
console.log(complexDatta)


const numbers = [[4,2],[10,5], [7,4]]
// merge it together
const mergIt = numbers.reduce((acc, cur) => acc.concat(cur), [])

console.log(numbers)
console.log(mergIt)
// SUMITUP
const addUp = mergIt.reduce((acc,cur) => (acc + cur), 0)
console.log(addUp)
// HIGHEST NUMBER

const checkHighestNumber = mergIt.reduce((acc, cur) => acc > cur ? acc : cur);
console.log(checkHighestNumber)

const occurence = mergIt.reduce















