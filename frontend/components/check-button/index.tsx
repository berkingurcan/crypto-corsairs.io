import React from 'react'
import styles from './styles.module.css'

function CheckButton({user_answer, answer}: any) {
  return (
    <div>
      <button className={styles.checkButton}>CHECK ANSWER</button>
    </div>
  )
}

export default CheckButton
