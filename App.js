import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Phase from "./components/Phase";
import phasesData from "./data/phases.json";
import Button from "./components/Button";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const App = () => {
  const [phases, setPhases] = useState(phasesData);

  // ADD EACH PHASE
  const addPhase = () => {
    const newPhase = { id: phases.length + 1 };
    setPhases((prev) => [...prev, newPhase]);
  };

  // REMOVE EACH PHASE
  const deletePhase = (id) => {
    const filteredPhases = phases.filter((phase) => phase.id !== id);
    setPhases(filteredPhases);
  };

  return (
    <ImageBackground
      source={require("./assets/background.jpg")}
      style={styles.backgroundImage}
      resizeMode="stretch"
    >
      <Text style={styles.title}>MW - TODO</Text>
      <ScrollView horizontal style={styles.container}>
        {phases.map((phase, index) => (
          <View key={index}>
            <TouchableOpacity onPress={() => deletePhase(phase.id)}>
              <Text>Delete Phase</Text>
            </TouchableOpacity>
            <Phase key={phase.id} phase={phase} />
          </View>
        ))}

        <TouchableOpacity style={styles.buttonContainer} onPress={addPhase}>
          <Text style={styles.buttonText}>+ Add phase</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 48,
    marginBottom: 6,
  },
  container: {
    margin: 5,
    marginRight: 16,
  },
  backgroundImage: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
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
export default App;
