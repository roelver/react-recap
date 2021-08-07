import Card from '../common/Card';
import css from './MeetupItem.module.css';

function MeetupItem(props) {

    function addToFavorites() {
        props.addFavs(props.item);
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
                    <button onClick={addToFavorites}>Add to Favorites</button>
                </div>
            </Card>
        </li>;
}

export default MeetupItem;