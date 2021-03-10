import {React, useState} from 'react';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx'

function ColorWheel() {

    const Color = ({ selected, color, onClick }) => {
        return (
            <div onClick={onClick} className={selected ? "color-dot selected " + color : "color-dot " + color}></div>
        );
    };
    const colors = ['orange', 'pink', 'purple', 'mint']

    const [selected, setSelected] = useState('orange')
    
    const [notes, setNotes] = useState([]);

    function handleClick(input){
        setNotes(prevValues => [...prevValues, input])
    }

    return (
        <div className="color-options">
        {colors.map(color => 
            <Color 
            key={color}
            color={color}
            selected={color === selected}
            onClick={() => setSelected(color)}
            />
        )}
            
            
            <CreateNote
            selected={selected}
            addNote={handleClick}
             />

         {notes.map((note, index) => (
                <Note 
                key={index}
                id={index}
                user={note.user}
                content={note.content}
                selected={selected + " note"}
                />
            ))}
        </div>
    )
}

export default ColorWheel;