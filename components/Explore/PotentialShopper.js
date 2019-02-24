import React, { Component } from 'react';
import {
	View,
	SafeAreaView,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	TouchableHighlight,
	Modal,
	TextInput
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

class PotentialShopper extends Component {
	state = {
		modalVisible: false,
	};

	setModalVisible(visible) {
		this.setState({ modalVisible: visible });
	}

	render() {
		const { item } = this.props
		const num = Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99
		const avatar = `https://randomuser.me/api/portraits/women/${num}.jpg`

		return (
			<View style={styles.container}>
				<View style={styles.titleBar}>
					<Image
						source={{ uri: avatar }}
						style={styles.shopperImage}
					/>
					<Text style={styles.shopperName}>{item.shopper.name}</Text>
					<Text style={styles.shopperDesc}>{item.time}</Text>

					<Modal
						animationType="slide"
						transparent={false}
						visible={this.state.modalVisible}
						onRequestClose={() => {
							Alert.alert('Modal has been closed.');
						}}>
						<SafeAreaView style={{ marginTop: 22 }}>
							<View>
								<Text style={styles.requestHeader}>Ask {item.shopper.name} to shop for you!</Text>
								<Image
									source={{ uri: avatar }}
									style={styles.requestAvatar}
								/>
								<Text style={styles.shopperBio}>Hey, this is {item.shopper.name}, I can help you buy some groceries at Walmart evert {item.time}. Feel free to reach out to me if you have any any requests!</Text>

								<Text style={styles.text}>
									Request
								</Text>

								<TextInput
									placeholder="What do you want to buy?"
									secureTextEntry={false}
									style={styles.textInput}
									onChangeText={(username) => this.setState({ username })}
									value={this.state.text}
								/>

								<Text style={styles.text}>
									Tippping
								</Text>

								<TextInput
									placeholder="Tipping for your shopper"
									secureTextEntry={false}
									style={styles.textInput}
									placeholderStyle={styles.text}
									onChangeText={(password) => this.setState({ password })}
									value={this.state.text}
								/>

								<TouchableHighlight
									style={styles.signInButton}
									onPress={() => {
										this.setModalVisible(!this.state.modalVisible);
									}}>
									<Text style={styles.signInButtonText}>
										Request Order
									</Text>
								</TouchableHighlight>
							</View>
						</SafeAreaView>
					</Modal>

					<TouchableOpacity
						style={styles.requestButton}
						onPress={() => {
							this.setModalVisible(true);
						}}
					>
						<Ionicons name="ios-share-alt" color='#007AFF' size={28} />
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

export default PotentialShopper;

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
	text: {
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
})