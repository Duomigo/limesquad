import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

import { Calendar } from 'react-native-calendars'

class Schedule extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Calendar
					markedDates={{
						'2019-05-16': { selected: true, marked: true, selectedColor: 'blue' },
						'2019-05-17': { marked: true },
						'2018-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
						'2019-05-19': { disabled: true, disableTouchEvent: true }
					}}
				/>
			</View>
		)
	}
}

export default Schedule;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10
	},
	text: {
		fontSize: 20,
		fontFamily: 'System'
	}
})