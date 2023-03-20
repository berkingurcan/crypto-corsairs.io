import Link from 'next/link';
import React from 'react'
import styles from './styles.module.css'

function ChapterButtons({course_id, chapter_id}: any) {
  const nextChapter = chapter_id*1 + 1;
  let previousChapter = chapter_id*1 - 1;
  if (previousChapter == 0) previousChapter = 1;

  return (
    <div>
      <Link className={styles.playButton} href={`/course/${course_id}/${previousChapter}`}>&#8592; BACK</Link>
      <Link className={styles.playButton} href={`/course/${course_id}/${nextChapter}`}>NEXT &#8594;</Link>
    </div>
  )
}

export default ChapterButtons
