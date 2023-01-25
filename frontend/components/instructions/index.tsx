'use client';
import React from 'react'
import styles from './styles.module.css'
import { CopyBlock, vs2015 } from "react-code-blocks";


interface Instruction {
  text: string;
  code_block: string;
}


function Instructions({instructions, chapter_title}: {instructions: Instruction[], chapter_title: any}) {
  return (
    <div className={styles.insContainer}>
      <h3>{chapter_title}</h3>

      {instructions.map( ({text, code_block}) => {
        return (
          <div key={text}>
            <br />
            <p> {text} </p>
            <br />
            {code_block == null ? <br /> : 
              <CopyBlock
                text={code_block}
                language='rust'
                showLineNumbers={false}
                theme={vs2015}
              />
            }
            
          </div>
        )
      })}
    </div>
  )
}

export default Instructions
