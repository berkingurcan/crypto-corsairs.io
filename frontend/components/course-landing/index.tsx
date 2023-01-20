import Link from 'next/link'
import React from 'react'
import styles from './style.module.css'

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
    <div className={styles.landing}>
      <h1>{course.title}</h1>
      <p>{course.introduction_paragraph}</p>
      <div>
        <Link className={styles.playButton} href={`/course/${course.id}/1` }>Start Course {course_id}</Link>
      </div>
      <div>
        <Link className={styles.playButton} href={`/course` }>COURSES</Link>
      </div>
    </div>
  )
}

export default CourseLanding
