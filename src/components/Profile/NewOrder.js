import React, { Component } from 'react';
import {
	SafeAreaView,
	Text,
	View,
	TextInput,
	TouchableHighlight,
	StyleSheet
} from 'react-native';

class NewOrder extends Component {
	_postAsync = async () => {
		const loginData = {
			supermarket: this.state.where,
			time: this.state.when
		}
		console.log(loginData)
		try {
			const response = await axios.post('http://localhost:3000/api/orders', loginData);
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
			<SafeAreaView style={{ marginTop: 22 }}>
				<View>
					<Text style={styles.requestHeader}>
						List your self up!
					</Text>

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
							this._postAsync()
						}}>
						<Text style={styles.signInButtonText}>
							Post Order
						</Text>
					</TouchableHighlight>

					<TouchableHighlight
						style={styles.cancelButton}
					>
						<Text style={styles.cancelButtonText}>
							Cancel
						</Text>
					</TouchableHighlight>

				</View>
			</SafeAreaView>
		)
	}
}

export default NewOrder;

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
})