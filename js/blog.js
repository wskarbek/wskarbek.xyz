window.onload = loadBlogposts();

function buildPostLI(title, date) {
    let a = document.createElement('a');
    a.href = "#";
    a.textContent = title;

    let span = document.createElement('span');
    span.textContent = ` - ${date}`;

    let li = document.createElement('li');
    li.appendChild(a);
    li.appendChild(span);

    return li;
}

function loadBlogposts() {
  let div = document.querySelector('#blogposts-js');
  let posts = ['test', 'test', 'puch'];
  posts.forEach((post) => {
    div.appendChild(buildPostLI(post, '05.07.2023'));
  });
}