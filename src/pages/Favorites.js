import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function Favorites() {
    const context = useContext(FavoritesContext);

    return <section>
        <h1>Favorites</h1>
        <MeetupList data={context.favorites}/>
        {context.totalFavorites === 0 ? <h3>There are no favorites</h3> : ""}
    </section>;

}

export default Favorites;