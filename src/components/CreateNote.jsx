import {React, useState} from 'react';

function CreateNote(props){

    const [input, setInput] = useState({user:"", content:""});
    const [expanded, setExpanded] = useState(false);

    function handleInput(event) {
        const {name, value} = event.target;
        setInput({...input, [name]: value})
    }

    function handleClick(){
        setExpanded(true)
    }

    
    return (
        <div>
            <form>
                <input 
                onChange={handleInput} 
                autoComplete="off" 
                name="user"
                placeholder="Your name..."
                value={input.user}
                className={props.selected}
                />
                <textarea 
                onClick={handleClick}
                onChange={handleInput} 
                autoComplete="off" 
                name="content" 
                placeholder="Add a note..." 
                rows={expanded ? "6" : "1"} 
                value={input.content}
                className={props.selected} 
                />
                <button type="button" onClick={() => 
                {props.addNote(input);
                setInput({user: "", content: ""});
                }}>
                    Create Note
                </button>
            </form>
        </div>
    )
}

export default CreateNote;