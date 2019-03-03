import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation' 

class TodayItem extends Component {
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
					<Text style={styles.itemDesc}>{item.desc}</Text>

			   		<View style={styles.itemSeparator} />
					<Text style={styles.itemDetail}>{item.name}</Text>
					<View style={styles.itemSeparator} />
					<Text style={styles.itemDetail}>{item.name}</Text>
					<View style={styles.itemSeparator} />
					<Text style={styles.itemDetail}>{item.name}</Text>
					<View style={styles.itemSeparator} />
					<Text style={styles.itemDetail}>{item.name}</Text>
					
				</View>
			</TouchableOpacity>
		)
	}
}

export default withNavigation(TodayItem);

const styles = StyleSheet.create({
	container: {
		//height: 64,
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
	itemTitle: {
		fontSize: 24,
		fontFamily: 'System',
		color: '#545C76',
		fontWeight: '700'
	},
	itemDesc: {
		fontSize: 16,
		fontFamily: 'System',
		color: '#ACB1BD',
		fontWeight: '500',
		alignSelf: 'flex-end',
		position: 'absolute',
		marginTop: 16
	},
	itemDetail: {
		fontSize: 18,
		marginBottom: 7,
		marginTop: 7,
		fontFamily: 'System',
		color: '#545C76',
		fontWeight: '500',
		//alignSelf: 'flex-end'
	},
	itemSeparator: {
		height: 1,
		width: "100%",
		backgroundColor: "#E1E5E9"
	},
	titleBar: {
		width: '100%',
		paddingTop: 10,
		paddingLeft: 55
	},
})