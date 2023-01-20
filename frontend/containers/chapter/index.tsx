import React from 'react'
import Instructions from '@/components/instructions';
import Editor from '@/components/editor';
import DiffEditor from '@/components/diff-editor';
import Sidebar from '@/components/sidebar';

function Chapter({course_id, chapter_id}: any) {
  console.log(course_id, chapter_id)
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
