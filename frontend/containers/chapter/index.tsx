'use client';

import React, {useEffect, useState} from 'react'
import Instructions from '@/components/instructions';
import CodeEditor from '@/components/editor';
import styles from './styles.module.css';
import ChapterButtons from '@/components/chapter-buttons';
import CheckButton from '@/components/check-button';
import ShowButton from '@/components/show-answer-button';
import TryButton from '@/components/try-button';
import MyModal from '@/components/congratulations-modal';

function Chapter({course_id, chapter_id, _course}: any) {

  const course = _course
  const answer_code = course[chapter_id-1].answer_code
  const [userAnswer, setUserAnswer] = useState(course[chapter_id-1].initial_code);
  const [result, setResult] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [isShow, setIsShow] = useState(false)

  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    let res = answer_code == userAnswer
    setResult(res)
    setIsClicked(true)

    if (isClicked && result) {
      setIsOpen(true)
    }
    return(res)
  }

  const showAnswer = () => {
    setIsShow(true)
  }

  return (
    <div>
      <div className={styles.modal}>
          {
            isClicked && result ? 
              <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
            : null
          }
        </div>
      <div className={styles.mainSection}>
        <div className={styles.rowWorkplace}>
          <Instructions instructions={course[chapter_id-1].instructions} chapter_title={course[chapter_id-1].title} />
          <CodeEditor 
            initial_code={course[chapter_id-1].initial_code}
            answer_code={answer_code}
            userAnswer={userAnswer}
            setUserAnswer={setUserAnswer}
            result={result}
            isClicked={isClicked}
            isShow={isShow}
          />
        </div>
        <div className={styles.rowButtons}>
          <ChapterButtons course_id={course_id} chapter_id={chapter_id} />

          {
            isClicked && !result ? null
              : <CheckButton onClick={handleClick} answer={course[chapter_id-1].answer_code}/>
          }

          {
            isClicked && !result ? 
            
              <div className={styles.falseAnswer}>
                <ShowButton onClick={showAnswer}/>
                <TryButton onClick={handleClick}/>
                <h3>INCORRECT ANSWER MODAL</h3>
              </div>
              : null
          }
          
        </div>
      </div>
    </div>
  )
}

export default Chapter
