import { BrowserRouter, Routes, Route, redirect, Navigate } from 'react-router-dom'
import About from './components/About'
import { Contacts } from './components/Contacts'
import Home from './components/Home'
import { NotFound } from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import Courses from './components/Courses'
import SingleCourse from './components/SingleCourse'
import './App.css'


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout/>}>
              {/* Do Home main help by index={true} */}
              <Route index element={<Home/>}/>
              <Route path="about" element={<About/>} />
              <Route path="contacts" element={<Contacts/>} />
              {/* end turn off .active */}
              <Route path="courses/" element={<Courses />}/>
              <Route path="courses/:courseSlug" element={<SingleCourse/>}/>
              <Route path="*" element={<Navigate to="/" replace></Navigate> }/>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
