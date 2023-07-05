import React from "react";
import CourseContainer from "@/containers/course";

export default function CourseMainPage() {
    return (
        <div>
            {/* @ts-expect-error Server Component */}
            <CourseContainer />
        </div>
    );
}