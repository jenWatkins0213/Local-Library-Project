function findAuthorById(authors, id) {
  // loop through authors array and look at the ID
  //if the author ID matched id arg, return matching author
  let foundAuthors = authors.find((authorObj) => authorObj.id === id)  
  return foundAuthors;
}


function findBookById(books, id) {
  let foundBooks = books.find((booksObj) => booksObj.id === id)
  return foundBooks;
}


function partitionBooksByBorrowedStatus(books) {
  // takes in an array of books
  // returns two arrays: first is book objects checked out, second is returned book objects
  // loop through the books array and find if they are returned  
  let currentlyCheckedOut = books.filter((bookObj) => {
    const {borrows} = bookObj;
    let this1 = borrows.some((booksCheckedOut) => {
      return booksCheckedOut.returned === false})
      return this1;
  })
  

  let haveBeenReturned = books.filter((bookObj) => {
    const {borrows} = bookObj;
    let that1 = borrows.every((booksReturned) => {
       return booksReturned.returned === true;
    })
    return that1;
  })

  // console.log(currentlyCheckedOut);
  // console.log('************************************')
  // console.log(haveBeenReturned);

  let combinedArray =[currentlyCheckedOut, haveBeenReturned];
  // console.log(combinedArray);
  return combinedArray;
}

  // returns an array of 10 or fewer account objects that match the borrowers id in the books obj 
  // should include returned in array under account info 
  // look at accounts.id 
  // books.borrowers.id 
  // if books.borrowers.id === accounts.is add them to answer array with borrows info
// get books.borrowers.id
function getBorrowersForBook(book, accounts) {
return book.borrows.map(borrow => {
  let foundHumans = accounts.find(account => account.id === borrow.id);
  // console.log(foundHumans);
   return {...borrow, ...foundHumans};
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
