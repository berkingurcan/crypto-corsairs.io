import Link from 'next/link';
import React from 'react';

function Sidebar({course_id, chapter_id}: any) {
  const nextChapter = chapter_id*1 + 1;
  const previousChapter = chapter_id*1 - 1;
  return (
    <div>
      Sidebar of course {course_id}

      {/* // Example USAGE OF NEXT - PREVIOUS BUTTONS TODO: make button components */}
      <Link href={`/course/${course_id}/${nextChapter}`}>NEXT CHAPTER</Link>
      <Link href={`/course/${course_id}/${previousChapter}`}>PREVIOUS CHAPTER</Link>
    </div>
  );
}

export default Sidebar;
