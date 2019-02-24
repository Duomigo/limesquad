import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	SegmentedControlIOS,
	Text,
	SafeAreaView
} from 'react-native';

import MapScreen from './MapScreen';
import ShopScreen from './ShopScreen';

class ExploreScreen extends Component {
	state = {
		selectedIndex: 0
	}

	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<SegmentedControlIOS
					style={styles.segmentedIOS}
					values={['Map View', 'List View']}
					selectedIndex={this.state.selectedIndex}
					onChange={(event) => {
						this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
					}}
				/>
				{(this.state.selectedIndex === 0) ? (
					<MapScreen />
				) : (
					<ShopScreen />
				)}
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
	segmentedIOS: {
		marginTop: 0,
		marginLeft: 70,
		marginRight: 70,
		marginBottom: 10
	},
})