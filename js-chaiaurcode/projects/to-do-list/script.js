let input_message = document.getElementById('input_field')
let button = document.getElementById('btn')
let tolist = document.querySelector('.to-list')

button.addEventListener('click', (e) => {
    const text = input_message.value.trim();
    if (isNaN(text) && text !== "") {
        let newlist = document.createElement('li')
        newlist.innerHTML = `<span class="todo-text">${text}</span> <span class="remove" >❌</span>`;
        tolist.appendChild(newlist);
        input_message.value = "";
        save()
    }
});

tolist.addEventListener('click',(e)=> {
    if(e.target.classList.contains('remove')){
        e.target.parentElement.remove();
        save()
    }
});

function save(){
    localStorage.setItem("data",tolist.innerHTML);
}
function show(){
   tolist.innerHTML = localStorage.getItem("data");
}
show()