import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "./Card";
import Button from "./Button";
import { Button as RnButton } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Phase = ({ phase }) => {
  const [cards, setCards] = useState(phase.cards || []);
  const [index, setIndex] = useState(0);

  // ADD CARD
  const addCard = () => {
    const newCard = { id: index };
    setCards((prevCards) => [...prevCards, newCard]);
    setIndex(index + 1);
  };

  //REMOVE EACH CARD
  const deleteCard = (id) => {
    const filteredCards = cards.filter((card) => card.id !== id);
    setCards(filteredCards);
  };

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{phase.title}</Text>
          <RnButton title="..." color={"#fff"} />
        </View>

        <ScrollView>
          {cards.map((card, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => deleteCard(card.id)}>
                <Text>Delete Card</Text>
              </TouchableOpacity>
              <Card key={index} card={card} />
            </View>
          ))}
          <TouchableOpacity style={styles.buttonContainer} onPress={addCard}>
            <Text style={styles.buttonText}>+ Add card</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  option: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonContainer: {
    backgroundColor: "#000",
    height: hp(5),
    width: wp(25),
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
});

export default Phase;
