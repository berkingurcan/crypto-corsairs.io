'use client';
import React from 'react';
import Editor from "@monaco-editor/react";


function CodeEditor({chapter_id}: any) {
  
  return (
    <div>
      Editor of Course: {} Chapter: {chapter_id}
      <Editor
        height="90vh"
        defaultLanguage="rust"
        defaultValue="// some comment"
      />
    </div>
  );
}

export default CodeEditor;
