import React from 'react'
import CoursesSection from '@/components/courses-section'

async function getData() {
  const res = await fetch(process.env.COURSES as string + `courses.json`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
} 

async function CourseContainer() {
  const Courses = await getData()

  return (
    <div>
      <CoursesSection courses={Courses}/>
    </div>
  )
}


export default CourseContainer

