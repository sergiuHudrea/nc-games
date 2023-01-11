import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <Link to='/'> Reviews </Link>
            <span> | </span> 
            <Link to='/categories'> Categories </Link> 
            <span> | </span>
            Users
        </nav>
    )
}

