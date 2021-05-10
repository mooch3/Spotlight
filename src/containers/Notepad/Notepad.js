import React, { useState } from 'react';
import ColorWheel from '../../components/ColorWheel/ColorWheel';
import CreateNote from '../../components/CreateNote/CreateNote';
import classes from './Notepad.module.css';
import Note from '../../components/Note/Note';
import NotepadToggler from '../../components/ColorWheel/NotepadToggler/NotepadToggler';
import NoteHeaders from '../../components/NoteHeaders/NoteHeaders';
import TitleContainer from '../TitleContainer/TitleContainer';
import Backdrop from '../../components/UI/Backdrop/Backdrop';


function Notepad () {

    const colors = ['orange', 'pink', 'purple', 'mint'];  

    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState({user:"", content:"", color: "orange"});
    const [selected, setSelected] = useState('orange');
    const [showNotepad, setShowNotepad] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const [expandedHeader, setExpandedHeader] = useState(false);
    const [headerInput, setHeaderInput] = useState({title: "", subheader1: "", subheader2: ""});
    const [headers, setHeaders] = useState({})

    function handleExpand(){
        setExpanded(true)
    };

    function handleExpandHeader(){
        setExpandedHeader(true)
    };

    function handleSelect(color){
        setSelected(color);
        setInput({...input, color: color})
    };

    function handleInput(event) {
        const {name, value} = event.target;
        setInput({...input, [name]: value, color: selected})
    };

    function handleClick(input){
        setNotes(prevValues => [...prevValues, input]);
        setInput({user: "", content: "", color: selected});
    };

    function handleHeaderInput(event) {
        const {name, value} = event.target;
        setHeaderInput({...headerInput, [name]: value})
    };

    function handleHeaderClick(headerInput) {
        setHeaders(headerInput);
        setHeaderInput({title: "", subheader1: "", subheader2: ""});
    }

    function handleNotepadToggle(){
        setShowNotepad(!showNotepad);
        setExpanded(false);
        setExpandedHeader(false);
    };

    function handleDelete(id){
        setNotes(prevValues => {
            // TODO: Will need to pass in unique id to Note object when using DB
            return prevValues.filter((note, index) => {
                return index !== id
                
            });
        });
    };



    return (
            <div className={classes.Notepad}>
                <Backdrop show={showNotepad} clicked={handleNotepadToggle} />

                <NotepadToggler showNotepad={handleNotepadToggle} rotate={showNotepad} />
                <div className={showNotepad ? classes.Open : classes.Closed}>
                    <ColorWheel
                    colors={colors}
                    click={handleSelect}
                    selected={selected}
                    />

                    <CreateNote
                    selected={selected}
                    add={() => handleClick(input)}
                    handleInput={handleInput}
                    content={input.content}
                    user={input.user}
                    handleExpand={handleExpand}
                    expanded={expanded}
                    />
                    <NoteHeaders
                    handleExpand={handleExpandHeader}
                    expanded={expandedHeader}
                    subheader2={headerInput.subheader2}
                    subheader1={headerInput.subheader1}
                    title={headerInput.title}
                    handleHeaderInput={handleHeaderInput}
                    addHeaders={() => handleHeaderClick(headerInput)}
                    />
                </div>

                {/* Put notes in a div (noteSpace) */}
                {
                        notes.map((note, index) => (
                                <Note
                                key={index}
                                id={index}
                                user={note.user}
                                content={note.content}
                                selected={note.color}
                                delete={handleDelete}
                                />
                            ))
                    }
                    <TitleContainer
                    title={headers.title}
                    subheader1={headers.subheader1}
                    subheader2={headers.subheader2}
                    />
            </div>
    )
}

export default Notepad;