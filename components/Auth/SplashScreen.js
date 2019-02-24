import React, { Component } from 'react';
import {
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import { withNavigation } from 'react-navigation';

class SplashScreen extends Component {

	render() {

		const { navigate } = this.props.navigation;

		return (
			<SafeAreaView style={styles.safeAreaContainer}>
				<View style={styles.getStarted}>
					<Text style={styles.headerText}>Welcome to Limesquad.</Text>
					<Text style={styles.headerText}>Don't be a starving student.</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigate('SignUpScreen')}
					>
						<Text style={styles.buttonText}>Get Started</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.signIn}>
					<Text style={styles.signInText}>Already have an account? </Text>
					<TouchableOpacity
						onPress={() => navigate('SignIn')}
					>
						<Text style={styles.signInButtonText}>Log In</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		);
	}
}

export default SplashScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		backgroundColor: '#fff',
	},
	safeAreaContainer: {
		flex: 1,
		margin: 30
	},
	getStarted: {
		flex: 7,
		justifyContent: 'center'
	},
	headerText: {
		fontSize: 25,
		fontFamily: 'Avenir Next',
		fontWeight: '700'
	},
	button: {
		backgroundColor: 'rgb(255,45,85)',
		height: 50,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 15
	},
	buttonText: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'Avenir Next',
		fontWeight: 'bold'
	},
	signIn: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		bottom: 0,
	},
	signInText: {
		fontFamily: 'Avenir Next',
		fontSize: 18,
		fontWeight: '500'
	},
	signInButtonText: {
		color: 'rgb(255,45,85)',
		fontFamily: 'Avenir Next',
		fontSize: 18,
		fontWeight: '500'
	}
})