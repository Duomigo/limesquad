import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Text,
	FlatList,
	StyleSheet
} from 'react-native';

import TodayItem from './TodayItem'

class TodayList extends Component {

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#E1E5E9"
				}}
			/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
					<FlatList
						style={styles.flatList}
						data={[
							{ name: 'Breakfast', desc: '7:30AM' },
							{ name: 'Lunch', desc: '12:00AM' },
							{ name: 'Dinner', desc: '7:45PM' }
						]}
						renderItem={({ item }) => <TodayItem item={item} />}
						ItemSeparatorComponent={this.renderSeparator}
						scrollEnabled={false}
					/>
			</View>
		)
	}
}

export default TodayList;

const styles = StyleSheet.create({
	container: {

	},
	flatList: {
		marginLeft: 25,
		marginRight: 25,
		backgroundColor: '#FFFFFF',
		//borderWidth: 1,
		//borderColor: '#E1E5E9',
	}
})