//set contract constructor 
function Contact(name, email, phone, birthday) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
}

// another constructor for UI
function UI() {

}

//add new contact
UI.prototype.addContactToList = function(contact) {
        //console.log(contact);
        //take contact list
        const list = document.getElementById("contact-list");
        // create row element 
        const row = document.createElement("tr");
        row.innerHTML = `
               <td>${contact.name}</td>
               <td>${contact.email}</td>
               <td>${contact.phone}</td>
               <td>${contact.birthday}</td>
               <td><a class= "btn btn-floating delete">X</a></td>
        `
        list.appendChild(row);
    }
    //delete contact
UI.prototype.deleteContactFormList = function(target) {
    if (target.classList.contains('delete')) {
        //a->td->tr remove when click cross button
        if (confirm('Are you sure to delete?')) {
            target.parentElement.parentElement.remove();
        }
    }
}

//search contact
UI.prototype.searchContact = function(search) {
    const rows = document.querySelectorAll("#contact-list tr");
    rows.forEach(function(row) {
        let text = row.children[0].textContent;
        if (text.toLowerCase().indexOf(search) != -1) {
            row.style.display = 'table-row'
        } else {
            row.style.display = 'none'
        }
    })
}

//show alert contact
UI.prototype.showAlert = function() {

}

//clear all fields
UI.prototype.clearFields = function() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('birthday').value = '';

}


/********
     start all events from here 
     delete event 
     submit event 
     search event

******/

//submit event 
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phone = document.getElementById("phone").value
    const birthday = document.getElementById("birthday").value

    // instantiate contact class / creating object for contact
    const contact = new Contact(name, email, phone, birthday);

    // instantiate UI class / creating object for UI
    const ui = new UI();
    // check validation 
    if (name === '' || email === '' || phone === '' || birthday === '') {
        console.log('error');
    } else {
        ui.addContactToList(contact);
        ui.clearFields();
    }
})

//delete contact from tbody 
document.getElementById("contact-list").addEventListener("click", function(e) {
    //create object for UI
    const ui = new UI();
    ui.deleteContactFormList(e.target);
});

//search event start 
document.getElementById("search").addEventListener("keyup", function(e) {
    const ui = new UI();
    ui.searchContact(e.target.value);
    // console.log(e.target.value);
});