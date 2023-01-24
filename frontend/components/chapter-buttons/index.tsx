import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'

function ChapterButtons({course_id, chapter_id}: any) {
    const nextChapter = chapter_id*1 + 1;
    const previousChapter = chapter_id*1 - 1;
  return (
    <div>
      <Link className={styles.backButton} href={`/course/${course_id}/${previousChapter}`}>&#8592; BACK</Link>
      <Link className={styles.nextButton} href={`/course/${course_id}/${nextChapter}`}>NEXT &#8594;</Link>
    </div>
  )
}

export default ChapterButtons