import React from 'react';

export default function Checkbox(props) {
    return (
        <label className="Checkbox" htmlFor={props.id}>
            <input
                id={props.id}
                type="checkbox"
                data-testid={`${props.id}-checkbox`}
                value={props.value}
                onChange={e => props.onChange(e.target.checked)} />
            {props.text}
        </label>
    )
}