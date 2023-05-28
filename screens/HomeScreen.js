import { useEffect, useState } from "react";
import { FlatList, View, RefreshControl } from "react-native";
import { homeService } from "../networkServices/homeService";
import Article from "../components/Article";
import LoadingOverlay from "../components/LoadingOverlay";

function HomeScreen() {
  const [isFetching, setIsFetching] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [newsData, setNewsData] = useState([]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    homeService("general")
      .then((data) => {
        setNewsData(data);
        setIsFetching(false);
      })
      .catch((error) => {
        alert(error);
      });
    setIsRefreshing(false);
  };

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
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
    />
  );
}

export default HomeScreen;
