import { Route, Routes } from "react-router-dom"
import BookList from "./book/BookList"
import BookRegister from "./book/BookRegister"
import BookDetail from "./book/BookDetail"
import BookUpdate from "./book/BookUpdate"

function App() {
 
  return (
    <>
     <Routes>
      <Route path="/" element={ <BookList /> }/>
      <Route path="/reg" element={ <BookRegister /> }/>
      <Route path="/detail/:bookNum" element={ <BookDetail /> }/>
      <Route path="/detail/:bookNum/update" element={ <BookUpdate /> }/>
     </Routes>
    </>
  )
}

export default App
