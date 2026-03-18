import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Landing from "./pages/landing/Landing"
import Login from "./pages/member/Login"
import NewModel from "./pages/manage/NewModel"
import SalesRegister from "./pages/manage/SalesRegister"
import SalesList from "./pages/manage/SalesList"
import Home from "./pages/home/Home"
import Join from "./pages/member/Join"



function App() {

  return (
    <Routes>
      {/* 처음페이지 */}
      <Route path="/" element={<Landing />}/>

      {/* 메인 페이지*/}
      <Route path="/velora" element={<MainLayout />}>
        {/*  홈 화면 */}
        <Route path="" element={<Home />}/>

        {/* 차량등록 페이지 */}
        <Route path="newModel" element={<NewModel />} />

        {/* 구매자 정보 등록 페이지 */}
        <Route path="sales-register" element={<SalesRegister />}/>

        {/* 구매자 리스트 페이지 */}
        <Route path="sales-list" element={<SalesList />}/>
        
      </Route>

      {/* 독립 라우트(헤더/푸터 X) */}
      <Route path="/velora-login" element={<Login />}/>
      <Route path="/velora-join" element={<Join />} />

    </Routes>
  )
}

export default App
