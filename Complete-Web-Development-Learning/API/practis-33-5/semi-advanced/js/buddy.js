const randonUser = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayRandomUser(data))
}
randonUser()

const displayRandomUser = users => {
    const displayUser = users.results;
    const allUsers = document.getElementById('all-users')
    for (const user of displayUser) {
        const p = document.createElement('p')
        p.innerText = `${user.name.title}:| ${user.name.first} ${user.name.last} /${user.email}`
        allUsers.appendChild(p)
        console.log(user);
    }
}