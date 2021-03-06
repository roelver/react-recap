import MeetupItem from './MeetupItem';
import css from './MeetupList.module.css';

function MeetupList(props)  {
    return (
        <ul className={css.list}>
            { props.data.map((item) => 
               <MeetupItem key={item.id} item={item}/>
            )}
        </ul>
    );
}

export default MeetupList;