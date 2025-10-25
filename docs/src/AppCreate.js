import './AppCreate.css';
import AppHeader from './components/App-header';
import Aside from './components/Aside';
import { useState } from 'react';
import Content from './components/Content';

function AppCreate() {

    const [files, setFiles] = useState([
        {
            id: 'file_1',
            name: "page",
            extension: "js",
            content: "<!DOCTYPE page>",
            image: "./figure/file.svg",
            isSelected: true,
        },
        {
            id: 'file_2',
            name: "page",
            extension: "html",
            content: "<!DOCTYPE html>",
            image: "./figure/file.svg",
            isSelected: false
        }
    ]);

    return (
        <div className="AppCreate">
            <AppHeader></AppHeader>
            <div className='AppCreateContent'>
                <Aside files={files} onSelectFile={(fileId) => {
                    setFiles(prev => {
                        return prev.map(file => {
                            if (file.id === fileId) {
                                file.isSelected = true;
                            } else {
                                file.isSelected = false;
                            }
                            return file;
                        })
                    });
                }}></Aside>
                <Content file={files.find(file => file.isSelected === true)}></Content>
            </div>
        </div>
    )
}

export default AppCreate;