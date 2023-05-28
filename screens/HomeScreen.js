import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { homeService } from "../networkServices/homeService";
import Article from "../components/Article";
import LoadingOverlay from "../components/LoadingOverlay";

function HomeScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    setIsFetching(true);
    homeService("general")
      .then((data) => {
        setNewsData(data);
        setIsFetching(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }
  return (
    <FlatList
      data={newsData}
      renderItem={({ item }) => (
        <Article
          urlToImage={item.urlToImage}
          title={item.title}
          publishedAt={item.publishedAt}
          description={item.description}
        />
      )}
      keyExtractor={(item) => item.publishedAt}
    />
  );
}

export default HomeScreen;
