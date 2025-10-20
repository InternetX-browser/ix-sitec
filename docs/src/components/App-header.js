import './styles/App-header.css';
import { Link } from 'react-router';
import Tooltip from './Tooltip';

const mainname1 = "InternetX"
const mainname2 = "Site Creator"
const AppHeader = () => {
    return (
        <header><div className="HEAD-header">
            <p>{mainname1}</p><br/>
            <Link to="/"><p>{mainname2}</p></Link>
            <div className="configure-figures">
                <div className="new">
                <Tooltip text="Create">
                <Link to="/create"><img src="./figure/create_repo.svg"/></Link>
                </Tooltip>
                </div>
            </div>
        </div>
            </header>
    )
}

export default AppHeader;