import React from 'react'
import Instructions from '@/components/instructions';
import CodeEditor from '@/components/editor';
import DiffEditor from '@/components/diff-editor';
import Sidebar from '@/components/sidebar';

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

  console.log(course.chapters[chapter_id].initial_code)

  return (
    <div>
        <Instructions instructions={course.chapters[chapter_id-1].instructions} />
        <CodeEditor 
          initial_code={course.chapters[chapter_id-1].initial_code} 
          answer_code={course.chapters[chapter_id-1].answer_code}
        />
        <DiffEditor course_id={course_id} chapter_id={chapter_id}/>
        <Sidebar course_id={course_id} chapter_id={chapter_id}/>   
    </div>
  )
}

export default Chapter
