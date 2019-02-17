import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

class OrderHistory extends Component {
	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "86%",
					backgroundColor: "#CED0CE",
					marginLeft: "14%"
				}}
			/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={[
						{ key: "Devin" },
						{ key: "Jackson" },
						{ key: "James" },
						{ key: "Joel" },
						{ key: "John" },
						{ key: "Jillian" },
						{ key: "Jimmy" },
						{ key: "Julie" }
					]}
					renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</View>
		);
	}
}

export default OrderHistory;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	item: {
		padding: 10,
		fontSize: 18,
		height: 44
	}
});
