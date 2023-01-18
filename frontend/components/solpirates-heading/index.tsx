import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

export default function SolpiratesHeading() {
  return (
    <div className={styles.movieWrapper}>
      
      <h1 className={styles.movieTitle}>
        Learn to Code Solana Smart Contracts with Anchor by building Pirate Story
      </h1>

      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href='/course'>COURSES</Link>
      </div>
    </div>
  );
}
