import { React, useEffect, useState } from 'react';
import classes from './NoteHeader.module.css'

const NoteHeader = ({ user, onDrag }) => {
    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.addEventListener('mouseup', handleMouseUp);
        }
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => onDrag(e.movementX, e.movementY);

        if (mouseDown) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [mouseDown, onDrag])

    const handleMouseDown = () => setMouseDown(true);

    const styles = {
        cursor: mouseDown ? '-webkit-grabbing' : '-webkit-grab',
        zIndex: mouseDown ? 2 : 1
    }

    return (
        <div className={classes.NoteHeader + " noselect"} style={styles} onMouseDown={handleMouseDown}>
            <h1>{user}</h1>
        </div>
    )
}

export default NoteHeader;