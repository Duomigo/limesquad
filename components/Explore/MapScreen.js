import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, SafeAreaView } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';

const Marker = MapView.Marker

class MapScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			latitude: 32.985957105146475,
			longitude: -96.75138716605206
		}
	}

	componentWillMount() {
		if (Platform.OS === 'android' && !Constants.isDevice) {
			this.setState({
				errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
			});
		} else {
			this._getLocationAsync();
		}
	}

	_getLocationAsync = async () => {
		let { status } = await Permissions.askAsync(Permissions.LOCATION);
		if (status !== 'granted') {
			this.setState({
				errorMessage: 'Permission to access location was denied',
			});
		}

		let location = await Location.getCurrentPositionAsync({});
		this.setState({ location });
		console.log(this.state.location)
	};

	render() {
		return (
			<MapView
				style={{ flex: 1 }}
				initialRegion={{
					latitude: this.state.latitude,
					longitude: this.state.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}} 
			>
				<Marker key={1} title="HAHA" coordinate={this.state.location} />
			</MapView>
		);
	}
}

export default MapScreen;