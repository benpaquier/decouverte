import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  Alert,
  ActivityIndicator
} from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 10,
    marginTop: 50,
  },
  textContainer: {
    backgroundColor: "white",
    paddingBottom: 50
  },
  margin80: {
    marginVertical: 80
  },
  text1: {
    fontSize: 30
  },
  text2: {
    textAlign: "center"
  },
  text3: {
    fontWeight: "bold"
  },
  image: {
    width: 124,
    height: 40,
    alignSelf: "center",
    marginVertical: 40
  },
  button: {
    backgroundColor: "red",
    padding: 30,
    width: 150,
    alignSelf: "center",
    marginVertical: 90
  }
})

const App = () => {
  const createAlert = () => {
    Alert.alert(
      "Mon titre",
      "Mon message",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed")
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ]
    )
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.margin80, styles.text1]}>Hello app</Text>
        <Text style={[styles.margin80, styles.text2]}>Hello app</Text>
        <Text style={[styles.margin80, styles.text3]}>Hello app</Text>

        <Image
          style={styles.image}
          source={{
            uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"
          }}
        />
        <Image
          style={styles.image}
          source={require("./assets/konexio.png")}
        />

        <Pressable style={styles.button} onPress={createAlert}>
          <Text>Press me!</Text>
        </Pressable>

        <ActivityIndicator
          color="blue"
          size="large"
        />
      </View>
    </ScrollView>
  )
}

export default App