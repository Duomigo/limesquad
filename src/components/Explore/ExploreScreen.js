import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	FlatList,
	Text,
	SafeAreaView
} from 'react-native';

import { connect } from 'react-redux';

import StoreDetail from './StoreDetail';

class ExploreScreen extends Component {

	static navigationOptions = {
		header: null
	}

	componentDidMount() {
		console.log(this.props.stores)
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
					data={this.props.stores}
					renderItem={({ item }) => <StoreDetail item={item} />}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</SafeAreaView>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		stores: state.stores
	}
}

export default connect(
	mapStateToProps
)(ExploreScreen);

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