import { Link } from 'react-router';

const LinkCreate = ({ children }) => {
    return(
    <Link to="/create">{children}</Link>
    )
}

export default LinkCreate;