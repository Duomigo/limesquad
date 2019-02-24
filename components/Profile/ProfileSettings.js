import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	AsyncStorage
} from 'react-native';

class ProfileSettings extends Component {
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('SignIn');
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					style={{ paddingRight: 10 }}
					onPress={this._signOutAsync}
				>
					<Text style={styles.text}>
						GoodGame.js
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default ProfileSettings;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontFamily: 'Avenir Next',
		fontSize: 20,
	}
})