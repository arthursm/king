import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Orientation from "react-native-orientation";
import Icon from ""
import Icon from "react-native-vector-icons/MaterialIcons";
export default class App extends Component {
  componentWillMount() {
    Orientation.lockToLandscape();
    //if (initial === "PORTRAIT") {
    // Orientation.lockToPortrait();
    // alert("a");
    // } else {
    // Orientation.lockToPortrait();
    // alert("a");
    // }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text> 
                  <Icon
                    name="info-outline"
                    size={30}
                    color="#32CD32"
                    iconStyle={{ alignContent: 'flex-start' }}
                    containerStyle={{ alignSelf: 'flex-end', marginBottom: 50 }}
                    onPress={() => alert('Pmk')}
                  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 0,
    backgroundColor: "red"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
