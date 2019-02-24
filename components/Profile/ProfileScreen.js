import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View, Image,
	ScrollView,
	TouchableOpacity,
	SegmentedControlIOS,
	SafeAreaView,
	AsyncStorage
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

import OrderHistory from './OrderHistory'
import Schedule from './Schedule'

class ClassesScreen extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Profile',
			headerRight: (
				<TouchableOpacity
					style={{ paddingRight: 10 }}
					onPress={() => {
						navigation.navigate('Settings')
					}}
				>
					<Ionicons name="ios-options" color='#007AFF' size={28} />
				</TouchableOpacity>
			)
		}
	}

	state = {
		selectedIndex: 0,
		name: 'Limesquad',
		username: 'limesquad',
		image: 'null'
	}

	async componentDidMount() {
		const token = await AsyncStorage.getItem('userToken', token);

		axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

		try {
			const response = await axios.get("http://localhost:3000/api/users/me");
			const data = await response.data;
			
			this.setState ({
				name: data.name,
				username: data.username
			})
		} catch(err) {
			console.log(JSON.stringify(err))
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.titleBar}>
						<Image style={styles.avatar} source={require('../../assets/demo.jpg')} />
						<Text style={styles.name}>{this.state.name}</Text>
						<Text style={styles.title}>@{this.state.username}</Text>
					</View>

					{/* <Text style={styles.subTitle}>
                         Your classes
                         </Text> */}

					<SafeAreaView>
						<SegmentedControlIOS
							style={styles.segmentedIOS}
							values={['Schedule', 'Order\'s History']}
							selectedIndex={this.state.selectedIndex}
							onChange={(event) => {
								this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
							}}
						/>
						<View>
							{(this.state.selectedIndex === 0) ? (
								<Schedule />
							) : (
								<OrderHistory />
							)}
						</View>
					</SafeAreaView>
				</ScrollView>
			</View>
		);
	}
}

export default ClassesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(255, 255, 255)'
	},
	segmentedIOS: {
		marginTop: 10,
		marginLeft: 70,
		marginRight: 70,
	},
	avatar: {
		width: 80,
		height: 80,
		backgroundColor: 'black',
		borderRadius: 40,
	},
	titleBar: {
		width: '100%',
		marginTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 16,
		fontFamily: 'Avenir Next',
		color: '#b8bece',
		fontWeight: '500',
	},
	subTitle: {
		fontSize: 15,
		fontFamily: 'Avenir Next',
		color: '#b8bece',
		fontWeight: '600',
		marginLeft: 30,
		marginTop: 25,
		textTransform: 'uppercase'
	},
	name: {
		fontSize: 20,
		fontFamily: 'Avenir Next',
		color: '#3c4560',
		fontWeight: '700',
		paddingTop: 5
	},
	classes: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	},
	text: {
		fontFamily: 'Avenir Next',
		fontSize: 20,
	}
});