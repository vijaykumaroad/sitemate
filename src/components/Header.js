import React, {useState} from 'react';
import {StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = ({handler}) => {
  const [searchText, setSearchText] = useState(null);

  const searchHandler = () => {
    handler(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search'}
        returnKeyType={'search'}
        editable
        maxLength={40}
        style={styles.input}
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={searchHandler}
      />
      <TouchableOpacity
        onPress={searchHandler}
        activeOpacity={0.7}
        style={styles.button}>
        <Ionicons name="search" size={20} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: '#ccc',
    margin: 10,
    borderRadius: 20,
  },

  input: {
    flex: 1,
    paddingHorizontal: 15,
  },

  button: {
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
});
