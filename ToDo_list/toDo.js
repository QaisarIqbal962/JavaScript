const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

 const addTask = () => {
    if(inputBox.value ===''){
        alert('You must write something!')
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = '';
    saveDate();
}

listContainer.addEventListener("click",(e) => {
    if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked")  
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false)

function saveDate(){
    localStorage.setItem("Data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("Data");
}

showTask();