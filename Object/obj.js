// Object: key, values and methods


// Objects: HTMLBodyElement, values and methods
// examples 1 - for demonstrating the structure of an object
const carA = {
    model: 2013,
    colour: "Black",
    brand: "Toyota",
    price: 2000,
    horsePower: 900
  }
  
//   console.log(${carA.model}\n${carA.brand}\n${carA.price}\n${carA["horsePower"]})
  // or you console it separately
  
  // Nested Objects
  // example 2
  const cars = {
    firstCars: carA,
    secondCars: {
      model: 2015,
      colour: "Black",
      brand: "Toyota",
      price: 3750,
      horsePower: 1205
    },
  };
  
  const carAPrice = cars.firstCars.price
  
  // const carPrice = cars["firstCars"]["price"]
  
  console.log({ carAPrice })
  
  // examples with different value types
  let person = {
    firstName: "Alice",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "swimming"],
    address: {
      street: "123 Main St",
      city: "New York"
    }
  };
  
  console.log(person.firstName);
  console.log(person.hobbies[0]);
  console.log(person.address.city);
  
  const cohort6 = {
    male: {
      names: ["Abdullah", "Mueez", "Idrees", "Ridwan"]
    },
    female: { name: "Lateefah" }
  }
  const firstStudent = cohort6.male.names[0];
  console.log({ firstStudent });
  
  
  // another example
  const dltAfrica = [
    {
      cohorts: {
        cohort1: {
          names: ["Biodun", "Dolu", "Anike", "Shola"],
          hobbies: { 
            Biodun: "Football", 
            Dolu: "Eating", 
            Anike: "Dancing", 
            Shola: "Racing" 
          },
        },
      },
    },
  
    {
    tutors: {
      names: ["Anate", "SoliuA", "SoliuM", "Abdullah"],
      hobbies: { 
        Anate: "Football", 
        SoliuA: "Eating", 
        SoliuM: "Dancing", 
        Abdullah: "Racing" 
      },
    },
  },
  ];
  const sholaBby = dltAfrica[0].cohorts.cohort1.hobbies.Shola;
  console.log({sholaBby});
  
  const callMe = {[dltAfrica[1].tutors.names[3]]: dltAfrica[0].cohorts.cohort1.names[1],}
  console.log(callMe)
  


  // OBJECT AND METHODS

//   const dynamicYear = 2013
//   const carB = {
//     name: 'bid daddy',
//     brand: 'toyota',
//     [dynamicKey]: 2020 
//   }



  const classWork = {
    name: 'idris',
    age: 25,
    favNum: [1,2,3,4,5,6,7,8,9,10],
    favSum: function(){
        const sum = this.favNum.reduce((accumulator, currValue) =>  (accumulator + currValue), 0)

        return sum
    }
  }
  console.log({sum: classWork.favSum()}) 











const myProfile = {
  name: 'Aloma',
  age: 15,
  favFood: ['rice', 'beans'],
  favNumn: [4,7,2,4,9,6,65,5],
  favSumm: function(){
const addUp = this.favNumn.reduce((acc, cur) => (acc + cur), 0)
   return addUp
   
  }

}
console.log({name: myProfile.name.toLocaleUpperCase()})
console.log({addUp: myProfile.favSumm()});
// console.log({name: myProfile.name.charAt[0].toLocaleUpperCase})



const player = {
  firstName: "mbappe",
  lastName: "messi",
   age: 40,
  teams: {
    clubName: 'liverpool',
    manager: 'anne slot',
    location: 'england'
  },
  jerseyNum: 7
}
player.teams.loacation = 'paris';
console.log({player});


////// BUILT IN METHOD 

const myObject = {
myMethod: () => {},  //   ARROW FUNCTION
myMethod2: function(){},  //  FUNCTION DECLARATION
myMethod3  (){}     // function EXPRESSION
}


const dog = {
  name: 'jack',
  bark: () => {
    console.log('woof woof')
  }
}
console.log(dog.name)
dog.bark();




////////*************** OBJECT METHOD */
// 1 object.keys()
// 2 object.value()
// 2 object.entries()
// 4 object.freeze()
// 5 object.seal()

const employees = {
  boss: 'soliu',
  secretary: 'abazz',
  sales: 'books',
  accountant: 'dev'
}
const employeesInfo = Object.keys(employees)
employeesInfoValue = Object.values(employees)
employeesInfoEntries = Object.entries(employees)

console.log(employeesInfo);
console.log(employeesInfoValue);
console.log(employeesInfoEntries);


console.log()
/// *****************object entries
//    it create a nested array of the key and value pairs,

const session = {
  id: 1,
  date: '10-march-2025',
  device: 'mobile',
  browser: 'opera-mini',
}
const checkEntries = Object.entries(employees)
console.log(checkEntries)


const operatingSystem = {
  name: 'linox',
  fashion: 'obuntu',
  license: 'open-source'
}
const checkZeal = Object.seal(operatingSystem)



//****************FREEZE */
/// it prevent modification of existing property and prevent from being added or removed
const user ={
  userName: 'hammed',
  password: 12345,
}
const userInfo = Object.freeze(user)
console.log(userInfo)
user.userName = 'usman'
console.log(user)

///     ***********************SEAL
// it prevent new property from being  added and remove


const operatingSystem1 = {
  name: 'linox',
  fashion: 'obuntu',
  license: 'open-source'
};
const checkseal = Object.seal(operatingSystem1)
 operatingSystem1.age = 30;
console.log(operatingSystem1)


















