import React from 'react'
import styles from './styles.module.css'

function ShowButton({...props}: any) {
  return (
    <div>
      <button {...props} className={styles.checkButton}>Show Answer</button>
    </div>
  )
}

export default ShowButton
