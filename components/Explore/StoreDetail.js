import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation' 

class StoreDetail extends Component {
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
					<Image style={styles.itemImage} source={item.image} />
					<Text style={styles.itemTitle}>{item.name}</Text>
					<Text style={styles.itemPlace}>{item.address}</Text>
					<Text style={styles.itemPlace}>3 people can shop for you</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default withNavigation(StoreDetail);

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	itemPlace: {
		fontSize: 14,
		fontFamily: 'Avenir Next',
		color: '#b8bece',
		fontWeight: '500',
	},
	itemTitle: {
		fontSize: 16,
		fontFamily: 'Avenir Next',
		color: '#3c4560',
		fontWeight: '700',
		marginTop: -3
	},
	itemImage: {
		width: 50,
		height: 50,
		backgroundColor: '#b8bece',
		borderRadius: 3,
		marginLeft: 15,
		position: 'absolute',
		top: 0,
		left: 0
	},
	titleBar: {
		width: '100%',
		paddingLeft: 75,
		marginTop: 5
	},
})