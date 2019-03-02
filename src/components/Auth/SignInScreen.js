import React, { Component } from 'react';
import {
	View,
	SafeAreaView,
	Text,
	StyleSheet,
	AsyncStorage,
	TextInput,
	TouchableOpacity,
	Image
} from 'react-native';

import { connect } from 'react-redux';
import {
	fetchOrders,
	fetchProfile,
	fetchStores
} from '../../actions'

import axios from 'axios';

class SignInScreen extends Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			error: ''
		};
	}

	_signInAsync = async () => {
		const loginData = {
			username: this.state.username,
			password: this.state.password
		}
		try {
			const response = await axios.post('http://localhost:3000/auth/signin', loginData);
			const token = await response.data.token
			
			await AsyncStorage.setItem('userToken', token);
			this.props.navigation.navigate('App');
			
			await this.fetchAllData();
		} catch (err) {
			const error = await JSON.stringify(err)
			console.log(error)
		}
	};

	fetchAllData = async () => {
		this.props.fetchOrders();
		this.props.fetchProfile();
		this.props.fetchStores();
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.headerText}>
					Welcome back!
				</Text>
				<Image 
					source={require('../../../assets/logo.png')}
					style={styles.logo}
				/>
				<Text style={styles.text}>
					Username
				</Text>
				<TextInput
					placeholder="Username"
					autoCapitalize="none"
					secureTextEntry={false}
					style={styles.textInput}
					onChangeText={(username) => this.setState({ username })}
					value={this.state.text}
				/>
				<Text style={styles.text}>
					Password
				</Text>
				<TextInput
					placeholder="Password"
					secureTextEntry={true}
					style={styles.textInput}
					placeholderStyle={styles.text}
					onChangeText={(password) => this.setState({ password })}
					value={this.state.text}
				/>
				<TouchableOpacity
					style={styles.signInButton}
					onPress={this._signInAsync}
				>
					<Text style={styles.signInButtonText}>
						Sign In
					</Text>
				</TouchableOpacity>

				<View style={styles.signUp}>
					<Text style={styles.signUpText}>Don't have an account? </Text>
					<TouchableOpacity
						onPress={() => navigate('SignIn')}
					>
						<Text style={styles.signUpButtonText}>Sign Up</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		
	}
}

export default connect(
	mapStateToProps,
	{ fetchOrders, fetchProfile, fetchStores }
)(SignInScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	logo: {
		height: 80,
		width: 80,
		marginLeft: 30,
		marginTop: 10,
		marginBottom: 10
	},
	headerText: {
		marginTop: 20,
		marginLeft: 30,
		fontFamily: 'Avenir Next',
		fontWeight: 'bold',
		fontSize: 26,
		color: '#3c4560'
	},
	textInput: {
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 10,
		height: 50,
		borderColor: '#b8bece',
		borderWidth: 2,
		borderRadius: 5,
		fontFamily: 'Avenir Next',
		fontWeight: '500',
		fontSize: 18,
		paddingLeft: 10
	},
	text: {
		marginLeft: 30,
		marginRight: 30,
		marginBottom: 2,
		fontFamily: 'Avenir Next',
		fontSize: 18,
		fontWeight: '600',
		color: "#3c4560"
	},
	signInButton: {
		marginLeft: 30,
		marginRight: 30,
		marginTop: 10,
		backgroundColor: "rgb(255,45,85)",
		borderRadius: 5,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	signInButtonText: {
		fontFamily: 'Avenir Next',
		fontWeight: '500',
		fontSize: 18,
		fontWeight: '600',
		color: 'white'
	},
	signUp: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		bottom: 0,
		marginTop: 10,
		justifyContent: 'center'
	},
	signUpText: {
		fontFamily: 'Avenir Next',
		fontSize: 16,
		fontWeight: '600',
		color: '#3c4560'
	},
	signUpButtonText: {
		color: 'rgb(255,45,85)',
		fontFamily: 'Avenir Next',
		fontSize: 16,
		fontWeight: '600'
	}
});