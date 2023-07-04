'use client';

import React, {useEffect, useState} from 'react'
import Instructions from '@/components/instructions';
import CodeEditor from '@/components/editor';
import styles from './styles.module.css';
import ChapterButtons from '@/components/chapter-buttons';
import CheckButton from '@/components/check-button';
import ShowButton from '@/components/show-answer-button';
import TryButton from '@/components/try-button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Link from 'next/link';


function TsChapter({course_id, chapter_id, _course}: any) {
    const course = _course
    const answer_code = course[chapter_id-1].answer_code
    const [userAnswer, setUserAnswer] = useState(course[chapter_id-1].initial_code);
    const [result, setResult] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [isShow, setIsShow] = useState(false)
  
    const MySwal = withReactContent(Swal)
  
    const handleClick = () => {
      const res = answer_code.replace(/\s/g, '') == userAnswer.replace(/\s/g, '')
      setResult(res)
      setIsClicked(true)
  
      if (res) {
        MySwal.fire({
          html:<><h2>CONGRATULATIONS!</h2><Link href={`/course/${course_id}/${chapter_id * 1 + 1}`}><p>Go to Next Chapter</p></Link></>,
          icon: 'success',
          background: 'black',
          color: 'white',
        })
  
        localStorage.setItem(`code-course-${course_id}-${chapter_id}`, JSON.stringify(userAnswer))
        localStorage.setItem(`comp-course-${course_id}-${chapter_id}`, JSON.stringify(true))
      }
  
      else if (!res) {
        MySwal.fire({
          html: <><h2>Wrong Answer! Please Check Your Answer</h2></>,
          background: 'black',
          icon: 'error',
        })
      }
  
      return(res)
    }
  
    const showAnswer = () => {
      setIsShow(true)
    }
  
    // CODE COURSE LOCAL STORAGE PROCESSING
    useEffect(() => {
      if (userAnswer == course[chapter_id-1].initial_code) return;
      localStorage.setItem(`code-course-${course_id}-${chapter_id}`, JSON.stringify(userAnswer))
    })
  
    const [storedCode, setStoredCode] = useState<any | null>(null)
    useEffect(() => {
      let stored = localStorage.getItem(`code-course-${course_id}-${chapter_id}`)
      if (stored) {
        stored = JSON.parse(stored)
        setUserAnswer(stored)
      } else {
        stored = course[chapter_id-1].initial_code
      }
      
      setStoredCode(stored)
    }, [course_id, chapter_id])

    return (
        <div>
        <div className={styles.mainSection}>
          <div className={styles.rowWorkplace}>
            <Instructions instructions={course[chapter_id-1].instructions} chapter_title={course[chapter_id-1].title} />
            <CodeEditor 
              initial_code={storedCode == '' ? course[chapter_id-1].initial_code : storedCode}
              answer_code={answer_code}
              userAnswer={storedCode == '' ? userAnswer : storedCode}
              originalAnswer={userAnswer}
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
                </div>
                : null
            }
          </div>
        </div>
      </div>
    )
}

export default TsChapter
