import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  RefreshControl,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {color} from 'react-native-reanimated';

function adminHome() {
  const navigation = useNavigation();
 

  return (
    <View>
      <Text style={styles.title}>
        Welcome to {'\n'} <Text style={styles.titles}>Health Journal </Text>
      </Text>
      <Text style={styles.text}>What do you wish to view?</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('asHome')}>
          <Image
            source={require('../assets/sleep.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Sleep Pattern</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('aHome')}>
          <Image
            source={require('../assets/water.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Water Intake</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontSize: 30,
  },
  titles: {
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 50,
    fontSize: 40,
    color: '#03fc90',
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    fontSize: 25,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  button: {
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 130,
    width: 150,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default adminHome;
