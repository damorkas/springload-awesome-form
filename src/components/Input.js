import React from 'react';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig} />;
            break;
        case ('checkbox'):
            inputElement = (
                props.elementConfig.options.map(checkbox => 
                    <span className="checkbox" key={checkbox.value}>
                        <input 
                            type='checkbox'
                            value={checkbox.value}
                            onChange={props.changed} />
                        <label htmlFor={checkbox.value}>
                            {checkbox.displayValue}
                        </label>
                    </span>
                )
            );
            break;
        case ('select'):
            inputElement = (
                <select
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                value={props.value}
                onChange={props.changed}
                {...props.elementConfig} />;
            break;
    }

    return (
        <p className={props.isValid ? '' : 'error'}>
            <label className="label">{props.label}</label>
            {inputElement}
        </p>
    );
};

export default input;
