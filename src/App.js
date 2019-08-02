import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import m from 'materialize-css/dist/js/materialize.min.js';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SearchBar from './components/util/SearchBar';
import Post from './components/pages/Post';

const App = () => {
	const client = new ApolloClient({
		uri: 'https://api.hashnode.com'
	});
	useEffect(() => {
		// materialize javascript
		m.AutoInit();
	});
	return (
		<ApolloProvider client={client}>
			<Router>
				<SearchBar />
				<Route exact path="/" component={Home} />
				<Route exact path="/post/:cuid" component={Post} />
			</Router>
		</ApolloProvider>
	);
};

export default App;
