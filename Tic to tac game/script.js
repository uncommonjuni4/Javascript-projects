//////// access classes and id

let box= document.querySelectorAll(".boxes");
let reset_btn = document.querySelector(".reset");
let hide = document.querySelector(".hide");
let winermsg = document.querySelector(".winner");
let new_game = document.querySelector(".new_game");
let reset =document.querySelector(".reset");
let show = document.querySelector(".show")
  
  
 //// game first rule
let turn0 = true;



/////patter for win
let winPattern = [
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8]
];


//////game start constion
box.forEach((box  =>{
    box.addEventListener("click", ()=>{
        if(turn0){
           box.innerText= "0";
           turn0 = false;
        }else{
             box.innerText= "X";
           turn0 = true;
        }
        box.disabled = true;

        checkwinner();

    })
}))


//// condtion for check winner

const checkwinner =  ()=>{
    for(let patten of winPattern){
          let  pos1value = box[patten[0]].innerText;
          let  pos2value = box[patten[1]].innerText;
          let  pos3value = box[patten[2]].innerText;

          if(pos1value != ""  && pos2value != "" && pos3value != ""){
            if(pos1value === pos2value && pos2value === pos3value){
            
                showinner(pos1value);
            
            }
          }
    }
}


/// condtion for show winner on top
let showinner = (winer)=>{
     winermsg.innerText = `Winer is ${winer}`;
     show.classList.remove("hide");
    disabledbox();
}


/////that is some condtion agtere win game tht user not click more btn


let disabledbox = () => {
    box.forEach(b => b.disabled = true);
}
/// that some thing after restart game
let anabledbox = () => {
    box.forEach(b => b.disabled = false);
 
    show.classList.add("hide")
}
//// that function for new or reset button
const newame = ()=>{
    turn0 = true;
    anabledbox();
    

}
reset.addEventListener("click", () => {
    newame();
    box.forEach(b => b.innerText = "");
    winermsg.innerText = "";
});
new_game.addEventListener("click", () => {
    newame();
    box.forEach(b => b.innerText = "");
    winermsg.innerText = "";
});
