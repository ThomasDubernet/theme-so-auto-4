
export default function createListOfStudents(allBooks) {

  let listOfBooks = []
  let listOfStudents = []

  allBooks.forEach(book => {
    if(book.student_id != null) {
      listOfBooks.push(book)
      if(!listOfStudents.includes(book.student_id)) {
        listOfStudents.push(book.student_id)
      }
    }
  })
  let datas = []
  datas.books = listOfBooks
  datas.students = listOfStudents

  return datas;
}
