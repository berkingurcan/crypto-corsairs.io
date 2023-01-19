import React, { ReactNode } from 'react';
import Link from 'next/link';

import styles from './styles.module.css';

function CoursesSection({courses}: any) {
  return (
    <div className={styles.moviesSection}>
        <h3 className={styles.title}>CURRICULUM</h3>
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
