const books = document.querySelector('.books')

let myLibrary = [
  { title: "Once upon a time", 
    author: "Phil Winsley",
    pages: 310,
    hasRead: "not read yet"
  },
  { title: "One Calm Day", 
    author: "Bill King",
    pages: 247,
    hasRead: "not read yet"
  },
  { title: "Willpower", 
    author: "Warren Gates",
    pages: 212,
    hasRead: "read"
  },
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

const theComing = new Book("The Coming", "Rich Schwartz", 515, "has not read");
myLibrary.push(theComing)

function addBookToLibrary(book) {
  myLibrary.push(book)
}

for (let book of myLibrary) {
  const box = document.createElement('div');
  box.classList.add('book-box');
  const title = document.createElement('h3');
  title.classList.add('title');
  title.textContent = book.title;
  const author = document.createElement('h4');
  author.classList.add('author');
  author.textContent = book.author;
  const pages = document.createElement('p');
  pages.classList.add('pages');
  pages.textContent = book.pages;
  box.appendChild(title)
  box.appendChild(author)
  box.appendChild(pages)
  books.appendChild(box)
}

// const theComing = new Book("The Coming", "Rich Schwartz", 515, "has not read");
console.log(theComing.info())