function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}


function userData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUserData(data))
}

function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}


function displayUserData(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}👩‍🏭 email: ${user.email}`;
        ul.appendChild(li)
    }
}