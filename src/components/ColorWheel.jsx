import {React, useState} from 'react';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx'

function ColorWheel() {

    const Color = ({ selected, color, onClick}) => {
        return (
            <div onClick={onClick} className={selected ? "color-dot selected " + color : "color-dot " + color}></div>
        );
    };
    const colors = ['orange', 'pink', 'purple', 'mint']

    const [selected, setSelected] = useState('orange');
    
    const [notes, setNotes] = useState([]);

    const [input, setInput] = useState({user:"", content:"", color: selected});

    function handleInput(event) {
        const {name, value} = event.target;
        setInput({...input, [name]: value, color: selected})
    }

    function handleSelect(color){
        setSelected(color);
        setInput({user: input.user, content: input.content, color: color});
    }


    function handleClick(input){
        setNotes(prevValues => [...prevValues, input]);
        setInput({user: "", content: "", color: selected});
    }
 


    return (
        <div className="color-options">
        {colors.map(color => 
            <Color 
            key={color}
            color={color}
            selected={color === selected}
            onClick={() => {
                handleSelect(color)
                }}
            />
        )}
            
            
            <CreateNote
            selected={selected}
            addNote={() => handleClick(input)}
            handleInput={handleInput}
            content={input.content}
            user={input.user}
             />

         {notes.map((note, index) => (
                <Note 
                key={index}
                id={index}
                user={note.user}
                content={note.content}
                selected={note.color + " note"}
                />
            ))}
        </div>
    )
}

export default ColorWheel;