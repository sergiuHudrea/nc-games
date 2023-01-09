import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <Link to='/reviews'> Reviews </Link>
            <span> | </span> Users <span> | </span> Categories
        </nav>
    )
}

