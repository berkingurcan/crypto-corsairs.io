import Link from 'next/link'
import React from 'react'
import dynamic from 'next/dynamic'
import fs from 'fs'
import path from 'path'

async function getCourse(id: any) {
    try {
        const res = await import(`@/mocks/course-${id}.json`);
        return res;
    } catch (error) {
        console.log(error)
    }
}
  

async function CourseLanding({course_id}: any) {
    const DynamicCourse = getCourse(course_id);
    const [course] = await Promise.all([DynamicCourse])

  return (
    <div>
      <h1>Title: {course.title}</h1>
      <p>{course.introduction_paragraph}</p>
      <Link href={`/course/${course.id}/1`}>Start Course {course_id}</Link>
    </div>
  )
}

export default CourseLanding
