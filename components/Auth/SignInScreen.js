import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	AsyncStorage,
	TextInput,
	Button
} from 'react-native';

import axios from 'axios';

class SignInScreen extends Component {
	static navigationOptions = {
		title: 'Please sign in',
	};

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			error: ''
		};
	  }

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={(username) => this.setState({ username })}
					value={this.state.text}
				/>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={(password) => this.setState({ password })}
					value={this.state.text}
				/>
				<Button 
					title="Sign in!" 
					onPress={this._signInAsync} 
				/>
			</View>
		);
	}

	_signInAsync = async () => {
		await AsyncStorage.setItem('userToken', 'abc');
		this.props.navigation.navigate('App');
	};
}

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});