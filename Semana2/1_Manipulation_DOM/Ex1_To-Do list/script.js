function deleteTask(button) {
    let liContainer = button.parentElement;
    liContainer.remove();
}

function clickCheckBox(inputCheck) {
    let liContainer = inputCheck.parentElement.parentElement;
     let paragraphName = liContainer.querySelector(".paragraph-name");
    paragraphName.classList.toggle("task-completed");

    // let btnDelete = liContainer.querySelector(".btn-delete");
    // if(inputCheck.checked) {
    //     btnDelete.style.display = "none";
    // } else {
    //     btnDelete.style.display = "inline";
    // }
}

function createTask() {

    let li = document.createElement("li");

    li.innerHTML = "<p class='paragraph-name'><span>Name:</span>"+`${inputNameTask.value}`+"</p><p><label for='checkbox-field'>Task completed: </label><input onclick='clickCheckBox(this)' id='checkbox-field' type='checkbox'></p><button onclick='deleteTask(this)' class='btn-delete'>Delete Task</button>";

    ulElement.appendChild(li);

}

let ulElement = document.querySelector("#list-tasks");
let inputNameTask = document.querySelector("#nameField");