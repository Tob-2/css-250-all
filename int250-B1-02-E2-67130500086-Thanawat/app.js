let tasks = JSON.parse(localStorage.getItem("tasks")) || []
let filter = "all"

const taskList = document.getElementById("taskList")
const taskForm = document.getElementById("taskForm")
const taskInput = document.getElementById("taskInput")
const priorityInput = document.getElementById("priorityInput")
const searchInput = document.getElementById("searchInput")
const counter = document.getElementById("counter")

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function renderTasks() {
  taskList.innerHTML = ""

  let filtered = tasks.filter(t => {
    if (filter === "active") return !t.completed
    if (filter === "completed") return t.completed
    return true
  })

  const keyword = searchInput.value.toLowerCase()
  filtered = filtered.filter(t => t.title.toLowerCase().includes(keyword))

  filtered.forEach(task => {
    const li = document.createElement("li")
    li.className = "list-group-item d-flex justify-content-between align-items-center"
    li.dataset.id = task.id

    li.innerHTML = `
      <div>
        <input type="checkbox" class="form-check-input me-2 toggle" ${task.completed ? "checked" : ""}>
        <span class="${task.completed ? "text-decoration-line-through" : ""}">
          ${task.title}
        </span>
        <span class="badge bg-${priorityColor(task.priority)} ms-2">
          ${task.priority}
        </span>
      </div>
      <div>
        <button class="btn btn-sm btn-warning edit">Edit</button>
        <button class="btn btn-sm btn-danger delete">Delete</button>
      </div>
    `
    taskList.appendChild(li)
  })

  updateCounter()
}

function priorityColor(p) {
  if (p === "High") return "danger"
  if (p === "Medium") return "warning"
  return "secondary"
}

function updateCounter() {
  const active = tasks.filter(t => !t.completed).length
  counter.textContent = `${tasks.length} total, ${active} active`
}


taskForm.addEventListener("submit", e => {
  e.preventDefault()
  tasks.push({
    id: Date.now(),
    title: taskInput.value,
    completed: false,
    priority: priorityInput.value
  })
  taskInput.value = ""
  saveTasks()
  renderTasks()
})


taskList.addEventListener("click", e => {
  const li = e.target.closest("li")
  const id = Number(li.dataset.id)
  const task = tasks.find(t => t.id === id)

  if (e.target.classList.contains("delete")) {
    tasks = tasks.filter(t => t.id !== id)
  }

  if (e.target.classList.contains("toggle")) {
    task.completed = !task.completed
  }

  if (e.target.classList.contains("edit")) {
    const newTitle = prompt("Edit task", task.title)
    if (newTitle) task.title = newTitle
  }

  saveTasks()
  renderTasks()
})


document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    filter = btn.dataset.filter
    renderTasks()
  })
})


searchInput.addEventListener("input", renderTasks)


document.getElementById("clearCompleted").addEventListener("click", () => {
  tasks = tasks.filter(t => !t.completed)
  saveTasks()
  renderTasks()
})

renderTasks()
