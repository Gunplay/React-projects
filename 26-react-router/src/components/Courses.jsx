import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import courses from '../data/courses'

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}
const Courses = () => {
  const location = useLocation()
  // npm i query-string 
  // console.log(location)
  // convert in the object from string
  const query = queryString.parse(location.search)
  // console.log(query)
  const [sortKey, setSortKey] = useState(query.sort)
  console.log(sortCourses(courses, sortKey))
  // console.log(sortKey) // courses?sort=slug
  const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))

  return (
    <div>
    <h1>Courses</h1>
    {sortedCourses.map((course) => (
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