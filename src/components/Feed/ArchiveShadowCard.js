// import React, { Component } from 'react';
// import {
// 	View,
// 	Text,
// 	FlatList,
// 	StyleSheet
// } from 'react-native';

// import WeeklyItem from './WeeklyItem'

// class WeeklyView extends Component {

// 	renderSeparator = () => {
// 		return (
// 			<View
// 				style={{
// 					height: 1,
// 					width: "100%",
// 					backgroundColor: "#E1E5E9",
// 					marginLeft: 20,
// 				}}
// 			/>
// 		);
// 	};

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<View style={styles.flatList}>
// 					<FlatList
// 						data={[
// 							{ name: 'Monday', desc: 'First day' }, 
// 							{ name: 'Tuesday', desc: 'Second day' },
// 							{ name: 'Wednesday', desc: 'Middle day' }, 
// 							{ name: 'Thursday', desc: 'Fifth day' },
// 							{ name: 'Friday', desc: 'Funday day' }, 
// 							{ name: 'Saturday', desc: 'Chill day' },
// 							{ name: 'Sunday', desc: 'HW day' }
// 						]}
// 						renderItem={({ item }) => <WeeklyItem item={item} />}
// 						ItemSeparatorComponent={this.renderSeparator}
// 						scrollEnabled={false}
// 					/>
// 				</View>
// 			</View>
// 		)
// 	}
// }

// export default WeeklyView;

// const styles = StyleSheet.create({
// 	container: {
// 		backgroundColor: '#F5F6F7',
// 	},
// 	flatList: {
// 		marginLeft: 30,
// 		marginRight: 30,
// 		marginTop: 10,
// 		backgroundColor: '#FFFFFF',
// 		//borderWidth: 1,
// 		//borderColor: '#E1E5E9',
// 		borderRadius: 10,

// 		shadowColor: "black",
// 		shadowOffset: {
// 			 width: 0,
// 			 height: 6,
// 		},
// 		shadowOpacity: 0.1,
// 		shadowRadius: 10,

// 		elevation: 50,
// 	}
// })


// import React, { Component } from 'react';
// import {
// 	View,
// 	Text,
// 	StyleSheet,
// 	Image,
// 	TouchableOpacity
// } from 'react-native';

// import { withNavigation } from 'react-navigation' 

// class WeeklyItem extends Component {
// 	render() {
// 		const { item } = this.props;

// 		return (
// 			<TouchableOpacity 
// 				style={styles.container}
// 				onPress={() => {
// 					this.props.navigation.navigate('Shopper', {
// 						name: item.name,
// 						address: item.address,
// 						image: item.image,
// 						item: item
// 					})
// 			   }}
// 			>
// 				<View style={styles.titleBar}>
// 					<Image style={styles.itemImage} source={{uri: 'http://s3.amazonaws.com/general-assets/monday-200x200.png'}} />
// 					<Text style={styles.itemTitle}>{item.name}</Text>
// 					<Text style={styles.itemPlace}>{item.desc}</Text>
// 				</View>
// 			</TouchableOpacity>
// 		)
// 	}
// }

// export default withNavigation(WeeklyItem);

// const styles = StyleSheet.create({
// 	container: {
// 		padding: 15,
// 		paddingBottom: 10
// 	},
// 	itemTitle: {
// 		fontSize: 16,
// 		fontFamily: 'System',
// 		color: '#3c4560',
// 		fontWeight: '700'
// 	},
// 	itemPlace: {
// 		fontSize: 14,
// 		fontFamily: 'System',
// 		color: '#b8bece',
// 		fontWeight: '500',
// 		marginTop: -2.5
// 	},
// 	itemImage: {
// 		width: 40,
// 		height: 40,
// 		backgroundColor: '#b8bece',
// 		borderRadius: 3,
// 		marginLeft: 5,
// 		position: 'absolute',
// 		top: 0,
// 		left: 0
// 	},
// 	titleBar: {
// 		width: '100%',
// 		paddingLeft: 60
// 	},
// })