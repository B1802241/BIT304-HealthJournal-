import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import t from 'tcomb-form-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {deleteUser, updateUser} from '../graphql/mutations';

const Form = t.form.Form;
const User = t.struct({
  amount: t.Number,
});
const UpdateWaterIntake = ({route}) => {
  const [form, setForm] = useState(null);
  const navigation = useNavigation();
  const {setStackRoot, pop, push, showOverlay} = useNavigation();
  const {singleNote} = route.params;
  const [refreshPage, setRefreshPage] = useState('');

  const options = {
    auto: 'placeholders',
    fields: {
      description: {
        multiLine: true,
        stylesheet: {
          ...Form.stylesheet,
          textbox: {
            ...Form.stylesheet.textbox,
            normal: {
              ...Form.stylesheet.textbox.normal,
              height: 100,
              textAlignVertical: 'top',
            },
          },
        },
      },
    },
  };
  const addcup = () => {
    const v = singleNote.amount;
    const v1 = v + 1;
    console.log(v1);
    singleNote.amount = v1;
    console.log(singleNote.amount);
    setForm(null);
    <Form
      ref={c => setForm(c)}
      value={singleNote}
      type={User}
      options={options}
    />;
  };

  const addbottle = () => {
    const v = singleNote.amount;
    const v1 = v + 3;
    console.log(v1);
    singleNote.amount = v1;
    console.log(singleNote.amount);
    setForm(null);
    <Form
      ref={c => setForm(c)}
      value={singleNote}
      type={User}
      options={options}
    />;
  };

  const handleSubmit = async () => {
    try {
      const value = await form.getValue();
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(updateUser, {
          input: {
            id: singleNote.id,
            amount: value.amount,
          },
        }),
      );
      console.log('Response :\n');
      console.log(response);
      push('Home');
    } catch (e) {
      console.log(e.message);
    }
  };

  const deleteuser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(deleteUser, {
          input: {
            id: singleNote.id,
          },
        }),
      );
      console.log('Response :\n');
      console.log(response);
      push('Home');
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.updateProductView}>
        <ScrollView>
          <Form
            ref={c => setForm(c)}
            value={singleNote}
            type={User}
            options={options}
          />
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.buttonGPlusStyle}
              activeOpacity={0.5}
              onPress={addcup}>
              <Image
                source={require('../assets/cup.png')}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonTextStyle}>Cup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonGPlusStyle}
              activeOpacity={0.5}
              onPress={addbottle}>
              <Image
                source={require('../assets/bottle.png')}
                style={styles.buttonImageIconStyle}
              />
              <Text style={styles.buttonTextStyle}>Bottle</Text>
            </TouchableOpacity>
          </View>
          <Button title="Save" onPress={handleSubmit} />
          <TouchableOpacity style={styles.button} onPress={deleteuser}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
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
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2389dc',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 50,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    marginLeft: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    margin: 10,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  delete: {
    textAlign: 'center',
    color: '#FF0000',
    fontSize: 20,
    fontWeight: 'bold',

  },
});
export default UpdateWaterIntake;
