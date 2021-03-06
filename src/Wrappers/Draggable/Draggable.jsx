import {React, useState} from 'react';

const Draggable = ({children}) => {
    
    
    const startingPosition = { x: 10, y: 50}

    const [dragInfo, setDragInfo] = useState({
        origin: {
            x: 0,
            y: 0
        },
        isDragging: false,
        translation: startingPosition,
        lastTranslation: startingPosition
    });

    const {isDragging} = dragInfo

    const handleMouseDown = ({clientX, clientY, screenY}) => {
        console.log(screenY)
        if (!isDragging) {
            setDragInfo({
                ...dragInfo,
                isDragging: true,
                origin: { x: clientX, y: clientY }
            });
        }
    };

    const handleMouseMove = ({clientX, clientY, screenX, screenY}) => {
        if (isDragging) {
            const {origin, lastTranslation} = dragInfo;
            
            setDragInfo({
                ...dragInfo,
                translation: {
                    x: screenX > 160 ? Math.abs(clientX - (origin.x + lastTranslation.x)) : null,
                    y: screenY > 210 ? Math.abs(clientY - (origin.y + lastTranslation.y)) : null
                }
            })
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            const {translation} = dragInfo
            setDragInfo({
                ...dragInfo,
                isDragging: false,
                lastTranslation: { x: translation.x, y: translation.y}
            });
        }
    }

    const notePosition = {
        position: 'absolute',
        right: `${dragInfo.translation.x}px`,
        bottom: `${dragInfo.translation.y}px`
    }

    const styles = {
        cursor: dragInfo.isDragging ? '-webkit-grabbing' : '-webkit-grab',
        zIndex: dragInfo.isDragging ? 2 : 1
    }

    return (
        <div style={{
            ...styles,
            ...notePosition,
            }} 
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseMove}
        onMouseUp={handleMouseUp}>
            {children}
        </div>
    )
}

export default Draggable;