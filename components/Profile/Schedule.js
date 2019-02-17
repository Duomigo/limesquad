import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class Schedule extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={styles.text}>
					Schedule.js
				</Text>
			</View>
		)
	}
}

export default Schedule;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	text: {
		fontSize: 20,
		fontFamily: 'Avenir Next'
	}
})