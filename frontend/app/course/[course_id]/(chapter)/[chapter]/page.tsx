import React from 'react';
import Chapter from '@/containers/chapter';

async function getData(id: any) {
  const res = await fetch(process.env.COURSES as string + `course-${id}.json`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
} 

async function ChapterPage({params}: any) {
  const course = await getData(params.course_id)
  const chapter = await Promise.all(course.chapters).then((v) => {
    return v
  })

  return (
    <div>
      <Chapter course_id={params.course_id} chapter_id={params.chapter} _course={chapter} />
    </div>
  );
}

export default ChapterPage;
