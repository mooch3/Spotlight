import React from 'react';
import Headers from '../../components/Headers/Headers';

const TitleContainer = (props) => {
    return (
    <div className="noselect">
        <Headers
        title={props.title}
        subheader1={props.subheader1}
        subheader2={props.subheader2}
        />
    </div>
    )
}

export default TitleContainer