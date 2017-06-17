const React = require('react');
require('./button.css');

export default function Button (props) {
    return (
        <button onClick={props.click} value={props.children}>{props.children}</button>
    )
}
