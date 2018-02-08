import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      breeds: []
    }
    this.getAllDogBreeds();
  }

  getAllDogBreeds() {
    fetch('https://dog.ceo/api/breeds/list')
    .then((response) => response.json())
    .then((json) => {
      this.setState({ breeds: json.message})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  _keyExtractor = (item, index) => `breeds_${index}`;

  _renderItem = ({item}) => (
    <Text style={styles.myListItem}>
      {item}
    </Text>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.breeds}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
