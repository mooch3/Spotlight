import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

const notepadToggler = (props) => {
    let style = {
        marginRight: '40px',
        zIndex: '100',
        backgroundColor: 'transparent',
        transition: '.3s',
        transform: 'rotate(90deg)',
        alignSelf: 'flex-end'
    }

    if (props.rotate) {
        style = {
            marginRight: '40px',
            zIndex: '100',
            backgroundColor: 'transparent',
            transition: '.3s',
            alignSelf: 'flex-end'
        }
    }

    return (
    <div style= {style} onClick={props.showNotepad} >
        <FontAwesomeIcon style={ {backgroundColor: 'transparent'}} icon={faCaretDown} size='2x' />
    </div>
    );
};

export default notepadToggler;