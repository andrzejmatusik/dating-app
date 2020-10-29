import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Profile({ navigation }) {
  const [card, setCard] = useState(
    {
      title: "Space Cowboy",
      country: "Universe",
      status: "Single",
      orientation: "Heterosexual",
      job: "Astronaut",
      music: "Jefferson Starship",
      movies: "2001: A Space Odyssey, Interstellar",
      seen: "Active now",
      img: require("../assets/profile_00.png"),
      photos: [
        require("../assets/gallery/profile_00_a.png"),
        require("../assets/gallery/profile_00_b.png"),
        require("../assets/gallery/profile_00_c.png"),
        require("../assets/gallery/profile_00_d.png"),
        require("../assets/gallery/profile_00_e.png")
      ],
      bg: "#568ed2"
    },
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={card.img}
        />
        <View style={styles.profileContainer}>
          <View>
              <Text 
                  style={[{backgroundColor: card.bg}, styles.profileMatch]}>
                  <FontAwesome name="smile-o" /> Profile
              </Text>
          </View>
          <Text style={styles.profileTitle}>{card.title}</Text>
          <Text style={styles.profileText}><FontAwesome name="globe" /> {card.country}</Text>
          <View style={styles.profileInfo}>
            <Text style={styles.profileDetails}><FontAwesome name="paw" /> {card.status}, {card.orientation}</Text>
            <Text style={styles.profileDetails}><FontAwesome name="trophy" /> {card.job}</Text>
            <Text style={styles.profileDetails}><FontAwesome name="music" /> {card.music}</Text>
            <Text style={styles.profileDetails}><FontAwesome name="video-camera" /> {card.movies}</Text>
            <Text style={styles.profileDetails}><FontAwesome name="clock-o" /> {card.seen}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text 
              style={[{backgroundColor: card.bg}, styles.goBack]}>
              <FontAwesome name="chevron-left" /> Go back
          </Text>
        </TouchableOpacity>
        <View style={styles.profileGallery}>
          <Text style={styles.profileTitle}>Gallery</Text>
          <View style={styles.profilePhotos}>
            {
              card.photos.map((photo, index) => {
                return (
                  <TouchableOpacity style={styles.profilePhoto} key={index}>
                    <Image
                      source={photo}
                    />
                  </TouchableOpacity>
                );
              })
            }
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    alignItems: 'center',
  },
  profileImage: {
    position: 'absolute',
    width: '100%',
    height: 420,
  },
  profileContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 390,
    padding: 20,
    width: '90%',
    shadowColor: "#333",
    shadowOpacity: .15,
    elevation: 7.5,
  },
  profileMatch: {
    borderRadius: 15,
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    top: -35,
    right: 115,
    left: 115,
    padding: 5,
  },
  profileTitle: {
    fontFamily: 'neufreitExtraBold',
    fontSize: 24,
    color: '#222',
    textAlign: 'center',
    marginTop: 15,
  },
  profileText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  profileInfo: {
    marginVertical: 10,
  },
  profileDetails: {
    fontSize: 12,
    color: '#888',
    textAlign: 'left',
    marginVertical: 5,
  },
  profileGallery: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 35,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 35,
    width: '90%',
    shadowColor: "#333",
    shadowOpacity: .15,
    elevation: 7.5,
  },
  profilePhotos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: '-2.35%',
  },
  profilePhoto: {
    margin: '.75%',
  },
  goBack: {
    borderRadius: 50,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
});