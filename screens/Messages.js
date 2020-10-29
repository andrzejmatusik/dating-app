import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function Messages({ navigation, route }) {
  const result = route.params === undefined ? null : route.params.data;
  return (
    <>
      {result === null ? (
        <View style={styles.container}>
          <Image 
            style={styles.logo}
            source={require("../assets/messages.png")}
          />
          {/* LOGO DESIGNED BY FREEPIK - WWW.FREEPIK.COM */}
          <Text style={styles.header}>No <Text style={styles.span}>messages</Text></Text>
          <Text style={styles.text}>Find some matches first.</Text>
        </View>
      ) : (
        <>
          <Text style={styles.screen}>Messages</Text>
          <View style={styles.container}>
            <FlatList
              style={styles.list}
              data={result}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.profile} onPress={() => navigation.push("Chat", item)}>
                  <Image
                    style={styles.image}
                    source={item.img}
                  />
                  <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.match}>{item.seen}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: "center",
  },
  header: {
    fontFamily: 'neufreitExtraBold',
    fontSize: 32,
    color: '#f15a25',
    textAlign: 'center',
    textTransform: 'lowercase',
  },
  span: {
    color: '#ea3d13',
  },
  text: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  screen: {
    fontFamily: 'neufreitExtraBold',
    fontSize: 32,
    color: '#222',
    textAlign: 'left',
    marginTop: 55,
    marginHorizontal: 15.5,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#888',
  },
  list: {
    paddingTop: 15,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 15,
  },
  image: {
    borderRadius: 100,
    marginRight: 10,
    width: 75,
    height: 75,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'neufreitExtraBold',
    fontSize: 18,
    textAlign: 'left',
    paddingTop: 10,
  },
  match: {
    fontSize: 12,
    color: '#888',
    textAlign: 'left',
    paddingTop: 2.5,
    paddingBottom: 10,
  },
});