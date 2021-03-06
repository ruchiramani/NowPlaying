import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import MovieIndex from './components/movie_index';
import MovieShow from './components/movie_show';



export default (
<Route path="/" component={App} >
    <IndexRoute component={MovieIndex} />
     <Route path="movies/:id" component={MovieShow} />
</Route>


);
