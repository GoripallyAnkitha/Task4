// ---------------- To-Do App ----------------
let taskList = document.getElementById("taskList");

function loadTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => addTaskToDOM(task));
}

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value;
  if (task) {
    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = "";
  }
}

function addTaskToDOM(task) {
  let li = document.createElement("li");
  li.textContent = task;
  li.onclick = () => {
    li.remove();
    removeTask(task);
  };
  taskList.appendChild(li);
}

function saveTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

loadTasks();

// ---------------- Products ----------------
let products = [
  { name: "Laptop", category: "electronics", price: 800, rating: 4.5 },
  { name: "Shirt", category: "clothing", price: 20, rating: 4.0 },
  { name: "Phone", category: "electronics", price: 500, rating: 4.7 },
  { name: "Jeans", category: "clothing", price: 40, rating: 4.2 }
];

function displayProducts(items) {
  let container = document.getElementById("productList");
  container.innerHTML = "";
  items.forEach(p => {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p>Price: $${p.price}</p>
      <p>Rating: ${p.rating}</p>`;
    container.appendChild(div);
  });
}

function filterProducts() {
  let filter = document.getElementById("filter").value;
  let filtered = filter === "all" ? products : products.filter(p => p.category === filter);
  displayProducts(filtered);
}

function sortProducts() {
  let sort = document.getElementById("sort").value;
  let sorted = [...products];
  if (sort === "price") sorted.sort((a, b) => a.price - b.price);
  if (sort === "rating") sorted.sort((a, b) => b.rating - a.rating);
  displayProducts(sorted);
}

displayProducts(products);