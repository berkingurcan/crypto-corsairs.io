import React from 'react'
import Instructions from '@/components/instructions';
import Editor from '@/components/editor';
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
  console.log(course_id, chapter_id)

  const DynamicCourse = getCourse(course_id);
  const [course] = await Promise.all([DynamicCourse])

  // Example usage of the chapter obj
  console.log(course.chapters[chapter_id].answer_code)

  return (
    <div>
        <Instructions chapter_id={chapter_id} />
        <Editor chapter_id={chapter_id}/>
        <DiffEditor chapter_id={chapter_id}/>
        <Sidebar course_id={course_id} chapter_id={chapter_id}/>   
    </div>
  )
}

export default Chapter
