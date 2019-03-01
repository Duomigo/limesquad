import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	SafeAreaView
} from 'react-native';

import StoreDetail from './StoreDetail';

const supermarkets = [
	{
		name: "Tom Thumb",
		address: '1380 W Campbell Rd, Richardson, TX 75080',
		image: require('../../../assets/shops/thumb.jpg')
	},
	{
		name: "Walmart",
		address: '15757 N Coit Rd, Dallas, TX 75248',
		image: require('../../../assets/shops/wm.png')
	},
	{
		name: "Target",
		address: '16731 Coit Rd, Dallas, TX 75248',
		image: require('../../../assets/shops/target.jpg')
	},
	{
		name: "Sprouts",
		address: '1343 W Campbell Rd, Richardson, TX 75080',
		image: require('../../../assets/shops/sprouts.gif')
	},
	{
		name: "HMart",
		address: '3320 K Ave, Plano, TX 75074',
		image: require('../../../assets/shops/hmart.jpg')
	},
	{
		name: "Saigon Mall",
		address: '3320 K Ave, Plano, TX 75074',
		image: require('../../../assets/shops/saigon.jpg')
	},
	{
		name: "Costco Wholesale",
		address: '3800 N Central Expy, Plano, TX 75074',
		image: require('../../../assets/shops/costco.jpg')
	},
	{
		name: "Whole Foods",
		address: '1411 E Renner Rd, Richardson, TX 75082',
		image: require('../../../assets/shops/wf.jpg')
	}
]

class ExploreScreen extends Component {

	static navigationOptions = {
		header: null
	}

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#CED0CE",
					marginLeft: 25,
				}}
			/>
		);
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Text style={styles.titleHeader}>Grocery Stores Near You</Text>
				<FlatList
					data={supermarkets}
					renderItem={({ item }) => <StoreDetail item={item} />}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</SafeAreaView>
		)
	}
}

export default ExploreScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		fontFamily: "Avenir Next",
		fontSize: 20
	},
	item: {
		padding: 10,
		height: 44,
		marginLeft: 30,
		fontSize: 18,
		fontFamily: 'Avenir Next',
	},
	titleHeader: {
		marginLeft: 25,
		fontSize: 22,
		marginBottom: 5,
		fontFamily: 'Avenir Next',
		fontWeight: '700',
		color: '#3c4560'
	}
})