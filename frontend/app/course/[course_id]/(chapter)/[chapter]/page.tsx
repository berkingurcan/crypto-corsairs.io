export default function ChapterPage({params}: any) {
    return (
        <div>
            Course: {params.course_id}
            <br />
            Chapter: {params.chapter}
        </div>
    );
}