import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

export default function SolpiratesHeading() {
  return (
    <div className={styles.landingWrapper}>
      <div className={styles.left}>
        <h1 className={styles.landingTitle}>
          Learn to Code Solana Programs with Anchor 
        </h1>
        
        <p className={styles.introduction}>
          Join our courses to learn how to build smart contracts on the Solana blockchain using the Anchor framework by building Pirate Story. Start your journey today and master the skills you need to succeed in the world of decentralized applications.
        </p>

        <div className={styles.actionButtons}>
          <Link className={styles.playButton} href='/course'>START TO COURSES</Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.shape}></div>
      </div>
      
    </div>
  );
}
