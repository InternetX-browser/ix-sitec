import './styles/App-header.css';
import { Link } from 'react-router';
import Tooltip from './Tooltip';
import LinkHome from './short_names/LinkHome';

const mainname1 = "InternetX"
const mainname2 = "Site Creator"
const AppHeader = () => {
    return (
        <header><div className="HEAD-header">
            <LinkHome><img src="../ix-sitec-logo.png" width="64px" height="64px"/></LinkHome>
            <p>{mainname1}</p><br/>
            <LinkHome><p>{mainname2}</p></LinkHome>
            <div className="configure-figures">
                <div className="figures">
                <Link to="/create"><img src="./figure/add-box.svg" alt="Create" width="23px" height="23px"/></Link>
                <Tooltip text="Wiki">
                    <a href="https://github.com/InternetX-browser/ix-sitec/wiki/" ><img src="./figure/wiki-book.svg" width="30px" height="30px"/></a>
                </Tooltip>
                <Tooltip text="Source Code">
                    <a href="https://github.com/InternetX-browser/ix-sitec"><img src="./figure/code.svg" width="23px" height="23px"/></a>
                </Tooltip>
                <Tooltip text="Group Messeger">
                    <img src="../figure/group-messeger.svg" width="23px" height="23px" onClick={() => alert('In development!')} className="GM-Image"/>
                </Tooltip>
                </div>
            </div>
                <div className="usr">
                    <img src="../figure/user.svg" width="64px" height="64px"/><p>ShellUser</p><p>You are not using an account.</p>
                </div>
        </div>
            </header>
    )
}

export default AppHeader;