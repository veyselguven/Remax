import React from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");

const Slider = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.topContainer}>
          <ScrollView
            horizontal={true}
            pagingEnabled={true} //it enables to pass betwween page
            decelerationRate={"fast"}
            maximumZoomScale={4}
          >
            {item.images.map((item) => {
              return (
                <Image
                  source={item.image}
                  key={item.id}
                  style={styles.sliderImage}
                />
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerTop}>
            <Text style={styles.nameText}>{item.name}</Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("HomeDetail", {
                  id: item.id,
                })
              }
            >
              <Icon name={"arrow-right"} size={20} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainerBottom}>
            <Icon name={"map-marker-alt"} size={20} style={styles.icon} />
            <Text style={styles.adressText}>{item.address}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: WINDOW_HEIGHT / 2.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 5,
  },
  contentContainer: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    borderColor: colors.LIGHT_GRAY,
    paddingBottom: 10,
  },
  topContainer: {
    width: "100%",
    height: "75%",
    borderRadius: 20,
    overflow: "hidden", // disari tasma olursa bunu sakla
  },
  sliderImage: {
    flex: 1,
    width: WINDOW_WIDTH,
    height: "100%",
    resizeMode: "cover", // resmi icinde bulundugu containera oturttur.
  },
  bottomContainer: {
    width: "100%",
    height: "25%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 10,
    paddingHorizontal: 10, //soldan ve sagdan deger vererek padding veriyor
  },
  bottomContainerTop: {
    height: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomContainerBottom: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  adressText: {
    fontSize: 13,
    fontWeight: "normal",
    color: colors.LIGHT_GRAY,
    marginLeft: 10,
  },
  icon: {
    color: colors.PURPLE,
  },
});
