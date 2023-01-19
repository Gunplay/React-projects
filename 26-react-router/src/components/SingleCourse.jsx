import { useEffect } from 'react'
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import courses from '../data/courses'


const SingleCourse = () => {
  // <Route path="courses/:courseSlug" element={<SingleCourse/>} param which avalible from path/>
 const params = useParams()
 const navigate = useNavigate()
//  console.log(navigate)
 const course = courses.find((course) => course.slug === params.courseSlug)
//  console.log(params)

  useEffect(() => {
    if (!course) {
      //func navigate rederection route
       navigate('..', {relative: 'path'})
    }
  }, [course])

// simply show NotFound component
//  if ( !course) {
//     return (
//       <>
//     <NotFound/>
//     <div>
//     {/* Very import used link ralative path  to=".." relative='path' !!! not absolutely path="/"*/}
//     <NavLink to=".." relative='path' style={{color: 'white', textDecoration: 'underline',padding: '5px',}} end>All Courses</NavLink>
//     </div>
//       </>

//     )
//  }

  return (
    <>
    {/* <h1>Single Course Info</h1> */}
    <h1>{course?.title}</h1>
    <h2>{course?.slug}</h2>
    <h3>{course?.id}</h3>
    <br></br>
    <div>
      {/* Very important used link ralative path  to=".." relative='path' !!! not absolutely path="/"*/}
      <NavLink to=".." relative='path'style={{color: 'white', textDecoration: 'underline',padding: '5px',}} end>All Courses</NavLink>
      </div>
    </>
  )
}

export default SingleCourse