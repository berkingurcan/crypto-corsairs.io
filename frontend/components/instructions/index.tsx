import React from 'react'

interface Instruction {
  text: string;
  code_block: string;
}

//interface Instruction extends Array<Instruction>{}

function Instructions({instructions}: {instructions: Instruction[]}) {
  return (
    <div>
      Instructions: {instructions.map( ({text, code_block}) => {
        return (
          <div key={text}>
            <p> {text} </p>
            <br />
            <h4> {code_block} </h4></div>
        )
      })}
    </div>
  )
}

export default Instructions
