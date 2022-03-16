
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postData(data))


function postData(posts) {
    const sectionContainer = document.getElementById('section-container')
    console.log(posts);
    for (const post of posts) {

        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3>${post.id}: ${post.title}</h3>
        <p>${post.body}</p>
        `
        sectionContainer.appendChild(div)
    }
}