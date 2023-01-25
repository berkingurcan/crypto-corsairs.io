'use client';
import React, {useEffect} from 'react';
import Editor from "@monaco-editor/react";
import { DiffEditor, useMonaco } from '@monaco-editor/react';
import styles from './styles.module.css';
import 'monaco-themes/themes/Blackboard.json';

function CodeEditor({initial_code, answer_code}: any) {
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      console.log("here is the monaco isntance:", monaco);
      import('monaco-themes/themes/Blackboard.json')
        .then(data => {
          monaco.editor.defineTheme('dracula', data);
        })
        .then(_ => monaco.editor.setTheme('dracula'))
      // monaco.editor.defineTheme("monokai-bright").then(_ => monaco.editor.setMonacoTheme("monokai-bright"));
    }
  }, [monaco]);

  return (
    <div className={styles.editor}>
      <Editor
        height="75%"
        defaultLanguage="rust"
        defaultValue={initial_code}
        theme=""
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
