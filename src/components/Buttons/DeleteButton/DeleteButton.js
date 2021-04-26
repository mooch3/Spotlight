import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteButton = (props) => (
    <DeleteIcon style={{backgroundColor: 'transparent'}} onClick={() => props.delete(props.id)} />
);

export default DeleteButton;