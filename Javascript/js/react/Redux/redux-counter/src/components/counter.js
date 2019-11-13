import React from 'react';
import "./counter.css";
export default function counter(props) {
    return (
        <div className='Counter' onClick={props.clicked}>
            {props.label}
        </div>
    )
}
