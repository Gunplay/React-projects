import { Outlet } from "react-router-dom"
import Menu from "../components/Menu"


const MainLayout = () => {
  return (
    <>
    <Menu/>
   
    {/* About Contacts display on Outlet */}
    <Outlet/>
    </>
  )
}

export default MainLayout
