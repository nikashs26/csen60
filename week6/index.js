


function addTodo()
{
  console.log("button was clicked")
  const input = document.getElementById("list-input")
  console.log("Input value = ", input.value)

  const ul = document.querySelector("ul")
  
  console.log(ul)

  const li = document.createElement("li")
  li.textContent = input.value
  ul.appendChild(li) 
}