import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import moment from 'moment';

const RenderItem = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{uri: data?.urlToImage}}
          resizeMode={'cover'}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{data?.source?.name}</Text>
        <Text style={styles.resultText}>{data?.author}</Text>
        <Text style={styles.resultText}>
          {moment(data?.publishedAt).format('lll')}
        </Text>
      </View>
    </View>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },

  imageContainer: {
    width: 50,
  },

  image: {
    width: 50,
    height: 50,
    backgroundColor: '#ccc',
  },

  detailsContainer: {
    paddingHorizontal: 10,
  },

  title: {
    resultText: 'left',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },

  resultText: {
    resultText: 'left',
    color: '#333',
  },
});
