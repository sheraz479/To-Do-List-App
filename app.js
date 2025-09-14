let btn = document.querySelector("button");
let int = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click" , function(){
    let item = document.createElement("li");
    item.innerText = int.value;
    ul.appendChild(item)
    console.log(int.value)
    int.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("Delete");
    item.appendChild(delBtn);
});

ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("deleted")
    }
});

