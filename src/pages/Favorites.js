import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function Favorites() {
    const context = useContext(FavoritesContext);

    return <section>
        <h1>Favorites</h1>
        <MeetupList data={context.favorites}/>
    </section>;

}

export default Favorites;