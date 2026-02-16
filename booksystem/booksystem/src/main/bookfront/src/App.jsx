import { Route, Routes } from "react-router-dom"
import BookList from "./book/BookList"
import BookRegister from "./book/BookRegister"

function App() {
 
  return (
    <>
     <Routes>
      <Route path="/" element={ <BookList /> }/>
      <Route path="/reg" element={ <BookRegister /> }/>
     </Routes>
    </>
  )
}

export default App
