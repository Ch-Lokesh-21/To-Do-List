function loadTasks() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    list.innerHTML = tasks;
    attachEventListener();
  }
}
function saveTasks() {
  localStorage.setItem("tasks", list.innerHTML);
}
function attachEventListener() {
  let del_btns = document.querySelectorAll(".del");
  del_btns.forEach((val) => {
    val.addEventListener("click", () => {
      val.parentNode.remove();
      saveTasks();
    });
  });
  let items = document.querySelectorAll(".item");
  items.forEach((val) => {
    val.addEventListener("click", () => {
      if (val.style.textDecoration === "line-through")
        val.style.textDecoration = "none";
      else val.style.textDecoration = "line-through";
      saveTasks();
    });
  });
}
let inp = document.querySelector("#in");
let btn = document.querySelector("#btn");
let list = document.querySelector(".list-items");
btn.addEventListener("click", () => {
  if (inp.value.length == 0) {
    alert("Please enter task");
  } else {
    list.innerHTML += `<div class="list">
          <span class="item">${inp.value}</span>
          <button class="del">
          <i class="fa-regular fa-circle-xmark" ></i>
          </button>
      </div>`;
    attachEventListener();
    saveTasks();
  }
  inp.value = "";
});
window.addEventListener("load", loadTasks);
