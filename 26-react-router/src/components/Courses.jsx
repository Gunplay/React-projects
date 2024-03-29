import React, { useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import courses from '../data/courses'
import { useEffect } from 'react'
import Buttons from './Buttons'

const SORT_KEYS = ['title', 'slug', 'id']

const sortCourses =(courses, key) => {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
   return sortedCourses
  }

  // так как метод sort ожидает числового значения, а не boolean added ? 'true' : 'false'
  return sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  // return sortedCourses.sort()
  
}

const Courses = () => {
  const location = useLocation() // query string http://localhost:3000/courses/react
  // npm i query-string 
  // console.log(location)
  // convert in the object from string
  const query = queryString.parse(location.search)

  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  console.log(query.sort)
  // console.log(sortCourses(courses, sortKey))
  // console.log(sortKey) // courses?sort=slug
  const [sortedCourses, setSortedCourses] = useState(courses)

  // useEffect(() => {
  //     if (!SORT_KEYS.includes(sortKey)) {
  //       navigate('.')
  //       setSortKey() // для того что бы рендер не делался два раза, обнуляем ключи undefined
  //       setSortedCourses([...courses]) // Возвращаем в оригинальное состояние,если не сортируем!
  //     }
  // }, [sortKey, navigate])
  return (
    <div>
      <Buttons sortedCourses={sortedCourses}  sortCourses={sortCourses} setSortedCourses={setSortedCourses} setSortKey={setSortKey}/>
      <h1>
   {sortKey ? `Sorted Course by ${sortKey}`: 'Courses'}
      </h1>
    {sortedCourses.map((course) => (
      <div style={{backgroundColor: 'darkslategray', transition: '7000ms'}}key={course.id}>
      <NavLink to={course.slug} className="courseLink">
        <div>{course.title} - {course.slug} - {course.id}</div>
      </NavLink>
      </div>
    ))}
    </div>
  )
}

export default Courses