console.log("this is index ES6");
class book{
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    add = function (book) {
        console.log("ading to ui");
       let tableBody = document.getElementById('tableBody');
        let uiString = ` <tr>
                 <td>${book.name}</td>
                 <td>${book.author}</td>
                 <td>${book.type}</td>
                 </tr>`;
        tableBody.innerHTML += uiString;
    }

    clear = function () {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate=function(book){
        if(book.name.length<2 || book.author.length<2){
            return false;
        }
        else{
            return true;
        }
    }

    show=function(type,displayMessage){
        let message=document.getElementById('message');
        message.innerHTML=` <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message :</strong>${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
      setTimeout(function() {
          message.innerHTML=""
      }, 2000);
    }
}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programing = document.getElementById('programing');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programing.checked) {
        type = programing.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type)
    console.log("i show the console of book");
    console.log(book);
    

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
    display.clear();
    display.show('success','your book has been sucessfully added'); 
    
}
else{
    //show errror
    display.show('danger','Sorry you cannot add this book.');
    }
    



    // e.preventDefault();
    console.log("andar aagya yra");
}
