import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';

const Marker = MapView.Marker

class MapScreen extends Component {

	static navigationOptions = {
		title: "Map View"
	}

	constructor(props) {
		super(props);
		this.state = {
			locationResult: null,
			location: { 
				coords: { 
					latitude: 37.78825, 
					longitude: -122.4324 
				},
			},
			supermarket: {
				latitude: 32.980089,
				longitude: -96.766923
			}
		}
	}

	componentDidMount() {
		this._getLocationAsync();
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied',
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({
			location: location,
			latitude: location.coords.latitude,
			longitude: location.coords.longitude
		});
	};

	render() {
		return (
			<MapView
				style={{ flex: 1 }}
				region={{
					latitude: this.state.location.coords.latitude,
					longitude: this.state.location.coords.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
			>
				<MapView.Marker
					coordinate={this.state.supermarket}
					title="Tom Thumb"
					description="Tom Thumb Supermarket"
				/>
				<MapView.Marker
					coordinate={this.state.location.coords}
					title="You"
					description="Your current location"
				/>
			</MapView>
		);
	}
}

export default MapScreen;