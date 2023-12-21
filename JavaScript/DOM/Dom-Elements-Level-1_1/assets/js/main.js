


let inputText = document.querySelector("#inputText")

let myList = document.querySelector("#myList")

inputText.addEventListener("change", () => {
    let list = document.createElement("li")
    list.textContent = inputText.value
    myList.appendChild(list)

})