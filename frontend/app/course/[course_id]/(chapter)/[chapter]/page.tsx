import React from 'react';
import Chapter from '@/containers/chapter';
import Congrats from '@/containers/congrats';

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

  const courseLength = course.chapters.length;
  const ourId = params.chapter

  return (
    <>
    {
      ourId <= courseLength ? 
      <div>
        <Chapter course_id={params.course_id} chapter_id={params.chapter} _course={chapter} />
      </div> : <Congrats course_id={params.course_id} />
    }
    </>
  );
}

export default ChapterPage;
