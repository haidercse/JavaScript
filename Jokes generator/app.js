document.getElementById("search-form").addEventListener("submit", (e) => {
    e.preventDefault();
    //get number from form
    let number = document.getElementById("number").value;
    let outPut = document.getElementById("output");
    let result = '';
    let counter = 0;

    //create ajax object and take variable
    let xhr = new XMLHttpRequest();
    // at first open xhr
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    xhr.onload = function() {
            if (this.status == 200) {
                let response = JSON.parse(this.responseText);
                if (response.type === 'success' && number != '') {
                    response.value.forEach(joke => {
                        counter++;
                        result += `<div class=" mt-3 alert alert-info">${counter} - ${joke.joke}</div>`;
                    });
                } else {
                    result += `<div class=" mt-3 alert alert-danger text-center">Something Went wrong!</div>`
                }
                outPut.innerHTML = result;
                //console.log(response.type);
            }

        }
        // then send 
    xhr.send();
    console.log(number);
})