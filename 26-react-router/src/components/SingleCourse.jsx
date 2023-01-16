import {NavLink, useParams} from 'react-router-dom'
import courses from '../data/courses'
import { NotFound } from './NotFound'

const SingleCourse = () => {
  // <Route path="courses/:courseSlug" element={<SingleCourse/>} param which avalible from path/>
 const params = useParams()
 const course = courses.find((course) => course.slug === params.courseSlug)
 console.log(params)

 if ( !course) {
    return (
      <>
    <NotFound/>
    <div>
    {/* Very import used link ralative path  to=".." relative='path' !!! not absolutely path="/"*/}
    <NavLink to=".." relative='path' style={{backgroundColor: 'orange',padding: '5px', borderRadius: '20%'}} end>All Courses</NavLink>
    </div>
      </>

    )
 }

  return (
    <>
    {/* <h1>Single Course Info</h1> */}
    <h1>{course.title}</h1>
    <h2>{course.slug}</h2>
    <h3>id: {course.id}</h3>
    <br></br>
    <div>
      {/* Very important used link ralative path  to=".." relative='path' !!! not absolutely path="/"*/}
      <NavLink to=".." relative='path' end>All Courses</NavLink>
      </div>
    </>
  )
}

export default SingleCourse