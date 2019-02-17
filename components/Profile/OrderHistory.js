import React, { Component } from 'react';
import {
     View,
     Text,
     TouchableOpacity,
     SectionList,
     StyleSheet
} from 'react-native';

class OrderHistory extends Component {
     render() {
          return (
               <View>
                    <SectionList
                         sections={[
                              {title: 'Week 1', data: ['1.1 Calculus Review', '1.2 Matrix Operations', '2.1 Dot Product', '2.2 Plane Systems']},
                              {title: 'Week 2', data: ['2.3 Partial Derivatives', '2.4 Limits', '2.5 Determinants']},
                              {title: 'Family', data: ['Emma', 'Emi', 'Emiliano', 'Ernesto']},
                              {title: 'Friends', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                         ]}
                         renderItem={({item}) => (
                              <TouchableOpacity>
                                   <Text style={styles.item}>{item}</Text>
                              </TouchableOpacity>
                         )}
                         renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                         keyExtractor={(item, index) => index}
                    />
               </View>
          )
     }
}

export default OrderHistory;

const styles = StyleSheet.create({
     container: {
      flex: 1
     },
     sectionHeader: {
       paddingTop: 5,
       paddingLeft: 15,
       paddingRight: 10,
       paddingBottom: 5,
       fontSize: 18,
       fontFamily: 'Avenir Next',
       fontWeight: 'bold',
       backgroundColor: 'rgba(247,247,247,1.0)',
     },
     item: {
       padding: 10,
       paddingLeft: 15,
       fontFamily: 'Avenir Next',
       fontWeight: '500',
       fontSize: 18,
       height: 44,
     },
     searchBar: {
        borderWidth: 1,
        height: 40
     }
})