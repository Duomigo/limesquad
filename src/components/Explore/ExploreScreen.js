import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	SafeAreaView
} from 'react-native';

import { connect } from 'react-redux';
import { fetchStores } from '../../actions'

import StoreDetail from './StoreDetail';

class ExploreScreen extends Component {

	static navigationOptions = {
		header: null
	}

	componentDidMount() {
		//this.props.fetchStores()
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
					data={this.props.groceries}
					renderItem={({ item }) => <StoreDetail item={item} />}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</SafeAreaView>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		groceries: state.groceries
	}
}

export default connect(
	mapStateToProps,
	{ fetchStores }
)(ExploreScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	text: {
		fontFamily: "System",
		fontSize: 20
	},
	item: {
		padding: 10,
		height: 44,
		marginLeft: 30,
		fontSize: 18,
		fontFamily: 'System',
	},
	titleHeader: {
		marginLeft: 25,
		fontSize: 22,
		marginBottom: 5,
		fontFamily: 'System',
		fontWeight: '700',
		color: '#3c4560'
	}
})