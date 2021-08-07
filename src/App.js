import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layouts/Layout';

const DUMMY_FAVORITES = [];

function App() {

  function addToFavorites(meetup) {
    DUMMY_FAVORITES.push(meetup);
  }

  return <Layout>
    <Switch>
        <Route path='/new' component={NewMeetup}></Route>
        <Route path='/favs' component={Favorites}></Route>
       <Route path='/' component={AllMeetups} addFavs={addToFavorites} exact ></Route>
       </Switch>
      </Layout>;
}

export default App;
