import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class ExploreScreen extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>ExploreScreen</Text>
			</View>
		);
	}
}

export default ExploreScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		fontFamily: "Avenir Next",
		fontSize: 20
	}
});
