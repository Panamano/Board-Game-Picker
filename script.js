let todoInput;
let errorInfo;
let addBtn;
let ulList;
let newTodo;
let popup;
let popupInfo;
let popupInput;
let popupAddBtn;
let popupCloseBtn;
let todoToEdit;
// const xxx = ulList.map(x=>x.textContent);
// console.log(xxx);
// console.log(typeof xxx);

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todolist ul");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  popupAddBtn = document.querySelector(".accept");
  popupCloseBtn = document.querySelector(".cancel");

  pickBtn = document.querySelector(".pick");
  result = document.querySelector(".result");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTodo);
  ulList.addEventListener("click", checkClick);
  popupCloseBtn.addEventListener("click", closePopup);
  popupAddBtn.addEventListener("click", changeTodoText);
  todoInput.addEventListener("keyup", enterKeyCheck);
  pickBtn.addEventListener("click", picker);
};

const addNewTodo = () => {
  if (todoInput.value !== "") {
    newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    ulList.append(newTodo);

    createToolsArea();

    todoInput.value = "";
    errorInfo.textContent = "";
    // console.log(ulList);
  } else {
    errorInfo.textContent = "Wpisz treść zadania";
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTodo.append(toolsPanel);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDYCJA";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

// const add = (x, y) => {
//   const score = x + y;
//   showScore(score)
// };
// const showScore = (score2) => {
//   console.log(`Wynik to ${score2}`);
// };

// add(5, 6);

const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
    console.log(e.target);
    console.log("complete");
  } else if (e.target.matches(".edit")) {
    editTodo(e);
    console.log("edit");
  } else if (e.target.matches(".delete")) {
    deleteTodo(e);
    console.log("delete");
  }
};

const editTodo = (e) => {
  todoToEdit = e.target.closest("li");
  popupInput.value = todoToEdit.firstChild.textContent;
  popup.style.display = "flex";
};
const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};

const changeTodoText = () => {
  if (popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
    popupInfo.textContent = "";
  } else {
    popupInfo.textContent = "Musisz podać jakąś treść!";
  }
};

const deleteTodo = (e) => {
  e.target.closest("li").remove();
  const allTodos = document.querySelectorAll("li");
  if (allTodos.length === 0) {
    errorInfo.textContent = "Brak zadań na liście.";
  }
};

const enterKeyCheck = (e) => {
  if (e.key === "Enter") {
    addNewTodo();
  }
};

const picker = () => {
  const xxx = document.getElementsByTagName("li");
  if (xxx.length !== 0) {
    let number = Math.floor(Math.random() * xxx.length);
    result.textContent = xxx[number].innerText.replace("EDYCJA", "");
    console.log(typeof xxx);
    console.log(xxx.length);
    console.log(xxx);
  }
};

document.addEventListener("DOMContentLoaded", main);
