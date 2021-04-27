import { React, useEffect, useState } from 'react';
import classes from './Resizer.module.css';
import Aux from '../Aux/Aux';

const Resizer = ({ onResize }) => {
    const [direction, setDirection] = useState('');
    const [mouseDown, setMouseDown] = useState(false);

    const Direction = {
        TopLeft: 'topLeft',
        TopRight: 'topRight',
        BottomLeft: 'bottomLeft',
        BottomRight: 'bottomRight'
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
        <div className={classes.TopLeft} onMouseDown={handleMouseDown(Direction.TopLeft)}></div>
        <div className={classes.TopRight} onMouseDown={handleMouseDown(Direction.TopRight)}></div>
        <div className={classes.BottomLeft} onMouseDown={handleMouseDown(Direction.BottomLeft)}></div>
        <div className={classes.BottomRight} onMouseDown={handleMouseDown(Direction.BottomRight)}></div>
    </Aux>
    )
}

export default Resizer;