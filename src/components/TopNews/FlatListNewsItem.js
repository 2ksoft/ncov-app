import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import * as RootNavigation from "../../NavigationRef";
const _WIDTH = Dimensions.get("window").width;
const FlatListNewsItem = ({ id, title, thumb }) => {
  return (
    <View style={{ ...styles.card }}>
      <ImageBackground
        imageStyle={{ borderRadius: 25 }}
        source={{ uri: thumb }}
        style={styles.image}
      >
        <TouchableOpacity
          onPress={() => RootNavigation.navigate("DetailNews", { id })}
          style={styles.container}
        >
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default FlatListNewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: _WIDTH - 60,
    marginRight: 20,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 30,
    opacity: 1,
    alignSelf: "center",
    paddingTop: 40,
  },
});
