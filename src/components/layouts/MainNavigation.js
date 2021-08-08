import { useContext } from 'react';
import { Link } from 'react-router-dom';

import FavoritesContext from '../../store/favorites-context';
import css from './MainNavigation.module.css';

function MainNavigation() {
    const context = useContext(FavoritesContext);

    return <header className={css.header}>
        <div className={css.logo}>React Meetups</div>
        <nav>
            <ul>
                <li><Link to='/'>All Meetups</Link></li>
                <li><Link to='/new'>New Meetup</Link></li>
                <li><Link to='/favs'>
                    Favorites{context.totalFavorites > 0 ? <span className={css.badge}>{context.totalFavorites}</span> : ""}
                   </Link></li>
            </ul>
        </nav>
    </header>;
}

export default MainNavigation;