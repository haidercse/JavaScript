//set contract class
class Contact {
    constructor(name, email, phone, birthday) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.birthday = birthday;
    }

}

//create class UI 
class UI {

    //add new contact
    addContactToList(contact) {
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
    deleteContactFormList(target) {
        if (target.classList.contains('delete')) {
            //a->td->tr remove when click cross button
            if (confirm('Are you sure to delete?')) {
                document.querySelector(".progress").style.display = 'block'
                setTimeout(() => {
                    target.parentElement.parentElement.remove();
                    document.querySelector(".progress").style.display = 'none'
                    this.showAlert("Your selected data has been removed from table successfully", "success");

                }, 1000);

            }
        }
    }

    //search contact
    searchContact(search) {
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
    showAlert(msg, alertType) {
        //create new element div
        let div = document.createElement("div");
        div.className = `alert alert-${alertType}`
        let text = document.createTextNode(msg);
        div.appendChild(text);

        //get parent 
        let card = document.querySelector(".card");
        let cardAction = document.querySelector(".card-action");

        card.insertBefore(div, cardAction)

        //after 2 second alert vanish 
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 2000);
    }

    //clear all fields
    clearFields() {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('birthday').value = '';

    }
}

//local storage save class creating here
class Store {
    //fetch all data get from user input
    static getContact() {
        //first check have any data in local store
        let contact;
        if (localStorage.getItem('contacts') === null) {
            contact = [];
        } else {
            contact = JSON.parse(localStorage.getItem('contacts'));
        }

        return contact;

    }

    //display all data in table for user
    static displayContact() {
        const contacts = Store.getContact();
        contacts.forEach((contact) => {
            const ui = new UI();
            ui.addContactToList(contact);
        })
    }

    //add in local store thats mean save in localStorage
    static addContact(contact) {
        // get from local store 
        const contacts = Store.getContact();
        contacts.push(contact);
        //set local store
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // remove contact from local storage and ui
    static removeContact(phone) {
        const contacts = Store.getContact();
        contacts.forEach((contact, index) => {
            if (contact.phone == phone) {
                contacts.splice(index, 1);
            }
        });
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }
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
        document.querySelector(".progress").style.display = 'block'
        setTimeout(() => {
            document.querySelector(".progress").style.display = 'none'
            ui.showAlert("Please, fill the All input properly!", "danger");
        }, 1000);
    } else {
        document.querySelector(".progress").style.display = 'block'
        setTimeout(() => {
            Store.addContact(contact);
            ui.addContactToList(contact);
            ui.clearFields();
            document.querySelector(".progress").style.display = 'none'
            ui.showAlert("Your All data added in contact list properly!", "success");
        }, 1000);

    }
})

//delete contact from tbody 
document.getElementById("contact-list").addEventListener("click", function(e) {
    //create object for UI
    const ui = new UI();
    ui.deleteContactFormList(e.target);
    Store.removeContact(e.target.parentElement.parentElement.children[2].textContent);

});

//search event start 
document.getElementById("search").addEventListener("keyup", function(e) {
    const ui = new UI();
    ui.searchContact(e.target.value);
    // console.log(e.target.value);
});

//DOM load event 
document.addEventListener("DomContactLoaded", Store.displayContact())