import { ScrollView, Text, Image, StyleSheet } from "react-native";
import moment from "moment";
import { GlobalStyles } from "../constants/styles";

function NewsDetailsScreen({ route }) {
  const { urlToImage, title, publishedAt, description } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: urlToImage,
        }}
        alt="Alternate Text"
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>
        {moment(publishedAt).format("YYYY-MM-DD")}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
}

export default NewsDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    fontSize: 16,
    color: "#999",
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    lineHeight: 24,
    marginBottom: 10,
  },
});
