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

function Home() {
  const navigation = useNavigation();
  var admin = false;
  var coach = false;
  const fetchUsers = async () => {
    try {
      const users = await Auth.currentAuthenticatedUser();
      if (users.attributes.sub === '3f0030b6-c07c-4f9f-adad-b580d61a5cdc') {
        admin = true;
      }
      if (users.attributes.sub === '2194e0d8-b102-4207-92e8-bf02310d9afd') {
        coach = true;
      }
      if (admin === true) {
        navigation.navigate('aMain');
      }
      if (coach === true) {
        navigation.navigate('cMain');
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  fetchUsers();

  return (
    <View>
      <Text style={styles.title}>
        Welcome to {'\n'} <Text style={styles.titles}>Health Journal </Text>
      </Text>
      <Text style={styles.text}>What do you wish to record?</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('sHome')}>
          <Image
            source={require('../assets/sleep.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Sleep Pattern</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/water.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Water Intake</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('dashboard')}>
          <Image
            source={require('../assets/dashboard.jpg')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>dashboard</Text>
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
    height: 100,
    width: 120,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Home;
