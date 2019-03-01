import React, { Component } from 'react';
import {
	View,
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	AsyncStorage
} from 'react-native';

import { connect } from 'react-redux';
import { fetchOrders, fetchStores, fetchProfile } from '../../actions'

class AuthLoadingScreen extends Component {
	constructor() {
		super();
		this._bootstrapAsync();
	}

	// Fetch the token from storage then navigate to our appropriate place
	_bootstrapAsync = async () => {
		const userToken = await AsyncStorage.getItem('userToken');

		if (userToken) {
			await this.props.fetchOrders();
			await this.props.fetchProfile();
			await this.props.fetchStores();
			console.log("DONE FETCHING")
		}

		// This will switch to the App screen or Auth screen and this loading
		// screen will be unmounted and thrown away.
		this.props.navigation.navigate(userToken ? 'App' : 'Auth');
	};

	// Render any loading content that you like here
	render() {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
				<StatusBar barStyle="default" />
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	}
}

export default connect(
	mapStateToProps,
	{ fetchOrders, fetchProfile, fetchStores}
)(AuthLoadingScreen);

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  backgroundColor: 'black'
	},
  });