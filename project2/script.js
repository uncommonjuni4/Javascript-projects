// const form = document.querySelector('form');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const height = parseInt(document.querySelector('#Height').value);
//     const weight = parseInt(document.querySelector('#Weight').value);
//     const results = document.querySelector('#results');
//     if( height === '' || height <0  || isNaN(height)){
//       results.innerHTML = `Give correct value ${height}`
//     } else if( weight === '' || weight < 0  || isNaN(weight)){
//       results.innerHTML = `please give correct Height ${weight}`
//     }
//     else{
//      const abi = (weight / (height*height)/1000.).toFixed(2);
//      results.innerHTML = `<span>${abi}</span>`
//     }}
// )


const form = document.querySelector("form");
// console.log(form);

form.addEventListener("submit",function(e){
    e.preventDefault();

    const Height = parseInt(document.querySelector("#Height").value);
    const weight = parseInt(document.querySelector("#Weight").value);
    const results = document.querySelector("#results");

    if( Height === '' || Height < 0  || isNaN(Height)){
         results.innerHTML = `Please give valid Heiht ${Height}`
    }  else if(weight === '' || weight < 0  || isNaN(weight)){
           results.innerHTML = `please give validWeight ${weight}`
    }
    else{
        const BMI = (weight / ((Height*Height)/10000)).toFixed(2);
        results.innerHTML = `<span>${BMI}</span>`
    }   
})
