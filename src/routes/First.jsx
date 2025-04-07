import { Outlet } from "react-router"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
const First = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default First