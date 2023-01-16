import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import courses from '../data/courses'

const Courses = () => {
  return (
    <div>
    <h1>Courses</h1>
    {courses.map((course) => (
      <div style={{backgroundColor: 'darkslategray', transition: '7000ms'}}key={course.id}>
      <NavLink to={course.slug} className="courseLink">
        <div>{course.title}</div>
      </NavLink>
      </div>
    ))}
    </div>
  )
}

export default Courses