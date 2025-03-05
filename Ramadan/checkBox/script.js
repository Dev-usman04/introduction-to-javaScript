

const checkBox = document.getElementById("myCheckBox");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("masterCard");
const payStack = document.getElementById("payStack");
const submitButton = document.getElementById("submitButton");
const paragraph1 = document.getElementById("paragraph1");
const paragraph2 = document.getElementById("paragraph2");

submitButton.onclick = function(){
    if(checkBox.checked){
        paragraph1.textContent = `you have subscribed`
    }
    else{
        paragraph1.textContent = ` you have NOT subscribe`
    }
    if(visa.checked){
        paragraph2.textContent = `you picked visa for your payment`

    }
    else if(mastercard.checked){
        paragraph2.textContent = `you picked mastercard for your payment`

    }
    else if( payStack.checked){
        paragraph2.textContent = ` you are paying with paystack`

    }
    else{
        paragraph2.textContent = `you must select card for ur payment` 
    }
    console.log(mastercard)
}



