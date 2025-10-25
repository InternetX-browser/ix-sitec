import './styles/Aside.css';
import { useState, useEffect } from 'react';

const forbiddenNames = ["con", "aux", "prn", "fuck", "shit"]

const Aside = ({ files, onSelectFile }) => {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const localStorageValue = localStorage.getItem('app_create_site_name');

        if (localStorageValue !== null) {
            setIsInputVisible(true);
            setIsSaved(true);
        }
    }, []);

    return (
        <aside>
            <div className="Aside">
                <div>
                    {!isInputVisible ? (
                        <div>
                            <img src="./figure/add-box.svg" width="64px" height="64px" />
                            <button type="button" onClick={() => setIsInputVisible(true)}>Name site</button>
                        </div>
                    ) : (
                        !isSaved ? (<div>
                            <input value={inputValue} onChange={(event) => setInputValue(event.target.value)}></input>
                            <button type="button" onClick={() => {
                                if (forbiddenNames.includes(inputValue)) {
                                    alert('Forbidden!');
                                } else {
                                    setIsSaved(true);
                                    localStorage.setItem('app_create_site_name', inputValue);
                                }
                            }}>Save</button>
                            <button type="button" onClick={() => {
                                setInputValue("");
                                setIsInputVisible(false);
                            }}>Cancel</button>
                        </div>) : (
                            <div className="saved">
                                <p>{localStorage.getItem('app_create_site_name')}</p>
                                <button type="button" onClick={() => {
                                    localStorage.removeItem('app_create_site_name')
                                    setIsInputVisible(false);
                                    setIsSaved(false);
                                    setInputValue("");
                                }}>Reset</button>
                            </div>
                        )
                    )}
                </div>

                <div className="files">
                    {isSaved ? files.map((file) => {
                        return (
                            <div key={file.id} onClick={()=>onSelectFile(file.id)} className="site-files" style={{fontWeight: file.isSelected ? "bold" : "normal"}}>
                                <img src={file.image} width="16px" height="16px" style={{marginRight:"10px"}}/>
                                {file.name + '.' + file.extension}
                            </div>
                        )
                    }) : (
                        <p>Enter the site name</p>
                    )}
                </div>
            </div>
        </aside>
    )
}

export default Aside;

