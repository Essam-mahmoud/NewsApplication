import { Pressable, View, Image, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

function Article({ urlToImage, title, publishedAt, description }) {
  const navigation = useNavigation();
  function openDetailsScreenHandler() {
    navigation.navigate("NewsDetails", {
      urlToImage,
      title,
      publishedAt,
      description,
    });
  }
  return (
    <Pressable onPress={openDetailsScreenHandler}>
      <View style={styles.newsContainer}>
        <Image
          style={styles.imageStyle}
          width={350}
          height={250}
          resizeMode={"cover"}
          source={{
            uri: urlToImage,
          }}
          alt="Alternate Text"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {moment(publishedAt).format("YYYY-MM-DD")}
        </Text>
        <Text style={styles.newsDescription}>{description}</Text>
        <View style={styles.divider}></View>
      </View>
    </Pressable>
  );
}

export default Article;

const styles = StyleSheet.create({
  newsContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "600",
  },
  newsDescription: {
    fontSize: 16,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    marginTop: 6,
    backgroundColor: GlobalStyles.colors.primary50,
  },
  imageStyle: {
    borderRadius: 8,
  },
});
