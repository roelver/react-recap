import { useHistory, UseHistory} from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetup(props) {

    const history = useHistory();

    function addMeetupHandler(meetup) {
        fetch('https://meetups-udemy-f08b3-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(meetup)
            }
        ).then(() =>{
            history.replace('/');
        });
    }

    return <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm addMeetup={addMeetupHandler}/>
        </section>;
}

export default NewMeetup;
