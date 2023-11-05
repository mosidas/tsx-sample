import React from 'react';

const Section = (props: { text: string }) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

export default Section;
