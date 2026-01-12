function getPostsSortedByTitleLength(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const posts = JSON.parse(xhr.responseText);
            const sortedPosts = posts.sort((a, b) => b.title.length - a.title.length);
            callback(null, sortedPosts);
        } else {
            callback(new Error(`HTTP ошибка: ${xhr.status}`), null);
        }
    };
    xhr.onerror = function() {
        callback(new Error('Ошибка сети'), null);
    };
    xhr.send();
}

function getCommentsSortedByName(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const comments = JSON.parse(xhr.responseText);
            const sortedComments = comments.sort((a, b) => a.name.localeCompare(b.name));
            callback(null, sortedComments);
        } else {
            callback(new Error(`HTTP ошибка: ${xhr.status}`), null);
        }
    };
    xhr.onerror = function() {
        callback(new Error('Ошибка сети'), null);
    };
    xhr.send();
}

function getUsersWithSelectedFields() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ошибка: ${response.status}`);
            return response.json();
        })
        .then(users => users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone
        })));
}

function getIncompleteTodos() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ошибка: ${response.status}`);
            return response.json();
        })
        .then(todos => todos.filter(todo => !todo.completed));
}

async function getPostsSortedByTitleLengthAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(`HTTP ошибка: ${response.status}`);
    const posts = await response.json();
    return posts.sort((a, b) => b.title.length - a.title.length);
}

async function getCommentsSortedByNameAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    if (!response.ok) throw new Error(`HTTP ошибка: ${response.status}`);
    const comments = await response.json();
    return comments.sort((a, b) => a.name.localeCompare(b.name));
}

async function getUsersWithSelectedFieldsAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`HTTP ошибка: ${response.status}`);
    const users = await response.json();
    return users.map(user => ({
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone
    }));
}

async function getIncompleteTodosAsync() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) throw new Error(`HTTP ошибка: ${response.status}`);
    const todos = await response.json();
    return todos.filter(todo => !todo.completed);
}
