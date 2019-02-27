import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View, Image,
	ScrollView,
	TouchableOpacity,
	TouchableHighlight,
	SegmentedControlIOS,
	SafeAreaView,
	AsyncStorage,
	Modal,
	TextInput
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
		image: 'null',
		modalVisible: false,
		where: '',
		when: ''
	}

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	async componentDidMount() {
		const token = await AsyncStorage.getItem('userToken', token);

		axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }

		try {
			const response = await axios.get("https://limesquad.herokuapp.com/api/users/me");
			const data = await response.data;

			this.setState({
				name: data.name,
				username: data.username
			})
		} catch (err) {
			console.log(JSON.stringify(err))
		}
	}

	_postAsync = async () => {
		const loginData = {
			supermarket: this.state.where,
			time: this.state.when
		}
		console.log(loginData)
		try {
			const response = await axios.post('https://limesquad.herokuapp.com/api/orders', loginData);
			const token = await response.data.token
			
			await AsyncStorage.setItem('userToken', token);
			this.props.navigation.goBack();
		} catch (err) {
			const error = await JSON.stringify(err)
			console.log(error)
		}
	};

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
						<TouchableHighlight
							style={styles.signInButton}
							onPress={() => {
								this.setModalVisible(!this.state.modalVisible);
							}}>
							<Text style={styles.signInButtonText}>
								Add order
									</Text>
						</TouchableHighlight>

						<Modal
							animationType="slide"
							transparent={false}
							visible={this.state.modalVisible}
							onRequestClose={() => {
								Alert.alert('Modal has been closed.');
							}}>
							<SafeAreaView style={{ marginTop: 22 }}>
								<View>
									<Text style={styles.requestHeader}>List your self up!</Text>

									<Text style={styles.textx}>
										Where
									</Text>

									<TextInput
										placeholder="Where"
										secureTextEntry={false}
										style={styles.textInput}
										onChangeText={(where) => this.setState({ where })}
										value={this.state.text}
									/>

									<Text style={styles.textx}>
										When
									</Text>

									<TextInput
										placeholder="When"
										secureTextEntry={false}
										style={styles.textInput}
										placeholderStyle={styles.text}
										onChangeText={(when) => this.setState({ when })}
										value={this.state.text}
									/>

									<TouchableHighlight
										style={styles.signInButton}
										onPress={() => {
											// this.setModalVisible(!this.state.modalVisible);
											this._postAsync()
										}}>
										<Text style={styles.signInButtonText}>
											Post Order
									</Text>
									</TouchableHighlight>
									<TouchableHighlight
										style={styles.cancelButton}
										onPress={() => {
											this.setModalVisible(!this.state.modalVisible);
										}}>
										<Text style={styles.cancelButtonText}>
											Cancel
									</Text>
									</TouchableHighlight>
								</View>
							</SafeAreaView>
						</Modal>


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
	},
	shopperBio: {
		padding: 20,
		fontSize: 18,
		fontWeight: '600',
		fontFamily: 'Avenir Next',
		color: '#3c4560',
	},
	requestButton: {
		position: 'absolute',
		marginTop: 5,
		right: 10,
	},
	requestHeader: {
		fontSize: 20,
		fontFamily: 'Avenir Next',
		color: '#3c4560',
		fontWeight: '700',
		marginTop: 10,
		marginLeft: 20,
	},
	requestAvatar: {
		height: 60,
		width: 60,
		borderRadius: 30,
		marginTop: 10,
		marginLeft: 20,
	},
	textInput: {
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 10,
		height: 50,
		borderColor: '#b8bece',
		borderWidth: 2,
		borderRadius: 5,
		fontFamily: 'Avenir Next',
		fontWeight: '500',
		fontSize: 18,
		paddingLeft: 10
	},
	textx: {
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 2,
		fontFamily: 'Avenir Next',
		fontSize: 18,
		fontWeight: '600',
		color: "#3c4560"
	},
	signInButton: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
		backgroundColor: "rgb(255,45,85)",
		borderRadius: 5,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	signInButtonText: {
		fontFamily: 'Avenir Next',
		fontWeight: '500',
		fontSize: 18,
		fontWeight: '600',
		color: 'white'
	},
	cancelButton: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
		backgroundColor: "#b8bece",
		borderRadius: 5,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	cancelButtonText: {
		fontFamily: 'Avenir Next',
		fontWeight: '500',
		fontSize: 18,
		fontWeight: '600',
		color: '#3c4560'
	},
	//// sdjljsd
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
	},
	signInButton: {
		marginLeft: 20,
		marginRight: 20,
		marginTop: 10,
		backgroundColor: "rgb(255,45,85)",
		borderRadius: 5,
		height: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	signInButtonText: {
		fontFamily: 'Avenir Next',
		fontWeight: '500',
		fontSize: 18,
		fontWeight: '600',
		color: 'white'
	},
});