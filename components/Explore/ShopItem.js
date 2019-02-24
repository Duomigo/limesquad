import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation' 

class ShopItem extends Component {
	render() {
		const { item } = this.props;

		return (
			<TouchableOpacity 
				style={styles.container}
				onPress={() => {
					this.props.navigation.navigate('Detail', {
						name: item.name,
						address: item.address,
						image: item.image
					})
			   }}
			>
				<View style={styles.titleBar}>
					<Image style={styles.itemImage} source={{uri: item.image}} />
					<Text style={styles.itemTitle}>{item.name}</Text>
					<Text style={styles.itemPlace}>{item.address}</Text>
					<Text style={styles.itemPlace}>3 people can shop for you</Text>
				</View>
			</TouchableOpacity>
		)
	}
}

export default withNavigation(ShopItem);

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
		backgroundColor: 'black',
		borderRadius: 3,
		marginLeft: 10,
		position: 'absolute',
		top: 0,
		left: 0
	},
	titleBar: {
		width: '100%',
		paddingLeft: 70,
	},
})