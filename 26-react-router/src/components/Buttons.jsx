import React, { useEffect } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Courses from './Courses'
import courses from '../data/courses'
import { useState } from 'react'

// const buttons = ['Tittle', 'slug', 'id']
const Buttons = ({sortedCourses, key, sortCourses, sortKey}) => {
    
    const [sortBy, setSortBy] = useState(sortCourses(courses, sortKey))
    console.log(sortBy)

    const location = useLocation()
    const param = useParams()
    console.log(param)

    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams)

   
   

    // http://localhost:3000/courses?sort=id
    // function navigate('?sort=title', {relative: 'path'})
  return (
    <div>
        <h2>Sorted by</h2>
        <div>
        {/* {buttons.map((button, i) => <button key={i} onClick={(() => navigate('?sort=:courseSlug', {relative: 'path'}))}>{button}</button>
        )} */}
        <button value="title" onClick={(e)=> {
         { if (e.target.value === 'title') {
          navigate('?sort=title', {relative: 'path'})
           return setSortBy(sortBy.sort((a, b) => (a[key] > b[key] ? 1 : -1)))
         }
          }
        }}>Title</button>
        <button value="slug" onClick={(e)=> {
         { if (e.target.value === 'slug') {
          navigate('?sort=slug', {relative: 'path'})
           return setSortBy(sortBy.sort((a, b) => (a[key] > b[key] ? 1 : -1)))
         }
          }
        }}>Slug</button>
        <button value="id" onClick={(e)=> console.log(e.target.value)}>ID</button>
        </div>
    </div>
  )
}

export default Buttons