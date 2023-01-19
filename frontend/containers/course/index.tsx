import React from 'react'
import CoursesSection from '@/components/courses-section'
import Courses from '@/mocks/courses.json';

function CourseContainer() {
  return (
    <div>
      <CoursesSection courses={Courses}/>
    </div>
  )
}


export default CourseContainer

