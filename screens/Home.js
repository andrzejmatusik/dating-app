import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push("Content")}>
        <Animatable.View
          animation="pulse"
          easing="ease-out" 
          iterationCount="infinite"
        >
          <Image 
            style={styles.logo}
            source={require("../assets/logo.png")}
          />
          {/* LOGO DESIGNED BY FREEPIK - WWW.FREEPIK.COM */}
        </Animatable.View>
        <Text style={styles.header}>Woof <Text style={styles.span}>me</Text></Text>
        <Text style={styles.text}>Love at first bark!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
  header: {
    fontFamily: 'neufreitExtraBold',
    fontSize: 32,
    color: '#078db2',
    textTransform: 'lowercase',
  },
  span: {
    color: '#036d97',
  },
  text: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
});