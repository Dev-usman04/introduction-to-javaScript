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

cohorts.forEach((me) => {
    console.log(me.toUpperCase())
})

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
     const learnShift = ['rice','beans', 'yam', 'fufu']
     console.log(learnShift)
     const checkShift = learnShift.shift();
     console.log(learnShift)
      
     // *********** UNSHIFT
     
     const colors = ['blue', 'red', 'orange',]
     console.log(colors)
     const checkUnshift = colors.unshift('black')
     console.log(checkUnshift)
     console.log(colors)

            // *********SPLICE
    const foods = ['rice','beans', 'yam', 'fufu']
    console.log(foods)

    foods.splice(1, 0, 'indomie', 'yam')
    console.log(foods)

    const wears = ['gucci', 'Amani', 'Versace']
    console.log(wears)
    wears.splice(2)
    console.log(wears)


    //**********************SLICE */


    const myNumber = [1,2,3,4,5,6]
    console.log(myNumber)
    const checkSlice = myNumber.slice(3)
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
     const num1 = [1,2,3,4,5,6,7,8,9,10,11,2]
     const index1 = num1.indexOf(14)
     console.log(index1)

     //********************LASTINDEXOF */

     const lastIndextOf = num1.lastIndexOf(2,num1.length)
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
trns.forEach((trn) => {
    console.log(totalVal, (totalVal += trn), trn)


   console.log(totalVal)
})

name.forEach((name) => console.log(`congratulation
     ${name}  you will be representing DLTAfrica in UK next month`))

// *************************MAP


const inventory = [
    {name: 'rice', price: 6000},
    {name: 'beans', price: 300},
    {name: 'yam', price: 5000},
    {name: 'semo', price: 4000}
]

const prices = inventory.map((value) => {
    return value.price
})
console.log(prices)

const commodities = inventory.map((value) => {
    return value.name
})
console.log(commodities)
     


