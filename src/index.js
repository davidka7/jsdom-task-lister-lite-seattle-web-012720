

  function addTask(task) {
      let newTask = document.createElement("li");
      newTask.textContent = task;
      document.querySelector("ul").appendChild(newTask);
      }
      


      document.addEventListener("DOMContentLoaded", () => {

        const form = 
          document.getElementById("create-task-form");
          form.addEventListener("submit",
        function(event) {
          event.preventDefault();
        const taskToAdd = event.target["new-task-description"].value;
          if (taskToAdd !== "") {
        addTask(taskToAdd);
        }
        }); 



  //function addTasks(task) {
   // let newTask = document.createElement("li");
  //  newTask.textContent = task;
  //  document.querySelector("ul").appendChild(newTask);

 // const form = document.getElementById("create-task-form");


  //Event.preventDefault
//});

//document.addEventListener("click", () => {
  // your code here
 // function 
//}