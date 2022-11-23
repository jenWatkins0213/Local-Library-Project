function findAccountById(accounts, id) {
  // looks at account.id 
  // finds account that matches inserted argument
  // returns account object that matches
  let givenAccounts = accounts.find((accountsObj) => {
    return accountsObj.id === id;
  })
  return givenAccounts;
}

function sortAccountsByLastName(accounts) {
  // looks at (loops through) accounts.name.last 
  // adds last names to an array 
  // sorts through the array to list them in alphabetical order
  accounts.sort((nameA, nameB) => (nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1));
  return accounts;
}

function getTotalNumberOfBorrows(account={}, books) {
  // returns the number that an accounts id appears in a book.borrows array
  // i would identify accounts.id 
  // then look at books array and find books.borrows.id
  // add up all the times that id appears in books.borrows.id array
  // const accId = account.id;
let accId = account.id;
// const {borrows} = books;
// console.log(books.borrows)
// let borrowID = borrows.id;
let total = 0;
books.forEach(bookObj =>
  bookObj.borrows.forEach(borrowObj => accId === borrowObj.id && total++));
return total;
}



function getBooksPossessedByAccount(account={}, books=[], authors=[]) {
// return an array of book objects that represent all books cureently checked out by the given account.

// look at the books array and get a list of books.borrows (filter)
let BookObjects = books.filter((bookObj) => {
  const {borrows} = bookObj;
  // if the book.borrows.returned = false & account.id = book.borrows.id add it to the result array 
  let foundBook = borrows.find((borrowObj) => {
  return borrowObj.returned === false && borrowObj.id === account.id
})
return foundBook;
// console.log(foundBook);
})
// with the list of matching books map the author information from the bookObj
let result = BookObjects.map((bookObj)=> {
const {authorId} = bookObj
let foundAuthor = authors.find((authorObj) => {
  return authorObj.id === authorId;
})
bookObj.author = foundAuthor;
return bookObj;
})
// look at current bookObj and match the authorId to an author
// add the matching author to the result array
return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
