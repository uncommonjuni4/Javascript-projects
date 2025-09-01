let inputslider =document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let lowercase = document.getElementById("lowercase");
let PasswordBox= document.getElementById("PasswordBox");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let Generate = document.getElementById("Generate");



slidervalue.textContent =inputslider.value;

//showing starting input value
inputslider.addEventListener('input',() =>{
    slidervalue.textContent =inputslider.value;
})

Generate.addEventListener('click',()=>{
    PasswordBox.value =GeneratePassword();
})
 
let allnumbers = "01234567890";
let allsymbol = "!@#$%^&*";
let lowercars ="abcdefghijklmnopqrstuvwxyz";
let uppercars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//function to generate password


function GeneratePassword(){
    let Pasword = "";
    let allchar = "";
     
     allchar+= numbers.checked ? allnumbers  : "";
     allchar+= symbols .checked ? allsymbol  : "";
     allchar+=  uppercase.checked ? uppercase  : "";
     allchar+= lowercase.checked ? lowercase : "";


if(allchar == "" || allchar.length ==0){
    return Pasword ;
}
Pasword =allchar.charAt(Math.floor(Math.random()* allchar.length));
return Pasword ;
}


