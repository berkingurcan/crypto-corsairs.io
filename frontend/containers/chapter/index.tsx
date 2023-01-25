import React from 'react'
import Instructions from '@/components/instructions';
import CodeEditor from '@/components/editor';
import Sidebar from '@/components/sidebar';
import styles from './styles.module.css';
import ChapterButtons from '@/components/chapter-buttons';
import CheckButton from '@/components/check-button';

async function getCourse(id: any) {
  try {
      const res = await import(`@/mocks/course-${id}.json`);
      return res;
  } catch (error) {
      console.log(error)
  }
}

async function Chapter({course_id, chapter_id}: any) {
  const DynamicCourse = getCourse(course_id);
  const [course] = await Promise.all([DynamicCourse])

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
          <Sidebar courseTitle={course.title} course_id={course_id} chapter_id={chapter_id} chapters={course.chapters}/>   
          <CheckButton />
          <ChapterButtons course_id={course_id} chapter_id={chapter_id} />
        </div>
      </div>
    </div>
  )
}

export default Chapter
