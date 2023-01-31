import React, { useCallback, useEffect } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import courses from '../data/courses'
import { useState } from 'react'

// const buttons = ['Tittle', 'slug', 'id']
const Buttons = ({sortedCourses, sortCourses, setSortedCourses, setSortKey}) => {
    
    
   

    const location = useLocation()
    const param = useParams()
    console.log(param)

    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log(searchParams)

   const buttonHandler = useCallback(
     (key) => {
      
        setSortKey(key)
        navigate(`?sort=${key}`, {relative: 'path'})
         return setSortedCourses(sortCourses(courses, key))
     },
     [courses, sortCourses]
   )
   
   

    // http://localhost:3000/courses?sort=id
    // function navigate('?sort=title', {relative: 'path'})
  return (
    <div>
        <h2>Sorted by</h2>
        <div>
        {/* {buttons.map((button, i) => <button key={i} onClick={(() => navigate('?sort=:courseSlug', {relative: 'path'}))}>{button}</button>
        )} */}
        <button value="title" onClick={(e)=> 
       buttonHandler(e.target.value)
        }>Title</button>
        <button value="slug" onClick={(e)=>  buttonHandler(e.target.value)}>Slug</button>
        <button value="id" onClick={(e)=> 
         buttonHandler(e.target.value)
        }>ID</button>
        </div>
    </div>
  )
}

export default Buttons