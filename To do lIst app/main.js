const input_Box = document.getElementById("input-box");
const listContainer = document.getElementById("list-conatiner");

function addtask(){
    if(input_Box.value === ""){
        alert("You Must Write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input_Box.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#x274C";
        li.appendChild(span);
    }
    input_Box.value = "";
    saveData()
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData()
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem("data" ,listContainer.innerHTML)
}

function showList(){
    listContainer.innerHTML=localStorage.getItem("data")
}

showList();