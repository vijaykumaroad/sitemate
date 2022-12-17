import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import Header from './src/components/Header';
import RenderItem from './src/components/RenderItem';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const APIKEY = '10f736e3f3d64035857f016a67aa6e1c';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchHandler = async rText => {
    setLoading(true);

    if (!rText || rText?.length === 0) rText = 'everything';

    const results = await axios
      .get(`https://newsapi.org/v2/everything?q=${rText}&apiKey=${APIKEY}`)
      .catch(e => e);

    if (results?.data?.status?.toLowerCase() === 'ok') {
      setData(results?.data?.articles);
    } else {
      // error - something went wrong
      setData([]);
    }

    await storeHistory(rText);
    setLoading(false);
  };

  const storeHistory = async text => {
    try {
      const value = await AsyncStorage.getItem('@search_history');
      let prevHistory = value != null ? JSON.parse(value) : [];
      prevHistory.push({
        text: text,
        dt: new Date().toString(),
      });

      AsyncStorage.setItem('@search_history', JSON.stringify(prevHistory));
    } catch (e) {
      // error reading value
    }
  };

  const renderHeader = () => {
    return (
      <Text style={styles.resultsFound}>Results found: {data?.length}</Text>
    );
  };

  const renderItem = ({item}) => {
    return <RenderItem data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header handler={searchHandler} />
      <FlatList
        keyExtractor={(i, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        data={data}
        onRefresh={searchHandler}
        refreshing={loading}
        style={styles.flatlist}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  flatlist: {flax: 1, paddingHorizontal: 10},
  resultsFound: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
  },
});
