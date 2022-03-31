import React from "react";
import PropTypes from 'prop-types';
import './button.scss'

export default function Button (props) {
     const {content, mirrored, ...attributes} = props;
    return (
        <button
            className={mirrored ? "mirror" : null}
            {...attributes}
        >
            {content}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    content: PropTypes.string,
}