import classes from './Note.module.css';
import { React, useRef } from 'react';
import NoteToolbar from './NoteToolbar/NoteToolbar';
import Resizer from '../../Wrappers/Resizer/Resizer';
import NoteHeader from './NoteHeader/NoteHeader';

const  Note = (props) => {
    const stickyNoteRef = useRef(null);

    const Direction = {
        TopLeft: 'topLeft',
        TopRight: 'topRight',
        BottomLeft: 'bottomLeft',
        BottomRight: 'bottomRight'
    };
    
    const handleDrag = (movementX, movementY) => {
        const stickyNote = stickyNoteRef.current;

        if (!stickyNote) return;

        const { x, y } = stickyNote.getBoundingClientRect();

        stickyNote.style.left = `${x + movementX}px`;
        stickyNote.style.top = `${y + movementY}px`;
    }

    const handleResize = (direction, movementX, movementY) => {
        const stickyNote = stickyNoteRef.current;

        if (!stickyNote) return;

        const { width, height, x, y } = stickyNote.getBoundingClientRect();

        const resizeTop = () => {
            stickyNote.style.height = `${height - movementY}px`;
            stickyNote.style.top = `${y + movementY}px`;  
        };

        const resizeRight = () => {
            stickyNote.style.width = `${width + movementX}px`;
        };

        const resizeBottom = () => {
            stickyNote.style.height = `${height + movementY}px`;
        };
        
        const resizeLeft = () => {
            stickyNote.style.width = `${width - movementX}px`;
            stickyNote.style.left = `${x + movementX}px`
        };

        switch (direction) {
            case Direction.TopLeft:
                resizeTop();
                resizeLeft();
                break;

            case Direction.TopRight:
                resizeTop();
                resizeRight();
                break;
            
            case Direction.BottomRight:
                resizeBottom();
                resizeRight();
                break;

            case Direction.BottomLeft:
                resizeBottom();
                resizeLeft();
                break;
            
            default:
                break;
        }
        console.log(parseInt(stickyNote.style.height, 10));
        if (parseInt(stickyNote.style.height, 10) < 99) {
            stickyNote.style.height = '100px';
        } else if (parseInt(stickyNote.style.height, 10) > 300) {
            stickyNote.style.height = '299px';
        }
        if (parseInt(stickyNote.style.width, 10) < 200) {
            stickyNote.style.width = '201px'
        } else if (parseInt(stickyNote.style.width, 10) > 400) {
            stickyNote.style.width = '399px'
        }
    };

    

    return (
            <div className={classes.Note  + " " + props.selected} ref={stickyNoteRef}>
                    <Resizer onResize={handleResize} />
                    <NoteToolbar delete={props.delete} id={props.id} />
                    <NoteHeader onDrag={handleDrag} user={props.user} />
                    <hr/>
                    <p className={props.selected + " noselect"}>{props.content}</p> 
            </div>
        )
}

export default Note;