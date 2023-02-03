import React from 'react'
import styles from './styles.module.css'

function CheckButton({...props}: any) {
  return (
    <div>
      <button {...props} className={styles.checkButton}>CHECK ANSWER</button>
    </div>
  )
}

export default CheckButton
