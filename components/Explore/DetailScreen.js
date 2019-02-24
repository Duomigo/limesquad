import React, { Component } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PotentialShopper from './PotentialShopper';

class DetailScreen extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			 title: navigation.getParam('name', ''),
			 headerRight: (
				<TouchableOpacity
					style={{ paddingRight: 10 }}
					onPress={() => {
						navigation.navigate('Map')
					}}
				>
					<Ionicons name="ios-compass" color='#007AFF' size={28} />
				</TouchableOpacity>
			)
		}
   }

   renderSeparator = () => {
	return (
		<View
			style={{
				height: 1,
				width: "100%",
				backgroundColor: "#CED0CE",
				marginLeft: 25,
			}}
		/>
	);
};

	render() {
		const {navigation} = this.props
		const item = navigation.getParam('item', {})

		return (
			<SafeAreaView>
				<Text style={styles.titleHeader}>
					Who can shop for you?
				</Text>
				<FlatList
					style={styles.potentialShoppersList}
					data={[
						{ key: "Devin", store: 'Walmart' },
						{ key: "Jackson", store: 'Saigon' },
						{ key: "James", store: 'Chick Fil A' },
						{ key: "Joel", store: 'Moes' },
						{ key: "John", store: 'Walmart' },
						{ key: "Jillian", store: 'Walmart' },
						{ key: "Jimmy", store: 'HMart Plano' },
						{ key: "Julie", store: 'Walmart' },
						{ key: "Devin", store: 'Walmart' },
						{ key: "Jackson", store: 'Saigon' },
						{ key: "James", store: 'Chick Fil A' },
						{ key: "Joel", store: 'Moes' },
						{ key: "John", store: 'Walmart' },
						{ key: "Jillian", store: 'Walmart' },
						{ key: "Jimmy", store: 'HMart Plano' },
						{ key: "Julie", store: 'Walmart' }
					]}
					renderItem={({ item }) => 
						<View>
							<PotentialShopper item={item} />
						</View>
					}
					ItemSeparatorComponent={this.renderSeparator}
				/>
			</SafeAreaView>
		)
	}
}

export default DetailScreen;

const styles = StyleSheet.create({
	titleHeader: {
		marginTop: 10,
		marginLeft: 25,
		fontSize: 22,
		fontFamily: 'Avenir Next',
		fontWeight: '700',
		color: '#3c4560'
	},
	potentialShoppersList: {
		marginTop: 0
	}
})

