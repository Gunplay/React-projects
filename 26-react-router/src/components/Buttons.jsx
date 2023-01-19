import React, { useEffect } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Courses from './Courses'

const buttons = ['Tittle', 'slug', 'id']
const Buttons = ({sortCourses}) => {
    
  
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    console.log(query)

  // const sortById = () => {
  //   <NavLink to=".." relative='path' style={{color: 'white', textDecoration: 'underline',padding: '5px',}} end>All Courses</NavLink>
  // }
   
    
    // http://localhost:3000/courses?sort=id
    // function navigate('?sort=title', {relative: 'path'})
  return (
    <div>
        <h2>Sorted by</h2>
        <div>
        {buttons.map((button, i) => <button key={i} onClick={((e) => console.log(button))}>{button}</button>
        )}
        </div>
    </div>
  )
}

export default Buttons