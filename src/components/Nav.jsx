import { Link } from 'react-router-dom';

export const Nav = () => {

    return (<section>
        <br/>
        <nav><strong>
            <Link to='/' className='Nav'> Reviews </Link>
            <span>  |  </span> 
            <Link to='/categories' className='Nav'> Categories </Link> 
            <span>  |  </span>
            <Link to='/users' className='Nav'> Users </Link>
            </strong>
        </nav>
        </section>
    )
}

