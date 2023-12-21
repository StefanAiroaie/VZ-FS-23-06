


let inputText = document.querySelector("#inputText")

let myList = document.querySelector("#myList")

inputText.addEventListener("change", () => {
    if (inputText.value === "") {
        alert("Ohne text funktioniert nicht")
        return
    }
    let list = document.createElement("li")
    list.textContent = inputText.value
    myList.appendChild(list)

})