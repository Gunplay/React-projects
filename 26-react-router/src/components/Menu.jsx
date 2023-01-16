// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      {/* <a href="."></a> */}
      {/* delete 'class active' for home help 'end' */}
        {/* <Link to="." end >Home</Link> */}
        {/* <NavLink style={({ isActive}) => isActive ? {color: 'lightyellow', textDecoration: 'none'}: {}} to="." end >Home</NavLink> */}
        {/* <NavLink className ={({isActive}) => isActive ? 'activeLink' : 'link'} to="." end >Home</NavLink> */}
        <NavLink to="." end >Home</NavLink>
        <NavLink to="courses">Courses</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="contacts">Contacts</NavLink>
        <NavLink to="picture">Picture</NavLink>
    </nav>

  )
}

export default Menu
