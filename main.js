const form = document.getElementById("todo-form");
const input = document.getElementById("input-task");
const priority = document.getElementById("priority")
const taskList = document.getElementById("task-list");
const doneTask = document.getElementById("done-task");
const deleteAllBtn = document.getElementById("delete-all-btn");
const taskSection = document.getElementById("task-section");
const doneSection = document.getElementById("done-section");


form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const taskText = input.value;
    const priorityValue = priority.value;
    if (priorityValue === "") {
            alert("Pilih tingkat prioritas tugas terlebih dahulu");
            return;
        };
        
        
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();
    const li = document.createElement("li");
    const taskLeft = document.createElement("div")
    taskLeft.classList.add("task-left");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    const dateText = document.createElement("small");
    dateText.textContent = `Ditambahkan: ${formattedDate}`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✖";
    
    taskInfo.appendChild(taskSpan);
    taskInfo.appendChild(dateText);
    taskLeft.appendChild(checkbox);
    taskLeft.appendChild(taskInfo);
    li.appendChild(taskLeft);
    li.appendChild(deleteBtn);

    if (priorityValue === "high") {
        taskList.prepend(li);
    } else {
        taskList.appendChild(li);
    }
    taskSection.style.display = "block";

    checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
           taskSpan.style.textDecoration = "line-through";
           deleteBtn.style.display = "none";
           dateText.style.display = "none";
           checkbox.style.display = "none";
           doneTask.appendChild(li);
           doneSection.style.display = "block";
        }
        if (
            taskList.children.length === 0) {
            taskSection.style.display = "none";
            deleteAllBtn.style.display = "none";}
    });
    
        
        deleteBtn.addEventListener("click", function() {
            const confirmDelete = confirm("Yakin mau hapus tugas ini?");
            if (confirmDelete) {
                li.remove();}
            if (taskList.children.length === 0) {
                taskSection.style.display = "none";
                deleteAllBtn.style.display = "none";}
            });
            
            deleteAllBtn.style.display = "block";
            
            priority.value = "";
            input.value = "";
});

deleteAllBtn.addEventListener("click", function() {
            const confirmDelete = confirm("Yakin ingin menghapus semua tugas?");
            if (confirmDelete) {
                taskList.innerHTML = "";
                deleteAllBtn.style.display = "none";
                taskSection.style.display = "none";
            }
});