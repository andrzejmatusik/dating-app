import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { BigButton, SmallButton } from '../components/Buttons';

export default function Explore({ navigation }) {
  const isInitialMount = useRef(true);
  const [cards, setCards] = useState([
    {
      title: "Bulldog",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "United Kingdom",
      status: "Single",
      orientation: "Heterosexual",
      job: "Social Media Specialist",
      music: "Snoop Dogg, Bow Wow",
      movies: "Dog Day Afternoon, Reservoir Dogs",
      seen: "Last seen 2 days ago",
      img: require("../assets/profile_01.png"),
      photos: [
        require("../assets/gallery/profile_01_a.png"),
        require("../assets/gallery/profile_01_b.png"),
        require("../assets/gallery/profile_01_c.png")
      ],
      match: "95%",
      bg: "#607c91",
      key: "1"
    },
    {
      title: "Panda",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "China",
      status: "Single",
      orientation: "Heterosexual",
      job: "Food Tester",
      music: "Bloody Panda",
      movies: "Kung Fu Panda, Panda Kopanda",
      seen: "Last seen 5 days ago",
      img: require("../assets/profile_02.png"),
      photos: [
        require("../assets/gallery/profile_02_a.png"),
        require("../assets/gallery/profile_02_b.png"),
        require("../assets/gallery/profile_02_c.png"),
        require("../assets/gallery/profile_02_d.png"),
        require("../assets/gallery/profile_02_e.png")
      ],
      match: "90%",
      bg: "#ab6842",
      key: "2"
    },
    {
      title: "Penguin",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "Antarctica",
      status: "Single",
      orientation: "Bisexual",
      job: "Fisherman",
      music: "Death and the Penguin",
      movies: "Happy Feet, The Penguins of Madagascar",
      seen: "Last seen 24 hours ago",
      img: require("../assets/profile_03.png"),
      photos: [
        require("../assets/gallery/profile_03_a.png"),
        require("../assets/gallery/profile_03_b.png")
      ],
      match: "85%",
      bg: "#4697ae",
      key: "3"
    },
    {
      title: "Monkey",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "Sierra Leone",
      status: "Single",
      orientation: "Heterosexual",
      job: "Businessman",
      music: "Gorillaz, Arctic Monkeys",
      movies: "Planet of the Apes",
      seen: "Last seen 24 hours ago",
      img: require("../assets/profile_04.png"),
      photos: [
        require("../assets/gallery/profile_04_a.png"),
        require("../assets/gallery/profile_04_b.png"),
        require("../assets/gallery/profile_04_c.png")
      ],
      match: "80%",
      bg: "#c9a123",
      key: "4"
    },
    {
      title: "Unicorn",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "Narnia",
      status: "Single",
      orientation: "Homosexual",
      job: "Jockey",
      music: "The Unicorns",
      movies: "My Little Pony, Onward",
      seen: "Last seen 2 days ago",
      img: require("../assets/profile_05.png"),
      photos: [
        require("../assets/gallery/profile_05_a.png"),
        require("../assets/gallery/profile_05_b.png"),
        require("../assets/gallery/profile_05_c.png"),
        require("../assets/gallery/profile_05_d.png")
      ],
      match: "75%",
      bg: "#8e48b2",
      key: "5"
    },
    {
      title: "Corgi",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "Wales",
      status: "Divorced",
      orientation: "Heterosexual",
      job: "Unemployed",
      music: "Bloodhound Gang",
      movies: "The Queen's Corgi",
      seen: "Last seen 1 hour ago",
      img: require("../assets/profile_06.png"),
      photos: [
        require("../assets/gallery/profile_06_a.png"),
        require("../assets/gallery/profile_06_b.png")
      ],
      match: "70%",
      bg: "#0a63a5",
      key: "6"
    },
    {
      title: "Koala",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "Australia",
      status: "Single",
      orientation: "Bisexual",
      job: "Barista",
      music: "Kid Koala",
      movies: "Zootopia, Sing, The Wild",
      seen: "Last seen 7 days ago",
      img: require("../assets/profile_07.png"),
      photos: [
        require("../assets/gallery/profile_07_a.png")
      ],
      match: "65%",
      bg: "#6fc548",
      key: "7"
    },
    {
      title: "Squirrel",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "Poland",
      status: "Single",
      orientation: "Heterosexual",
      job: "Frontend Developer",
      music: "The Squirrels",
      movies: "The Nut Job, Ice Age",
      seen: "Last seen 2 hours ago",
      img: require("../assets/profile_08.png"),
      photos: [
        require("../assets/gallery/profile_08_a.png")
      ],
      match: "60%",
      bg: "#cda74a",
      key: "8"
    },
    {
      title: "Ren Panda",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "Nepal",
      status: "Single",
      orientation: "Heterosexual",
      job: "Freelancer",
      music: "Red Hot Chili Peppers, Maroon 5",
      movies: "The Hunt for Red October",
      seen: "Last seen 4 days ago",
      img: require("../assets/profile_09.png"),
      photos: [
        require("../assets/gallery/profile_09_a.png"),
        require("../assets/gallery/profile_09_b.png"),
        require("../assets/gallery/profile_09_c.png"),
        require("../assets/gallery/profile_09_d.png")
      ],
      match: "55%",
      bg: "#1c90b0",
      key: "9"
    },
    {
      title: "Polar Bear",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, temporibus?",
      country: "Arctic",
      status: "Widow",
      orientation: "Heterosexual",
      job: "24/7 Mom",
      music: "Bear Hands, Bearsuit",
      movies: "Paddington",
      seen: "Last seen 3 days ago",
      img: require("../assets/profile_10.png"),
      photos: [
        require("../assets/gallery/profile_10_a.png")
      ],
      match: "50%",
      bg: "#4279c9",
      key: "10"
    },
  ]);
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState([]);
  const swipedRight = (cardIndex) => {
    setLikes([cards[cardIndex], ...likes]);
  };
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      navigation.navigate("Matches", { data: likes });
      navigation.navigate("Messages", { data: likes });
      navigation.navigate("Explore");
    };
  }, [likes]);
  const swipedLeft = (cardIndex) => {
    setDislikes([cards[cardIndex], ...dislikes]);
  };
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require("../assets/explore.png")}
      />
      {/* LOGO DESIGNED BY FREEPIK - WWW.FREEPIK.COM */}
      <Text style={styles.header}>The <Text style={styles.span}>end</Text></Text>
      <Text style={styles.text}>Nothing more to explore.</Text>
      <Swiper
        ref={(swiper) => this.swiper = swiper}
        cards={cards}
        renderCard={(card) => {
          return (
            <View style={styles.profileContainer}>
              <Image
                style={styles.profileImage}
                source={card.img}
              />
              <View>
                <Text 
                  style={[{backgroundColor: card.bg}, styles.profileMatch]}>
                  <FontAwesome name="heart" /> {card.match} Match!
                </Text>
              </View>
              <Text style={styles.profileTitle}>{card.title}</Text>
              <Text style={styles.profileText}>{card.text}</Text>
              <View style={styles.profileButtons}>
                <SmallButton icon="remove" color="#3064b1" size={16.5} onPress={() => {this.swiper.swipeLeft()}} />
                <BigButton icon="star" color="#d73b6b" size={32.5} onPress={() => {this.swiper.swipeRight()}} />
                <SmallButton icon="info" color="#f5ad26" size={16.5} onPress={() => navigation.push("Details", card)} />
              </View>
            </View>
          )
        }}
        cardIndex={0}
        backgroundColor={"transparent"}
        stackSize={2}
        stackSeparation={30}
        stackScale={5}
        disableTopSwipe={true}
        onSwipedRight={swipedRight}
        onSwipedLeft={swipedLeft}
      >
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f4f5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  
  logo: {
    alignSelf: "center",
  },
  header: {
    fontFamily: 'neufreitExtraBold',
    fontSize: 32,
    color: '#904891',
    textAlign: 'center',
    textTransform: 'lowercase',
  },
  span: {
    color: '#713c72',
  },
  text: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  profileContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    shadowColor: "#333",
    shadowOpacity: .15,
    elevation: 7.5,
  },
  profileImage: {
    borderRadius: 20,
    width: '100%',
    height: 400,
  },
  profileMatch: {
    borderRadius: 15,
    color: '#fff',
    textAlign: 'center',
    position: 'absolute',
    top: -17.5,
    right: 100,
    left: 100,
    padding: 5,
  },
  profileTitle: {
    fontFamily: 'neufreitExtraBold',
    fontSize: 32,
    color: '#222',
    textAlign: 'center',
    marginTop: 25,
  },
  profileText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  profileButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});