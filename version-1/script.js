let taskInput = document.getElementById("taskInput"); // select user part
let btn = document.getElementById("new-btn"); // select button

let selectArea = document.getElementById("showingarea"); // select showing part

let task = document.createElement("ul");
selectArea.appendChild(task);

btn.addEventListener("click",function(){
     
    task.innerHTML +=
    `
    <li>${taskInput.value}</li>
    `
})