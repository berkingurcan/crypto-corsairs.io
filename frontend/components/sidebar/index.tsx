import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css'

function Sidebar({courseTitle, course_id, chapter_id, chapters}: any) {
  chapters.map((chapter: any) => {
    console.log(chapter.title)
  })
  return (
    <div>
      {chapters.map((chapter: any) => {
        return (
          <div key={chapter}>
            <ul className={styles.menu__box}>
              <li className={styles.menu__item}>
                <Link href={`/course/${course_id}/${chapter.id}`}> 
                  Chapter {chapter.id}: {chapter.title}
                </Link>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  );
}

export default Sidebar;
