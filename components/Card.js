import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import Draggable from "react-native-draggable";
const Card = ({ card }) => {
  const [data, setData] = useState(card);
  const [title, setTitle] = useState(data.title);
  const [desc, setDesc] = useState(data.description);

  const titleChange = (text) => {
    setTitle(text);
  };

  const descChange = (text) => {
    setDesc(text);
  };

  return (
    <View style={styles.container}>
      <View>
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
  draggable: {
    zIndex: 999,
  },
});

export default Card;
