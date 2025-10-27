import './AppCreate.css';
import AppHeader from './components/App-header';
import Aside from './components/Aside';
import { useState, useEffect } from 'react';
import Content from './components/Content';
import Footer from './components/Footer';

function AppCreate() {

    const [files, setFiles] = useState();

    useEffect(() => {
        const savedFiles = JSON.parse(localStorage.getItem('app_create_content'));

        if (savedFiles?.length) {
            setFiles(savedFiles);
        } else {
            setFiles([
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
            ])
        }
    }, []);

    if (!files) {
        return null;
    }

    console.log("--- files", files);

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
                <Content file={files.find(file => file.isSelected === true)} onChange={(value) => {

                    setFiles(prev => {
                        return prev.map(file => {
                            if (file.isSelected) {
                                file.content = value
                            }
                            return file;
                        });
                    });
                }} onSave={
                    localStorage.setItem("app_create_content", JSON.stringify(files))
                }></Content>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default AppCreate;