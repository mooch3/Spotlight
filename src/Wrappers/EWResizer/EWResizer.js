import { React, useEffect, useState } from 'react';
import classes from './EWResizer.module.css';
import Aux from '../Aux/Aux';

const EWResizer = ({ onResize }) => {
    const [direction, setDirection] = useState('');
    const [mouseDown, setMouseDown] = useState(false);

    const Direction = {
        Left: 'left',
        Right: 'right'
    };

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!direction) return;

            onResize(direction, e.movementX, e.movementY);
        };

        if (mouseDown) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseDown, direction, onResize]);

    useEffect(() => {
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, []);

    const handleMouseDown = (direction) => () => {
        console.log(direction)
        setDirection(direction);
        setMouseDown(true);
    };

    return (
    <Aux>
        <div className={classes.Right} onMouseDown={handleMouseDown(Direction.Right)}></div>
    </Aux>
    )
}

export default EWResizer;