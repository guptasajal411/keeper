import React from 'react';
import notes from '../notes'
import "./styles.css";

function Note(){
    return(
        <div>
            {notes.map((note) => <div className="note">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            </div>)}
        </div>
    );
}

export default Note;