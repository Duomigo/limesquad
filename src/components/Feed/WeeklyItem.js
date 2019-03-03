import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation' 

class WeeklyItem extends Component {
	render() {
		const { item } = this.props;

		return (
			<TouchableOpacity 
				style={styles.container}
				onPress={() => {
					this.props.navigation.navigate('Shopper', {
						name: item.name,
						address: item.address,
						image: item.image,
						item: item
					})
			   }}
			>
				<View style={styles.titleBar}>
					<Image style={styles.itemImage} source={{uri: 'http://s3.amazonaws.com/general-assets/monday-200x200.png'}} />
					<Text style={styles.itemTitle}>{item.name}</Text>
					<Text style={styles.itemPlace}>{item.desc}</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default withNavigation(WeeklyItem);

const styles = StyleSheet.create({
	container: {
		padding: 15,
		paddingBottom: 10
	},
	itemTitle: {
		fontSize: 16,
		fontFamily: 'Avenir Next',
		color: '#3c4560',
		fontWeight: '700'
	},
	itemPlace: {
		fontSize: 14,
		fontFamily: 'Avenir Next',
		color: '#b8bece',
		fontWeight: '500',
		marginTop: -2.5
	},
	itemImage: {
		width: 40,
		height: 40,
		backgroundColor: '#b8bece',
		borderRadius: 3,
		marginLeft: 5,
		position: 'absolute',
		top: 0,
		left: 0
	},
	titleBar: {
		width: '100%',
		paddingLeft: 60
	},
})