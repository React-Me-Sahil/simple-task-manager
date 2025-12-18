// Your app has two phases:

// 1.Page Load Phase
    // → Read old tasks from localStorage
    // → Show them on the screen

// 2.Button Click Phase
    // → Add new task
    // → Update localStorage
    // → Re-render everything

// ---page load Phase ---    

let btn = document.getElementById("new-btn"); //select button
let showingarea = document.getElementById("showingarea"); //select showingarea


 let tasks = JSON.parse(localStorage.getItem("tasks")) || [] // i ma asking to localstroage that tasks is available,
                                                                // if not then show a empty array

 tasks.forEach(function(singleTask){

    showingarea.innerHTML +=
    `
    <ul>${singleTask}</ul>
    `
   });
 
// --- Button Click Phase ---   

btn.addEventListener("click",function(){
   let taskInput = document.getElementById("taskInput").value; //select user given data
   
   tasks.push(taskInput); // a user value go into task varriable/array
    localStorage.setItem("tasks", JSON.stringify(tasks)); //also setitem means save ,left side is a sticker/key and right side is actuall array, 
   // but if loaclstorage is not take so it convert in it array to string by using JSON.stringify..
   // and whole line meaning is simple take my task array , convert it into text and store/save a browser with the same name/sticker/key.. 

showingarea.innerHTML = ""; //Clear the display area


 tasks.forEach(function(singleTask){ //re-render part

    showingarea.innerHTML +=

    `
    <ul>${singleTask}</ul>
    `
    
   });   
 
})


