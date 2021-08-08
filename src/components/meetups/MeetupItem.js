import { useContext } from 'react';
import Card from '../common/Card';
import css from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const context = useContext(FavoritesContext);
    const itemIsFavorite = context.itemIsFavorite(props.item.id);
 
    function toggleFavoritesStatus(evt) {
        if (itemIsFavorite) {
            context.removeFavorite(props.item.id);
        } else {
            context.addFavorite(props.item);
        }
    }

    return <li className={css.item}>
            <Card>
                <div className={css.image}>
                    <img src={props.item.image} width='400px' alt={props.item.description}/>
                </div>
                <div className={css.content}>
                    <h3>{props.item.title}</h3>
                    <address>{props.item.address}</address>
                    <p>{props.item.description}</p>
                </div>
                <div className={css.actions}>
                    <button onClick={toggleFavoritesStatus}>
                       { itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites' }
                    </button>
                </div>
            </Card>
        </li>;
}

export default MeetupItem;