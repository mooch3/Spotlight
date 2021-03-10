import {React, useState} from 'react';
import CreateNote from './CreateNote.jsx'

function ColorWheel() {

    const Color = ({ selected, color, onClick }) => {
        return (
            <div onClick={onClick} className={selected ? "color-dot selected " + color : "color-dot " + color}></div>
        );
    };
    const colors = ['orange', 'pink', 'purple', 'mint']

    const [selected, setSelected] = useState()
    

    return (
        <div className="color-options">
        {colors.map(t => 
            <Color 
            key={t}
            color={t}
            selected={t === selected}
            onClick={() => setSelected(t)}
            />
        )}
            
            
            <CreateNote
            selected={selected}
             />
        </div>
    )
}

export default ColorWheel;