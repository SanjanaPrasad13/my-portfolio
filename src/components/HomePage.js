import React from "react";
import resume from './resume.pdf';

export default function HomePage() {
    return(
        
        <>
        <a href={resume} download="Sanjana_Gadagoju_Resume.pdf">
          Download Resume
        </a>
        </>
    )
}