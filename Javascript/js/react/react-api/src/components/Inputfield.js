import React from 'react'

export default function inputfield(props) {
    return (
        <div>
            <input type="text" onChange={props.change}></input>
            <button onClick={props.click}>search</button>

        </div>
    )
}
