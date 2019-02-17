import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class OrderHistoryItem extends Component {
	render() {
		const { item } = this.props
		return (
			<View style={styles.container}>
				<Text style={styles.itemTitle}>{item.key} bought X for You</Text>
				<Text style={styles.itemPlace}>at {item.store}</Text>
			</View>
		)
	}
}

export default OrderHistoryItem;

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	itemTitle: {
		marginLeft: 10,
		fontSize: 18,
		fontWeight: '500',
		fontFamily: 'Avenir Next',
	},
	itemPlace: {
		marginLeft: 10,
		fontSize: 14,
		fontFamily: 'Avenir Next'
	}
})