import React, { Component } from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	SafeAreaView,
	ScrollView,
	Image,
	AsyncStorage 
} from 'react-native';

import SegmentedView from './SegmentedView'

import axios from 'axios';

class ClassesScreen extends Component {

	state = {
		name: '',
		image: 'null'
	}

	async componentDidMount() {
		const token = await AsyncStorage.getItem('userToken', token);

		axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }

		try {
			const response = await axios.get("http://localhost:3000/api/users/me");
			const data = await response.data;

			this.setState({
				name: data.name
			})
		} catch (err) {
			console.log(JSON.stringify(err))
		}
	}

	static navigationOptions = {
		header: null
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View style={styles.header}>
						<Text style={styles.headerText}>
							Meal Planner
						</Text>
					</View>

					<SegmentedView />	
				</ScrollView>
			</SafeAreaView>
		);
	}
}

export default ClassesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	header: {

	},
	headerText: {
		marginLeft: 25,
		marginTop: 20,
		fontFamily: 'System',
		fontWeight: 'bold',
		fontSize: 26,
		color: '#545C76'
	}
})