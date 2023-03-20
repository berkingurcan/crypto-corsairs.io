import Link from 'next/link'
import React from 'react'
import styles from './style.module.css'

async function getData(id: any) {
  const res = await fetch(process.env.COURSES as string + `course-${id}.json`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
} 
  
async function CourseLanding({course_id}: any) {
  const course = await getData(course_id)

  return (
    <div className={styles.landing}>
      <h1 className={styles.courseTitleLanding}>{course.title}</h1>
      <p className={styles.courseIntro}>{course.introduction_paragraph}</p>
      <div>
        <Link className={styles.playButton} href={`/course/${course.id}/1` }>Start Course {course_id}</Link>
      </div>
      <div>
        <Link className={styles.playButton} href={`/course` }>BACK TO COURSES</Link>
      </div>
      {
        course.chapters.map((chapter: any) => {
          return (
            <div key={chapter}> 
              <ul className={styles.chapterList}>
                <li className={styles.chapterItem}>
                  Chapter {chapter.id}: {chapter.title}
                </li>
              </ul>
            </div>
          )
        })
      }
    </div>
  )
}


export default CourseLanding
