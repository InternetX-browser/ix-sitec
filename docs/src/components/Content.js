import { React } from 'react';
import './styles/Content.css'

const Content = ({file}) => {
    return (
        <div className="Content">
            {file.content}
        </div>
    )
}

export default Content;