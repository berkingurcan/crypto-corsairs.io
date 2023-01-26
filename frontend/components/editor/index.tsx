'use client';
import React, {useEffect, useState} from 'react';
import Editor from "@monaco-editor/react";
import { DiffEditor, useMonaco, Monaco } from '@monaco-editor/react';
import styles from './styles.module.css';
import 'monaco-themes/themes/Blackboard.json';



function CodeEditor({initial_code, answer_code}: any) {
  const monaco = useMonaco();
  const [userAnswer, setUserAnswer] = useState(initial_code);

  console.log(userAnswer)

  const setMonacoTheme = async () => {
    if (monaco) {
      const data = await import('monaco-themes/themes/Blackboard.json');
      monaco.editor.defineTheme('Blackboard', data);
      monaco.editor.setTheme('Blackboard');
    }
  }
  
  useEffect(() => {
    setMonacoTheme();
  }, [monaco]);

  const options: Monaco.IStandaloneEditorConstructionOptions = {
    readOnly: false,
    minimap: { enabled: false },
    enableSplitViewResizing: false,
	  renderSideBySide: false
};

  return (
    <div className={styles.editor}>
      <Editor
        height='80%'
        width = '100%'
        defaultLanguage="rust"
        defaultValue={initial_code}
        options = {options}
        theme=""
        onChange={(e) => setUserAnswer(e)}
        onMount = {setMonacoTheme}
      />
      <DiffEditor 
        height="20%"
        language="rust"
        theme="vs-dark"
        modified=''
        original=''
        options = {options}
      />
    </div>
  );
}

export default CodeEditor;
