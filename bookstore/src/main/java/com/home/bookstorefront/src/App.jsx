import { Route, Routes } from "react-router-dom"
import MainLayout from "./component/layout/MainLayout"
import Landing from "./pages/landing/Landing"
import Login from "./pages/member/Login"





function App() {

  return (
    <Routes>
      {/* 처음 페이지 */}
      <Route path="/" element={<Landing />} />

      {/* 메인 페이지 */}
      <Route path="/moonlit-shelf" element={<MainLayout />}>
        {/* 로그인 페이지 */}
        <Route path="login" element={<Login />}/>
      </Route>
      
    </Routes>
  )
}

export default App
