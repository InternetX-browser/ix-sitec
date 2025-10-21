import './Tests.css'
import Note from './components/zSuite-note';
import React, { useState } from 'react';

function Tests() {
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event) => {
        setIsChecked(event.target.checked);
      };

    return (
        <div className="Tests">
            <h1>Developer confirmation</h1>
            <p>You need to confirm if you are a developer (This is a secret page.)</p>
            <label>
                <input type="checkbox"/>
                Yes.
            </label>
            <h1>NOTE Preview</h1>
            <Note text="This code uses .SLASH"></Note>
        </div>
    )
}

export default Tests;