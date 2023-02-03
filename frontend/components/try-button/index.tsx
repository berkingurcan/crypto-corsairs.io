import React from 'react'
import styles from './styles.module.css'

function TryButton({...props}: any) {
  return (
    <div>
      <button {...props} className={styles.checkButton}>Try Again</button>
    </div>
  )
}

export default TryButton
