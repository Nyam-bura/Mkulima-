let enzo = document.createElement("div")
enzo.className = 'enzo'
console.log(enzo);

let newChild = document.createElement("p")
let text = document.createTextNode("This is a grandchild")
newChild.appendChild(text)
console.log({newChild});
enzo.appendChild(newChild)

let child = document.getElementsByClassName("container")
child[0].appendChild(enzo)
console.log(child[0].children);