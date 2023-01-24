'use client';
import React from 'react';
import Editor from "@monaco-editor/react";
import { DiffEditor } from '@monaco-editor/react';
import styles from './styles.module.css';

function CodeEditor({initial_code, answer_code}: any) {
  console.log(initial_code, answer_code)

  return (
    <div className={styles.editor}>
      <Editor
        height="75%"
        defaultLanguage="rust"
        defaultValue={initial_code}
        theme="vs-dark"
      />
      <DiffEditor 
        height="20%"
        language="rust"
        theme="vs-dark"
        modified=''
        original=''
      />
    </div>
  );
}

export default CodeEditor;
