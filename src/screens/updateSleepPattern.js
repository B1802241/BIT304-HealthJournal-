import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import t from 'tcomb-form-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {deleteSleep, updateSleep} from '../graphql/mutations';

const UpdateSleepPattern = ({route}) => {
  const [form, setForm] = useState(null);
  const navigation = useNavigation();
  const {setStackRoot, pop, push, showOverlay} = useNavigation();
  const {singleNote} = route.params;

  const left = async () => {
    try {
      const value = 'left';
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(updateSleep, {
          input: {
            id: singleNote.id,
            pattern: value,
          },
        }),
      );
      console.log('Response :\n');
      console.log(response);
      push('sHome');
    } catch (e) {
      console.log(e.message);
    }
  };
  const right = async () => {
    try {
      const value = 'right';
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(updateSleep, {
          input: {
            id: singleNote.id,
            pattern: value,
          },
        }),
      );
      console.log('Response :\n');
      console.log(response);
      push('sHome');
    } catch (e) {
      console.log(e.message);
    }
  };
  const center = async () => {
    try {
      const value = 'center';
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(updateSleep, {
          input: {
            id: singleNote.id,
            pattern: value,
          },
        }),
      );
      console.log('Response :\n');
      console.log(response);
      push('sHome');
    } catch (e) {
      console.log(e.message);
    }
  };
  const deletesleep = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(deleteSleep, {
          input: {
            id: singleNote.id,
          },
        }),
      );
      console.log('Response :\n');
      console.log(response);
      push('sHome');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <View>
      <Text style={styles.text}>
        What <Text style={styles.titles}>Position</Text> did you sleep {'\n'}{' '}
        last night?
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={left}>
          <Image
            source={require('../assets/left.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Left</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={right}>
          <Image
            source={require('../assets/right.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Right</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={center}>
          <Image
            source={require('../assets/center.png')}
            style={styles.buttonImageIconStyle}
          />
          <Text style={styles.buttonTextStyle}>Center</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={deletesleep}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  updateProductView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    height: 'auto',
  },
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
    fontSize: 30,
    color: '#4287f5',
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
    marginBottom: 20,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 130,
    width: 120,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  delete: {
    textAlign: 'center',
    color: '#FF0000',
    fontSize: 20,
    fontWeight: 'bold',

  },
});
export default UpdateSleepPattern;
