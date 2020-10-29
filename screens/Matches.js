import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function Matches({ navigation, route }) {
  const result = route.params === undefined ? null : route.params.data;
  return (
    <>
      {result === null ? (
        <View style={styles.container}>
          <Image 
            style={styles.logo}
            source={require("../assets/matches.png")}
          />
          {/* LOGO DESIGNED BY FREEPIK - WWW.FREEPIK.COM */}
          <Text style={styles.header}>No <Text style={styles.span}>matches</Text></Text>
          <Text style={styles.text}>Add someone!</Text>
        </View>
      ) : (
        <>
          <Text style={styles.screen}>Matches</Text>
          <View style={styles.container}>
            <FlatList
              style={styles.list}
              data={result}
              numColumns={2}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.profile} onPress={() => navigation.push("Details", item)}>
                  <Image
                    style={styles.image}
                    source={item.img}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.match}>Match: {item.match}</Text>
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
    color: '#8cc63e',
    textAlign: 'center',
    textTransform: 'lowercase',
  },
  span: {
    color: '#6cb027',
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
    marginLeft: 5,
    paddingTop: 10,
  },
  profile: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 180,
    margin: 10,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 20,
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'neufreitExtraBold',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
  },
  match: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    paddingTop: 2.5,
    paddingBottom: 10,
  },
});