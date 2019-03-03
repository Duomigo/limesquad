import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View, Image,
	ScrollView,
	TouchableOpacity,
	AsyncStorage,
	FlatList,
	RefreshControl
} from 'react-native';

import { connect } from 'react-redux';
import { fetchProfile } from '../../actions'

import { Ionicons } from '@expo/vector-icons';

const ORDERS = [
	{
		"tabName": "New Order",
		"tabIcon": "order",
		"tabAddress": "NewOrder"
	},
	{
		"tabName": "Manage Orders",
		"tabIcon": "manange",
		"tabAddress": "Manage"
	}
]

const TABS = [
	{
		"tabName": "Profile",
		"tabIcon": "profile",
		"tabAddress": "Profile"
	},
	{
		"tabName": "Friends",
		"tabIcon": "friends",
		"tabAddress": "Friends"
	},
	{
		"tabName": "Order History",
		"tabIcon": "history",
		"tabAddress": "OrderHistory"
	},
	{
		"tabName": "Schedule",
		"tabIcon": "schedule",
		"tabAddress": "Profile Schedule"
	}
]

const OUT = [
	{
		"tabName": "About",
		"tabIcon": "order",
		"tabAddress": "NewOrder"
	},
	{
		"tabName": "Rate Limesquad",
		"tabIcon": "manange",
		"tabAddress": "Manage"
	},
	{
		"tabName": "Log Out",
		"tabIcon": "manange",
		"tabAddress": "Manage"
	}
]

class ProfileScreen extends Component {

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

	componentDidMount() {
		//this.props.fetchProfile();
	}

	state = {
		refreshing: false,
		selectedIndex: 0,
		where: '',
		when: ''
	}

	_onRefresh = () => {
		this.setState({refreshing: true});
		this.props.fetchProfile().then(() => {
		  this.setState({refreshing: false});
		});
	  }

	renderSeparator = () => {
		return (
			<View
				style={{
					height: 1,
					width: "100%",
					backgroundColor: "#CED0CE",
					marginLeft: 60,
				}}
			/>
		);
	};

	render() {
		const { profile } = this.props;
		const baseUrlProfileImage = 'http://localhost:3000/public/profilepic/'

		const god = `${baseUrlProfileImage}${profile.image}`
		console.log(god)
		
		return (
			<View style={styles.container}>
				<ScrollView
					refreshControl={
						<RefreshControl
							refreshing={this.state.refreshing}
							onRefresh={this._onRefresh}
						/>
					}
					style={styles.container}
					showsVerticalScrollIndicator={false}
				>
					<View style={styles.titleBar}>
						<Image style={styles.avatar} source={{ uri: `${baseUrlProfileImage}${profile.picture}`}} />
						<Text style={styles.name}>{profile.name}</Text>
						<Text style={styles.title}>@{profile.username}</Text>
					</View>

					{/* <Text style={styles.subTitle}>
                         Your classes
						 </Text> */}

					<FlatList
						style={styles.flatList}
						data={ORDERS}
						renderItem={({ item }) => 
							<TouchableOpacity>
								<Text style={styles.item}>{item.tabName}</Text>
				   			</TouchableOpacity>
						}
						ItemSeparatorComponent={this.renderSeparator}
					/>

					<FlatList
						style={styles.flatList}
						data={TABS}
						renderItem={({ item }) => 
							<TouchableOpacity>
								<Text style={styles.item}>{item.tabName}</Text>
				   			</TouchableOpacity>
						}
						ItemSeparatorComponent={this.renderSeparator}
					/>

					<FlatList
						style={styles.flatList}
						data={OUT}
						renderItem={({ item }) => 
							<TouchableOpacity>
								<Text style={styles.item}>{item.tabName}</Text>
				   			</TouchableOpacity>
						}
						ItemSeparatorComponent={this.renderSeparator}
					/>

				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		profile: state.profile
	}
}

export default connect(
	mapStateToProps,
	{ fetchProfile }
)(ProfileScreen);

const styles = StyleSheet.create({
	//// sdjljsd
	container: {
		flex: 1,
		backgroundColor: '#F1F3FA'
	},
	avatar: {
		width: 80,
		height: 80,
		backgroundColor: 'black',
		borderRadius: 40,
	},
	titleBar: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		marginTop: 15,
		marginBottom: 10,
	},
	title: {
		fontSize: 16,
		fontFamily: 'System',
		color: '#b8bece',
		fontWeight: '500',
	},
	subTitle: {
		fontSize: 15,
		fontFamily: 'System',
		color: '#b8bece',
		fontWeight: '600',
		marginLeft: 30,
		marginTop: 25,
		textTransform: 'uppercase'
	},
	name: {
		fontSize: 20,
		fontFamily: 'System',
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
		fontFamily: 'System',
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
		fontFamily: 'System',
		fontWeight: '500',
		fontSize: 18,
		fontWeight: '600',
		color: 'white'
	},
	item: {
		padding: 10,
		paddingLeft: 60,
		fontFamily: 'System',
		fontWeight: '500',
		color: '#545C76',
		fontSize: 18,
		height: 44,
	},
	flatList: {
		backgroundColor: "#FEFEFE",
		borderBottomWidth: 0.8,
		borderBottomColor: '#CED0CE',
		borderTopWidth: 0.8,
		borderTopColor: '#CED0CE',
		marginBottom: 44,
	}
});