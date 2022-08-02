
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import {HomePage, SchoolMenu} from './Components';
import { Student, Students, StudentCourse, Course, Courses } from './Pages';


function App() {
  return (
    <BrowserRouter>
      <SchoolMenu />
      <Routes>
        <Route path="homepage" element={<HomePage/>} />
        <Route path="students" element={<Students/>} />
        <Route path="students/:studentId" element={<Student/>} />
        <Route path="students/new" element={<Student/>} />

        <Route path="courses" element={<Courses/>} />
        <Route path="courses/:courseId" element={<Course/>} />
        <Route path="courses/new" element={<Course/>} />

        <Route path="student-courses" element={<StudentCourse/>} />
        <Route path="*" element={<Navigate to="homepage" replace />} />




      </Routes>
    </BrowserRouter>
  );
}

export default App;
