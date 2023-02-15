import React from "react";
import CourseLanding from "@/components/course-landing";

export default function CoursePage({params}: any) {
    return (
        <div>
            {/* @ts-expect-error Server Component */}

            <CourseLanding course_id={params.course_id}/>
        </div>
    );
}