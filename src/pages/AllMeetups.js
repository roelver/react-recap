import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetups(props) {
  const [isLoading, setLoading] = useState(false);
  const [allMeetups, setAllMeetups] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://meetups-udemy-f08b3-default-rtdb.firebaseio.com/meetups.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup);
      }
      setAllMeetups(meetups);
      setLoading(false);
    });  
  }
  ,[]);

  return isLoading ? 
    <section>
      <h1>Loading...</h1>
    </section>
    :
    <section>
      <h1>All meetups</h1>
      <MeetupList data={allMeetups}/>
    </section>;
}

export default AllMeetups;