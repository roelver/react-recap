import { Route } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import MainNavigation from './components/layouts/MainNavigation';

function App() {
  return <div>
    <MainNavigation/>
    <Route path='/new' component={NewMeetup}></Route>
    <Route path='/favs' component={Favorites}></Route>
    <Route path='/' component={AllMeetups} exact ></Route>
    </div>;
}

export default App;
