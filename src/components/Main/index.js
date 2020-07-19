import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Search_rs from '../../containers/search_rs';
import Bookmarks from '../../containers/bookmarks';

const Main = props => (
    <Switch>
        <Route exact path ="/" component={Search_rs} />
        <Route path="/bookmarks" component={Bookmarks}/>
    </Switch>
);

export default Main;