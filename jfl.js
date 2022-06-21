let Library = [];
let afterElement = document.getElementById('afterThis');
let wrapper = document.getElementById('appended');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        let readValue;
        const readRgx = /yes|Yes|yeah|Yeah/;
        const noReadRgx = /no|No/;
        if(readRgx.test(read)) {
            readValue = 'read.';
        } else if(noReadRgx.test(read)){
            readValue = 'not read yet.';
        } else {
            return "Invalid Input!"
        }
        let result = `${title} by ${author}, ${pages} pages long, ${readValue}`;
        return result;
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addBookToLibrary(t, a, p, r) {
    let bookAdded = new Book(t, a, p, r);
    Library.push(bookAdded);
    
    removeAllChildNodes(wrapper);
    for(let i = 0; i < Library.length; i++) {
        let elem = document.createElement('div');
        let elemContent = document.createTextNode(Library[i].info());
        elem.className = "card";
        elem.appendChild(elemContent);
        wrapper.appendChild(elem);
    }
}

let addBook = () => {
    let bookName = document.getElementById('bname').value;
    let auth = document.getElementById('auth').value;
    let pgCount = document.getElementById('pgCount').value;
    let readOrNot = document.getElementById('readOrNot').value;

    addBookToLibrary(bookName, auth, pgCount, readOrNot);
}

let addBookBtn = document.getElementById('goAdd').addEventListener('click', addBook);
