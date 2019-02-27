import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, AsyncStorage } from 'react-native';

import axios from 'axios';

class ClassesScreen extends Component {

	state = {
		name: '',
		image: 'null'
	}

	async componentDidMount() {
		const token = await AsyncStorage.getItem('userToken', token);

		axios.defaults.headers.common = {'Authorization': `bearer ${token}`}

		try {
			const response = await axios.get("https://limesquad.herokuapp.com/api/users/me");
			const data = await response.data;
			
			this.setState ({
				name: data.name
			})
		} catch(err) {
			console.log(JSON.stringify(err))
		}
	}

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.titleBar}>
            <Image style={styles.avatar} source={require('../../assets/demo.jpg')} />
            <Text style={styles.title}>Welcome back,</Text>
            <Text style={styles.name}>{this.state.name}</Text>   
          </View>

          <Text style={styles.subTitle}>
            Your classes
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default ClassesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)'
  },
  cover: {

  },
  avatar: {
    width: 44,
    height: 44,
    backgroundColor: 'black',
    borderRadius: 22,
    marginLeft: 30,
    position: 'absolute',
    top: 0,
    left: 0
  },
  titleBar: {
    width: '100%',
    marginTop: 50,
    paddingLeft: 90,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Avenir Next',
    color: '#b8bece',
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 15,
    fontFamily: 'Avenir Next',
    color: '#b8bece',
    fontWeight: '600',
    marginLeft: 30,
    marginTop: 25,
    textTransform: 'uppercase'
  },
  name: {
    fontSize: 20,
    fontFamily: 'Avenir Next',
    color: '#3c4560',
    fontWeight: '700',
    marginTop: -3
  },
  classes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  }
});