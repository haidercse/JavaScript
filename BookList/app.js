const form = document.querySelector('#form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const tbody = document.querySelector('#tbody');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (title.value == '' || author.value == '' || year.value == '') {
        alert("Please, input valid information!!");
    } else {
        const newTr = document.createElement('tr');
        //new title creating
        const newTitle = document.createElement('td');
        newTitle.innerHTML = title.value;
        newTr.appendChild(newTitle);

        //new Author creating
        const newAuthor = document.createElement('td');
        newAuthor.innerHTML = author.value;
        newTr.appendChild(newAuthor);

        //new Year creating
        const newYear = document.createElement('td');
        newYear.innerHTML = year.value;
        newTr.appendChild(newYear);
        // display in ui 
        tbody.appendChild(newTr);

    }
});