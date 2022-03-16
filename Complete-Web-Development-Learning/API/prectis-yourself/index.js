
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => loadUsers(data))
}




function loadUsers(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li)
    }
}

