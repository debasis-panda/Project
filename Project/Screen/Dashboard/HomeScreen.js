import React from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';

import EmployeeList from '../JSON/employeList.json'


export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }
  componentDidMount() {
    this.setState({
      isLoading: false,
      dataSource: EmployeeList.user
    })
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>Id: {item.id}</Text>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Age: {item.age}</Text>
        <Text style={styles.text}>Gender: {item.gender}</Text>
        <Text style={styles.text}>email: {item.email}</Text>
        <Text style={styles.text}>Phoneno: {item.phoneNo}</Text>
      </View>
    )
  }


  render() {
    if (this.state.isLoading) {

      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }


    return (
      <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 20 }}>

      <FlatList
      data={this.state.dataSource}
      renderItem={this._renderItem}
      keyExtractor={(item, index) => index.toString()}
      />
         
      </View>
      </View>
    )

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  card: {
    width: "97%", 
    borderRadius: 8, 
    margin: 5, 
    borderWidth: 1, 
    borderColor: "#c6c6c6"
  },
  text: { 
    fontWeight: 'bold', 
    fontSize: 12, 
    marginLeft: 5, 
    marginTop: 2,
    marginBottom: 5 
  },

})