const books = document.querySelector('.books')
const addBook = document.getElementById('add-book');
const form = document.getElementById('book-form');
const modal = document.getElementById('myModal');
const close = document.querySelector('.close');
const submit = document.querySelector('.submit-book');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookPages = document.getElementById('book-pages');
const hasRead = document.getElementById('has-read');
const removeBtn = document.querySelectorAll('.remove');

let myLibrary = [
  // { title: "Once upon a time", 
  //   author: "Phil Winsley",
  //   pages: 310,
  //   hasRead: "not read yet"
  // },
  // { title: "One Calm Day", 
  //   author: "Bill King",
  //   pages: 247,
  //   hasRead: "not read yet"
  // },
  // { title: "Willpower", 
  //   author: "Warren Gates",
  //   pages: 212,
  //   hasRead: "read"
  // },
];

function Book(title, author, pages, hasRead) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.hasRead = hasRead
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.hasRead}`
  }
}

function addBookToLibrary(title, author, pages, hasRead) {
  const book = new Book(title, author, pages, hasRead)
  myLibrary.push(book)
};

submit.addEventListener('click', function(e) {
  addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, hasRead.value)
  modal.style.display = "none";
  console.log('Submit Clicked');
  books.innerHTML = '';
  add()
  e.preventDefault();
})

function add() {
  myLibrary.forEach(book => {
    const box = document.createElement('div');
    box.classList.add('book-box');
    const title = document.createElement('h3');
    title.classList.add('title');
    title.innerHTML = book.title;
    const author = document.createElement('h4');
    author.classList.add('author');
    author.innerHTML = book.author;
    const pages = document.createElement('p');
    pages.classList.add('pages');
    pages.innerHTML = book.pages;
    const hasRead = document.createElement('p');
    hasRead.classList.add('hasRead');
    hasRead.innerHTML = book.hasRead;
    const remove = document.createElement('button');
    remove.classList.add('remove');
    remove.innerHTML = "Remove";
    remove.addEventListener('click', function(e) {
      e.currentTarget.parentElement.remove();
    })
    const readStatus = document.createElement('button');
    readStatus.classList.add('read');
    readStatus.innerHTML = "Read";
    box.appendChild(title)
    box.appendChild(author)
    box.appendChild(pages)
    box.appendChild(hasRead)
    box.appendChild(remove)
    box.appendChild(readStatus)
    books.appendChild(box)
  })
}

addBook.addEventListener("click", function() {
  modal.style.display = "block"
  console.log('Add Book Clicked!')
})

close.addEventListener("click", function() {
  modal.style.display = "none"
})

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none"
  }
}

// const theComing = new Book("The Coming", "Rich Schwartz", 515, "has not read");
// console.log(theComing.info())