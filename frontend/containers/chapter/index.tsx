import React from 'react'
import Instructions from '@/components/instructions';
import CodeEditor from '@/components/editor';
import styles from './styles.module.css';
import ChapterButtons from '@/components/chapter-buttons';
import CheckButton from '@/components/check-button';

async function Chapter({course_id, chapter_id, _course}: any) {

  const course = _course

  return (
    <div>
      <div className={styles.mainSection}>
        <div className={styles.rowWorkplace}>
          <Instructions instructions={course.chapters[chapter_id-1].instructions} chapter_title={course.chapters[chapter_id-1].title} />
          <CodeEditor 
            initial_code={course.chapters[chapter_id-1].initial_code} 
            answer_code={course.chapters[chapter_id-1].answer_code}
          />
        </div>
        <div className={styles.rowButtons}>
          <ChapterButtons course_id={course_id} chapter_id={chapter_id} />
          <CheckButton  answer={course.chapters[chapter_id-1].answer_code}/>
        </div>
      </div>
    </div>
  )
}

export default Chapter
