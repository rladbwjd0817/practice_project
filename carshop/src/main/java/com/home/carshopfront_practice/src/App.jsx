import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Landing from "./pages/landing/Landing"
import Login from "./pages/member/Login"



function App() {

  return (
    <Routes>
      {/* 처음페이지 */}
      <Route path="/" element={<Landing />}/>

      {/* 메인 페이지*/}
      <Route path="/velora" element={<MainLayout />}>
        
      </Route>

      {/* 독립 라우트(헤더/푸터 X) */}
      <Route path="/velora-login" element={<Login />}/>

    </Routes>
  )
}

export default App
