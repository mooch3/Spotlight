import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const AddButton = (props) => {
    let button = null;

    if (props.expanded) {
        button = (
        <Zoom in={props.expanded}>
        {/* TODO: Zoom deprecation warning? */}
            <Fab color="primary" aria-label="add" onClick={props.add}>
                <AddIcon fontSize="small" />
            </Fab>
        </Zoom>

            
        )
    }

    return (
        button
    )   
};

export default AddButton;