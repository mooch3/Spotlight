import React, { useState } from 'react';
import ColorWheel from '../../components/ColorWheel/ColorWheel';
import CreateNote from '../../components/CreateNote/CreateNote';
import classes from './Notepad.module.css';
import Note from '../../components/Note/Note';
import Draggable from '../../Wrappers/Draggable/Draggable';

function Notepad () {

    const colors = ['orange', 'pink', 'purple', 'mint'];  

    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState({user:"", content:"", color: "orange"});
    const [selected, setSelected] = useState('orange');

    function handleSelect(color){
        setSelected(color);
        setInput({...input, color: color})
    }
    function handleInput(event) {
        const {name, value} = event.target;
        setInput({...input, [name]: value, color: selected})
    }
    function handleClick(input){
        setNotes(prevValues => [...prevValues, input]);
        setInput({user: "", content: "", color: selected});
    }


    return (
        <div className={classes.Notepad}>
            <ColorWheel
                colors={colors}
                click={handleSelect}
                selected={selected}
            />

            <CreateNote
            selected={selected}
            addNote={() => handleClick(input)}
            handleInput={handleInput}
            content={input.content}
            user={input.user}
             />
            {
                notes.map((note, index) => (
                    <Draggable key={index} >
                        <Note
                        user={note.user}
                        content={note.content}
                        selected={note.color}
                        />
                    </Draggable>

                    ))
            }
             
        </div>
    )
}

export default Notepad;