import { React, useRef } from 'react';
import classes from './SideDrawer.module.css';
import Workspace from '../../UI/SideDrawer/Workspace/Workspace';
import EWResizer from '../../../Wrappers/EWResizer/EWResizer';

const SideDrawer = (props) => {
    const sideDrawerRef = useRef(null);

    const Direction = {
        Left: 'left',
        Right: 'right'
    };

    const  attachedClasses = [classes.SideDrawer, classes.Open, 'noselect'];

    const handleResize = (direction, movementX) => {
    
        const sideDrawer = sideDrawerRef.current;
        if (!sideDrawer) return;

        const {width, x} = sideDrawer.getBoundingClientRect();
        
        const resizeRight = () => {
            sideDrawer.style.width = `${width + movementX}px`
        };

        const resizeLeft = () => {
            sideDrawer.style.width = `${width - movementX}px`
            sideDrawer.style.left = `${x + movementX}px`
        };

        switch (direction) {
            case Direction.Left:
                resizeLeft();
                break;

            case Direction.Right:
                resizeRight();
                break;

            default:
                break;
        }
        if (parseInt(sideDrawer.style.width, 10) < 170) {
            sideDrawer.style.width = '170px';
        }
    }

    return (
        <div className={attachedClasses.join(' ')} onClick={props.closeMenu} ref={sideDrawerRef}>
            <EWResizer onResize={handleResize} />
            <nav>
                <Workspace />
            </nav>
        </div>
    )
}

export default SideDrawer;