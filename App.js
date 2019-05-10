

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity, AsyncStorage,} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
saveData(){
  //let name = "Sourav";
  let obj = {
    name : "Sourav",
    email : "ss@gmail.com",
    city : "Bangalore",
  }

  //AsyncStorage.setItem('user',name);
  AsyncStorage.setItem('user', JSON.stringify(obj));
}
displayData = async()=>{
  try{
    let user = await AsyncStorage.getItem('user');
    let parsed = JSON.parse(user);
    alert(parsed.email);
  }
  catch(error){  
    alert(error)  
  } 
}

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {this.saveData}>
        <Text>Save Data</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress = {this.displayData}>
        <Text>Display Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});
