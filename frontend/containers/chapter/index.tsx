'use client';

import React, {useState} from 'react'
import Instructions from '@/components/instructions';
import CodeEditor from '@/components/editor';
import styles from './styles.module.css';
import ChapterButtons from '@/components/chapter-buttons';
import CheckButton from '@/components/check-button';

function Chapter({course_id, chapter_id, _course}: any) {

  const course = _course
  const answer_code = course[chapter_id-1].answer_code
  const [userAnswer, setUserAnswer] = useState(course[chapter_id-1].initial_code);

  const handleClick = () => {
    console.log(answer_code == userAnswer, "CEE")
  }

  return (
    <div>
      <div className={styles.mainSection}>
        <div className={styles.rowWorkplace}>
          <Instructions instructions={course[chapter_id-1].instructions} chapter_title={course[chapter_id-1].title} />
          <CodeEditor 
            initial_code={course[chapter_id-1].initial_code} 
            answer_code={course[chapter_id-1].answer_code}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
          />
        </div>
        <div className={styles.rowButtons}>
          <ChapterButtons course_id={course_id} chapter_id={chapter_id} />
          <CheckButton onClick={handleClick} answer={course[chapter_id-1].answer_code}/>
        </div>
      </div>
    </div>
  )
}

export default Chapter
