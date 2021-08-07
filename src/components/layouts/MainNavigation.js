import { Link } from 'react-router-dom';

import css from './MainNavigation.module.css';

function MainNavigation() {
    return <header className={css.header}>
        <div className={css.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/new'>New Meetup</Link></li>
                <li><Link to='/favs'>Favorites</Link></li>
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;