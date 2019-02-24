import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

class PotentialShopper extends Component {
	render() {
		const { item } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.titleBar}>
					<Image
						source={{uri: "https://cdn.vox-cdn.com/thumbor/F1amWkSpCu_1dFRdKkIX2oXDIB8=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/14253063/Screen_Shot_2019_02_22_at_3.13.37_PM.png"}}
						style={styles.shopperImage}
					/>
					<Text style={styles.shopperName}>{item.key}</Text>
					<Text style={styles.shopperDesc}>Sunday mornings</Text>
				</View>
			</View>
		)
	}
}

export default PotentialShopper;

const styles = StyleSheet.create({
	container: {
		padding: 10
	},
	titleBar: {
		width: '100%',
		paddingLeft: 53,
	},
	shopperName: {
		marginLeft: 15,
		paddingTop: 2,
		fontSize: 18,
		fontWeight: '600',
		fontFamily: 'Avenir Next',
		color: '#3c4560',
	},
	shopperDesc: {
		marginTop: -3,
		marginLeft: 15,
		fontSize: 14,
		fontFamily: 'Avenir Next',
		fontWeight: '500',
		color: '#b8bece',
	},
	shopperImage: {
		position: 'absolute',
		height: 44,
		width: 44,
		borderRadius: 22,
		marginTop: 3,
		marginLeft: 15
	}
})