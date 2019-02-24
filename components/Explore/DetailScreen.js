import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

class DetailScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			 title: navigation.getParam('name', '')
		}
   }

	render() {
		return (
			<View>
				<Text>
					DetailScreen.js
				</Text>
			</View>
		)
	}
}

export default DetailScreen;

const styles = StyleSheet.create({

})

