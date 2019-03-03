import React, { Component } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
	AsyncStorage
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { connect } from 'react-redux';
import { fetchOrders } from '../../actions'

import ShopperDetail from './ShopperDetail';

class ShoppersScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			 title: navigation.getParam('name', ''),
			 headerRight: (
				<TouchableOpacity
					style={{ paddingRight: 10 }}
					onPress={() => {
						navigation.navigate('Map')
					}}
				>
					<Ionicons name="ios-compass" color='#007AFF' size={28} />
				</TouchableOpacity>
			)
		}
   }

   componentDidMount() {
	   //this.props.fetchOrders();
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
		const {navigation} = this.props
		const item = navigation.getParam('item', {})

		return (
			<SafeAreaView>
				<Text style={styles.titleHeader}>
					Who can shop for you?
				</Text>
				<FlatList
					style={styles.potentialShoppersList}
					data={this.props.orders}
					renderItem={({ item }) => 
						<View>
							<ShopperDetail item={item}/>
						</View>
					}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</SafeAreaView>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		orders: state.orders
	}
}

export default connect(
	mapStateToProps,
	{ fetchOrders }
)(ShoppersScreen);

const styles = StyleSheet.create({
	titleHeader: {
		marginTop: 10,
		marginLeft: 25,
		fontSize: 22,
		fontFamily: 'System',
		fontWeight: '700',
		color: '#3c4560'
	},
	potentialShoppersList: {
		marginTop: 0
	}
})

