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
		height: 64,
	},
	itemTitle: {
		fontSize: 18,
		fontFamily: 'System',
		color: '#545C76',
		fontWeight: '700'
	},
	itemPlace: {
		fontSize: 16,
		fontFamily: 'System',
		color: '#ACB1BD',
		fontWeight: '500',
	},
	itemImage: {
		width: 40,
		height: 40,
		backgroundColor: '#b8bece',
		borderRadius: 3,
		position: 'absolute',
		top: 12,
		left: 0
	},
	titleBar: {
		width: '100%',
		paddingTop: 10,
		paddingLeft: 55
	},
})