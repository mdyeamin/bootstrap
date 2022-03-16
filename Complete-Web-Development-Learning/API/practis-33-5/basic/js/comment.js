function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

loadComments()

function displayComments(comments) {
    console.log(comments);
    const commentContainer = document.getElementById('comments')
    for (const comment of comments) {
        const div = document.createElement('div')
        div.innerHTML = `
       
<h3>${comment.id}: ${comment.name}</h3>
<h5>${comment.email}</h5>
<p>${comment.body}</p>
       `
        commentContainer.appendChild(div)
    }
}

