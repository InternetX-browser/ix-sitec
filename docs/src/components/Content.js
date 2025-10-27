import { React } from 'react';
import './styles/Content.css';

const Content = ({ file, onChange, onSave }) => {
    return (
        <div className="Content">
            <textarea value={file.content} className="add-content" onChange={(event) => { onChange(event.target.value) }}></textarea>
            <button type="button" className="save-file" onClick={onSave}>Save</button>
        </div>
    )
}

export default Content;