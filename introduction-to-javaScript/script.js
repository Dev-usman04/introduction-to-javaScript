//  javaScript variables , Data types and Operators



// javaScript variables keywords: const and let 
let a = 10;

console.log(a);
a = 25;
console.log(a);

//  javaScript data types primitive AND Non-primitive Data types
let studentsName = [ 'usman', ' ridwan', 'Dolapo', 'Feranmi'];  // Non-primitive
let primitive = 10; 
let anotherPrimitive = primitive;

primitive = 30;
console.log(primitive, anotherPrimitive);


                // Non Primitive
                let newStudentsNames = studentsName;
                //studentsName = ['usman', 'soliu', 'feranmi'];
            // console.log({studentsName, newStudentsNames});
            newStudentsNames[0] = 'oladimeji';
            console.log({newStudentsNames, studentsName});

            // javaScript Operator
            // logical Operator

            const num1 = 10;
            const  name1 = 2;
           // const trueValue = num1 || name1? 'yes, it is truty' : ' no, it is  falsy'

          //  console.log(`${trueValue}`);
          //

          //Comparison Operator
          let num2 = 10;
          const num3 = 20;
          const result = num2 < num3 ? 'yes' : 'No';
          num2++;
          console.log(result);
          
          console.log(num2);       
             console.log(++num2);
             console.log(num2);

             // equality Operator
             console.log(5 === 5)
             console.log(false === 1)
             console.log()
             /*let vehicle1 = ['lexus','toyota','benz' ];
             let vehicle2 = ['lexus', 'toyota', 'benz'];
             console.log(vehicle1 === vehicle2); */


             let vehicle1 = ['lexus','toyota','benz' ];
             let vehicle2 = vehicle1; 
             console.log(vehicle1 == vehicle2);

             // loose
             console.log([] == 1);
             console.log([1] == 1)
             console.log(null == undefined);
             console.log(null == false);
             console.log('\t\n' == 0);















