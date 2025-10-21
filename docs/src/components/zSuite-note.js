import React from 'react';
import './styles/zSuite-note.css';

const Note = ({ text }) => {
    return (
        <span className="note-row">
            <span className="note">NOTE: </span>
            <span className="text">{text}</span>
        </span>
    );
}

export default Note;