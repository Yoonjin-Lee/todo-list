const todo = document.getElementById("todo")
const form = document.getElementById("form")
const list = document.getElementById("list")

function submitHandler(event){
    event.preventDefault();
    const newLi = document.createElement("li")
    newLi.innerHTML = todo.value;
    list.append(newLi)
    newLi.addEventListener("click", function(){
        newLi.style.textDecoration = "line-through"
        newLi.style.color = "gray"
    })
    todo.value = "";
}

form.addEventListener("submit", submitHandler)