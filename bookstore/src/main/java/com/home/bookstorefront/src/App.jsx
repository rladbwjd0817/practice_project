import { Route, Routes } from "react-router-dom"
import MainLayout from "./component/layout/MainLayout"
import Home from "./pages/home/Home"




function App() {

  return (
    <Routes>
      {/* 처음 페이지 */}
      <Route path="/" element={<Home />} />

      <Route path="/moonlit-shelf" element={<MainLayout />}>
        {/* <Route path="" element={}/> */}
      </Route>
      
    </Routes>
  )
}

export default App
