import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

const Card = ({ card }) => {
  const [title, setTitle] = useState(card.title);

  const [desc, setDesc] = useState(card.description);

  const titleChange = (text) => {
    setTitle(text);
  };

  const descChange = (text) => {
    setDesc(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        onChangeText={(text) => titleChange(text)}
        value={title}
      />

      <TextInput
        onChangeText={(text) => descChange(text)}
        style={styles.description}
        value={desc}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    backgroundColor: "#ffffff",
    width: "100%",
  },
  title: {
    fontSize: 16,
  },
  description: {
    fontSize: 12,
  },
});

export default Card;
