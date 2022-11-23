function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books=[]) {
let numberBorrowed = 0;
books.forEach((book) => {
  if (!book.borrows[0].returned) numberBorrowed++
})
return numberBorrowed;
}

function getMostCommonGenres(books) {
  // Look in the books array at the genres
  // add up the like genres in an array with the genre name 
  // order the array from most common to least w/ the name and the number of times the genre occurs
for (let i=0;i<books.length;i++) {
  let result = {};
  books.forEach((bookObj) => {
   if (result[bookObj.genre]) {
    result[bookObj.genre]++;
   } else {
    result[bookObj.genre] = 1;
   }
  });
  return Object.entries(result)
   .map(([name, count]) => {
    return {
     name,
     count
    };
   })
   .sort((a, b) => b.count - a.count)
   .slice(0, 5);
}
return books.map((book) => {
  return {name: book.title, count: book.borrows.length}
 }).sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5)
}


function getMostPopularBooks(books=[]) {
let checkedOutBooks = books.map((bookObj) => {
  let title = bookObj.title;
 let numCheckedOut = bookObj.borrows.length;
  return {name:title, count:numCheckedOut};
  // return resultArray;
  // .sort((num1, num2) => {
  //   // console.log(num1.count);
  // return num2.count.length - num1.count.length;
}).sort((a,b)=> b.count -a.count).slice(0,5);

// console.log(checkedOutBooks);
return checkedOutBooks;
}

function getMostPopularAuthors(books=[], authors=[]) {
//  return an array of book objects that have been checked out the most
// array has two keys name: first,last of author
// count key: total number of times borrowed
// look at all of the books and count the total number of borrow objects then add them together
// sort all of them 
// match each book obj with the author information 

let totalCheckout = books.map((bookObj)=> {
  // let correctAuth = authors.name
  let objLength = bookObj.borrows.length;
let matchingAuth = authors.find((authObj)=>{
  return authObj.id === bookObj.authorId
}) 
let correctAuth = correctMeFormat(matchingAuth.name.first, matchingAuth.name.last) 
return {name:correctAuth, count:objLength};
}).sort((num1, num2)=> num2.count - num1.count).slice(0,5)

return totalCheckout;
}

function correctMeFormat(first, last) {
  return `${first} ${last}`
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
