function getUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(users) {
    console.log(users);
    const displayUser = document.getElementById('display-user')
    users.forEach(user => {
        // console.log(user.name);
        const p = document.createElement('p')
        p.innerText = user.name
        displayUser.appendChild(p)
    })
}
