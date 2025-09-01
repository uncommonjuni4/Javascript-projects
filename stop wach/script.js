let displayTimer =document.getElementById('display-timer');
let stopBtn  = document.getElementById('btn1');
let startBtn  = document.getElementById('btn2');
let resetBtn  = document.getElementById('btn3');

let min = sec = msec = 0;
let timer_value = null;

stopBtn.addEventListener('click', function(){
    clearInterval(timer_value);
})

startBtn.addEventListener('click',function(){
    if(timer_value !== null){
        clearInterval(timer_value);
    }
    timer_value = setInterval(starttimer,10)
}

)

resetBtn.addEventListener('click',function(){
    clearInterval(timer_value);
    min =sec = mse =0;
    displayTimer.innerHTML = '00:00:00';
})


function  starttimer(){
    msec++;
    if( msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }
    let minString = min.toString().padStart(2, '0');
    let secString =sec.toString().padStart(2, '0');
    let msecString = msec.toString().padStart(2, '0');

    displayTimer.innerHTML = `${minString}:${secString}:${msecString}`;
}