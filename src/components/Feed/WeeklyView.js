import React, { Component } from 'react';
import {
	View,
	Text,
	FlatList,
	StyleSheet
} from 'react-native';

import WeeklyItem from './WeeklyItem'

class WeeklyView extends Component {

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#E1E5E9",
					marginLeft: 25,
				}}
			/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.flatList}>
					<FlatList
						data={[
							{ name: 'Monday', desc: 'First day' }, 
							{ name: 'Tuesday', desc: 'Second day' },
							{ name: 'Wednesday', desc: 'Middle day' }, 
							{ name: 'Thursday', desc: 'Fifth day' },
							{ name: 'Friday', desc: 'Funday day' }, 
							{ name: 'Saturday', desc: 'Chill day' },
							{ name: 'Sunday', desc: 'HW day' }
						]}
						renderItem={({ item }) => <WeeklyItem item={item} />}
						ItemSeparatorComponent={this.renderSeparator}
						scrollEnabled={false}
					/>
				</View>
			</View>
		)
	}
}

export default WeeklyView;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5F6F7',
	},
	flatList: {
		marginLeft: 30,
		marginRight: 30,
		marginTop: 10,
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#E1E5E9',
		borderRadius: 10,

		shadowColor: "#000",
		shadowOffset: {
			 width: 0,
			 height: 0,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,

		elevation: 5,
	}
})