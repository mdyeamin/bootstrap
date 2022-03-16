
function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(date => console.log(date))
};

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        // console.log(user.email);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}`;
        ul.appendChild(li);
    }

}