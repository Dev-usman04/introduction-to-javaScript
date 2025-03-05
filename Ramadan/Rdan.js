// const me = 'idris'
// console.log(me);

// const increase = document.getElementById("butt1");
// const decrease = document. getElementById("butt3");
// const reset = document . getElementById("butt2");
// const countLebel = document. getElementById("myH1");
// let count = 0;
// increase. onclick = function(){
//   count++;
//   countLebel.textContent = count;
// } 
// decrease. onclick = function(){
//   count--;
//   countLebel.textContent = count;

// }
// reset.onclick = function(){
//   count = 0;
//   countLebel.textContent = count;

// }

// let x = -2.99;
// let y = 3;
// let z = 1;

// Math.floor(x)
// console.log(Math.trunc(x))
// console.log(Math.pow(x, y))
// console.log(Math.sqrt(y))
// console.log(Math.abs(x))
// console.log(Math.sign(x))
// const min = 20;
// const max = 40;
// const randomNumber = Math.floor(Math.random() * (max - min)) + 50

// console.log(randomNumber)



// const lebel1 = document.getElementById("label1");
// const lebel2 = document.getElementById("label2");
// const lebel3 = document.getElementById("label3");
// const buton = document.getElementById("butt");
// const min1 = 1;
// const max1 = 6;
// let randomNum = '';

// buton.onclick = function(){
 
//   randomNum = Math.floor(Math.random() * max1) + min1
//   randomNum2 = Math.floor(Math.random() * max1) + min1
//   randomNum3 = Math.floor(Math.random() * max1) + min1
//   lebel1.textContent = randomNum;
//   lebel2.textContent = randomNum2;
//   lebel3.textContent = randomNum3;

// }








// //  function  myFunction(){
    
   
// //    let number = Math.floor(Math.random()*20) +1;
  
// //    let morningPrayer = '';
// //    if(number => 0 && number <= 5){
   
// //     number = `You are bless ${number} times`

// //    }else if (number > 5){
// //     number =  `May your day be blessed + ${number} times`
// //    } 
// //    document.getElementById('myH').innerHTML = number
    
   
// // }
// // myFunction();





let greetings = document.getElementById("myH1");
const myButton = document.getElementById("submitButton");
const input = document.getElementById("textArea");
let also = document.getElementById("also");
myButton. onclick = function(){
 age = input.value;
 age = Number(age);
 if(age <= 15  && age >= 1){
greetings.textContent = 'May your Ramadan be filled with hope, kindness, and generosity. May you experience the true essence of this holy month. 🌙💕';
also.textContent = ` Ramadan Kareem! 💖🌙`;
 }
else if(age >= 16 && age <= 17){
  greetings.textContent = `🌙 Ramadan Mubarak! May this holy month bring you peace, prosperity, and endless blessings. 🤲✨`
  also.textContent = ` Ramadan Kareem! 💖🌙`;
}
else if(age > 17 && age < 19 ){
  greetings.textContent = `May your fasts be easy, your prayers be accepted, and your heart be filled with faith. Ramadan Kareem! 💖🌙`
  also.textContent = ` Ramadan Kareem! 💖🌙`;

}
else if(age >= 19 && age <= 21){
  greetings.textContent = `🕋 May the spirit of Ramadan illuminate your heart and home with love, kindness, and peace. 🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age >= 22 && age <= 24){
  greetings.textContent = `💫 Sending you warm wishes for a blessed Ramadan! May Allah’s mercy and grace be upon you. 🌙🤍`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 25){
  greetings.textContent = ` 🤲 May your prayers be powerful, your faith be strong, and your heart be content this Ramadan. Ramadan Mubarak! 🌟🕌`;
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 26){
  greetings.textContent = `🕋 🌟 May Allah accept your fasting, prayers, and good deeds, and may your Ramadan be truly special. Ramadan Mubarak! 🕋🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 27){
  greetings.textContent = `🕋 May the spirit of Ramadan illuminate your heart and home with love, kindness, and peace. 🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 28){
  greetings.textContent = `🕋 Ramadan Mubarak! May this month be a source of enlightenment and purification for you. 🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 29){
  greetings.textContent = `🕋  May your heart be filled with the light of Imaan and your soul with contentment.🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 30){
  greetings.textContent = `🕋May Allah grant you strength and patience to observe your fast with sincerity and devotion. 🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 31){
  greetings.textContent = `🕋  May Allah grant you and your loved ones a fulfilling, joyous, and spiritually uplifting Ramadan.🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 32){
  greetings.textContent = `🕋 May every moment of this Ramadan bring you closer to Allah’s mercy and blessings. 🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 33){
  greetings.textContent = `🕋  May the beauty of Ramadan inspire you to practice kindness, compassion, and generosity.🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age === 34){
  greetings.textContent = `May this holy month cleanse your heart and bring you eternal joy.🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age >= 35 && age <= 40){
  greetings.textContent = `🕋  May the power of Ramadan transform your heart and lead you toward righteousness. 🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age >= 45 && age <= 50){
  greetings.textContent = `🕋  May this Ramadan help you build a stronger bond with Allah and deepen your faith.🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age >= 51 && age <= 60){
  greetings.textContent = `🕋May the blessings of Ramadan fill your life with love, generosity, and kindness. 🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}
else if(age >= 61 ){
  greetings.textContent = `May Allah’s grace be with you in every aspect of your life during this holy month and beyond 🌟🤲`
  also.textContent = ` Ramadan Kareem! 💖🌙`;



}




}
console.log()




















