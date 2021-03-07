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
console.log(theComing.info())