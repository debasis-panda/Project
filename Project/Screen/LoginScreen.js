import React from 'react';
import { StyleSheet,  View, KeyboardAvoidingView,Button,TextInput} from 'react-native';

import LoginData from './JSON/userLogin.json'
const userInfo = LoginData
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (

      <KeyboardAvoidingView style={styles.container}>
       
    <View style={styles.InputContainer}>
   
   <TextInput
     style={styles.body}
     placeholder="Username"
     onChangeText={(text) => this.setState({ username: text })}
     value={this.state.username}
     autoCapitalize='none'
     underlineColorAndroid="transparent"
   />
 </View>
 <View style={styles.InputContainer}>

<TextInput
style={styles.body}
placeholder="Password"
onChangeText={(text) => this.setState({ password: text })}
value={this.state.password}
autoCapitalize='none'
underlineColorAndroid="transparent"
/>
</View>

<View  style={[{ width: "85%", margin: 30, backgroundColor: "red" }]}>

        <Button onPress={this._login}   title="login"/>
      
</View>
      
      </KeyboardAvoidingView>

    )
  }


 
  _login = async () => {
    
    if (userInfo.username === this.state.username && userInfo.password === this.state.password) {
     
      this.props.navigation.navigate('HomeScreen')
    } else
      alert('Username or password is incorrect')
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    justifyContent: "center"
  },
  menubar: {

    color: '#fff',
    marginLeft: -100,
  },
  menubar: {
    fontSize: 25,
    color: '#fff',
    marginLeft: -100,
  },
  inputContainer: {
    width: 350,
    marginTop: 15,
    borderWidth: 1,
    borderStyle: "solid",

    borderRadius:20
  },
  InputContainer: {
    margin:10,
    width: 390,
    marginTop: 20,
    borderWidth: 1,
    borderStyle: "solid",

    borderRadius:20
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
  
  },
})