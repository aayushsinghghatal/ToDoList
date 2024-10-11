

const input = document.querySelector('.input');
const list = document.querySelector('.list');
let a = 0;

//add task
function addTask() {
    if(input.value === "") {
        alert("Please need to enter something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}


// Event listener for focus (input field active for typing)
input.addEventListener('focus', function () {
    a = 1;
    console.log(a);
});


// Event listener for blur (input field loses focus)
input.addEventListener('blur', function () {
    a = 0;
    console.log(a);
});


// feature for enter key
document.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        if (a === 1) {
            // Add task if input is focused
            addTask();
        } else {
            // Focus the input field if it's not focused
            input.focus();
        }
    }
});


//completed and removing task
list.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

}, false);


// save data
function saveData() {
    localStorage.setItem('data', list.innerHTML);
}

//display saved data
function showTask() {
    list.innerHTML = localStorage.getItem('data');
}
showTask();