import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <nav>
      {/* delete 'class active' for home help 'end' */}
        {/* <Link to="." end >Home</Link> */}
        {/* <NavLink style={({ isActive}) => isActive ? {color: 'lightyellow', textDecoration: 'none'}: {}} to="." end >Home</NavLink> */}
        {/* <NavLink className ={({isActive}) => isActive ? 'activeLink' : 'link'} to="." end >Home</NavLink> */}
        <NavLink className to="." end >Home</NavLink>
        <NavLink to="courses">Courses</NavLink>
        <NavLink className to="about">About</NavLink>
        <NavLink className to="contacts">Contacts</NavLink>
        <NavLink className to="picture">Picture</NavLink>
    </nav>

  )
}

export default Menu
