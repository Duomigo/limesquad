import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import Navigator from './Navigator'

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers'

const store = createStore(reducers, applyMiddleware(thunk))

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Navigator />
			</Provider>
		)
	}
}

export default App;

