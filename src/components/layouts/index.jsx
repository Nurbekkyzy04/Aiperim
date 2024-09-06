import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
  return (
    <div>
      <Header/>
      <div style={{paddingTop: '65px'}}>

      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout