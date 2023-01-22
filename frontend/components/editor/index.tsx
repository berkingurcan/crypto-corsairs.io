'use client';
import React from 'react';
import Editor from "@monaco-editor/react";


function CodeEditor({course_id, chapter_id}: any) {
  console.log(course_id, chapter_id)
  
  return (
    <div>
      Editor of Course: {course_id} Chapter: {chapter_id}
      <Editor
        height="90vh"
        defaultLanguage="rust"
        defaultValue="// some comment"
      />
    </div>
  );
}

export default CodeEditor;
