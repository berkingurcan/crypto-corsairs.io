import React, { ReactNode } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

function CoursesSection({courses}: any) {
  return (
    <div className={styles.moviesSection}>
        <h3 className={styles.title}>CURRICULUM</h3>
        <h2 className={styles.preTitle}>Prerequisites:</h2>
        <ul className={styles.preList}>
            <li>Web3 Fundamentals</li>
            <li>Rust Fundamentals: <a href='https://doc.rust-lang.org/book/'>The Book</a></li>
            <li>Solana Core Concepts: <a href='https://solanacookbook.com/core-concepts/accounts.html#facts'>Cookbook</a></li>
            <li>Solana Fundamentals: <a href='https://www.soldev.app/course'>MODULE 1 and MODULE 2 also MODULE 3(OPTIONAL)</a></li>
        </ul>
        <div className={styles.movies}>
            {courses.map((course: {
                description: ReactNode;
                title: ReactNode; id: React.Key | null | undefined; 
            }) => (
                <div className={styles.movie} key={course.id}>
                    <Link href={`/course/${course.id}`}>
                        <h4 className={styles.courseTitle}>{course.title}</h4>
                        <p className={styles.courseDescription}>{course.description}</p>
                        <div className={styles.actionButtons}>
                            <Link className={styles.playButton} href={`/course/${course.id}`}> START COURSE</Link>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  );
}

export default CoursesSection;
