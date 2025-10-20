import './styles/App-header.css';
import { Link } from 'react-router';
import Tooltip from './Tooltip';
import LinkHome from './short_names/LinkHome'

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
                <Link to="/create"><img src="./figure/create_repo.svg" alt="Create"/></Link>
                <Tooltip text="Wiki">
                    <a href="https://github.com/InternetX-browser/ix-sitec/wiki/" ><img src="./figure/wiki.svg"/></a>
                </Tooltip>
                <Tooltip text="Source Code">
                    <a href="https://github.com/InternetX-browser/ix-sitec"><img src="./figure/source-code.svg"/></a>
                </Tooltip>
                </div>
            </div>
        </div>
            </header>
    )
}

export default AppHeader;