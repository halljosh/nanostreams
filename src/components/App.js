import React from 'react';
import { Router, Route } from 'react-router-dom'; // React Router boilerplate
import StreamCreate from './StreamCreate';
import StreamDelete from './StreamDelete';
import StreamDisplay from './StreamDisplay';
import StreamEdit from './StreamEdit';
import StreamList from './StreamList';
import Header from './Header';
import Home from './Home';
import FAQ from './FAQ';
import history from '../history';

const App = () => {
    return (
        <div>
        	<Router history={history}>
        		<div>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/list" exact component={StreamList} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/delete/:id" exact component={StreamDelete} />
					<Route path="/streams/display/:id" exact component={StreamDisplay} />
					<Route path="/streams/edit/:id" exact component={StreamEdit} />
					<Route path="/faq" exact component={FAQ} />
				</div>
			</Router>
		</div>
    );
};

export default App;