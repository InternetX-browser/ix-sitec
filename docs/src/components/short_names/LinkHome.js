import { Link } from 'react-router';

const LinkHome = ({ children }) => {
    return(
            <Link to="/">{children}</Link>
    )
}

export default LinkHome;