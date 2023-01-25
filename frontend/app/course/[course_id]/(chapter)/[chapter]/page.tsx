import React from 'react';
import Chapter from '@/containers/chapter';

function ChapterPage({params}: any) {
  return (
    <div>
      <Chapter course_id={params.course_id} chapter_id={params.chapter} />
    </div>
  );
}

export default ChapterPage;
