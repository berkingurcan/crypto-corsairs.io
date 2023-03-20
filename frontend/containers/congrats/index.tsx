import Link from 'next/link'
import React from 'react'
import styles from './styles.module.css';


const Congrats = ({course_id}: any) => {
    const nextId = (parseInt(course_id) + 1).toString()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>CONGRATULATIONS!</h1>
      <h3>You finished all chapters for this course! Please go to next course</h3>
      <br />
      <Link href={`/course/${nextId}`} className={styles.playButton}>Go To Next Course</Link>
    </div>
  )
}

export default Congrats
