'use client';
import React from 'react';
import Editor from "@monaco-editor/react";

function CodeEditor({initial_code, answer_code}: any) {
  console.log(initial_code, answer_code)

  return (
    <div>
      <Editor
        height="90vh"
        defaultLanguage="rust"
        defaultValue={initial_code}
        theme="vs-dark"
      />
    </div>
  );
}

export default CodeEditor;
