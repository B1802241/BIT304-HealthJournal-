import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import t from 'tcomb-form-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {useNavigation} from '@react-navigation/native';
import {createUser} from '../graphql/mutations';

const Form = t.form.Form;
const User = t.struct({
  description: t.String,
});
const CoachAddSleepPattern = () => {
  const [form, setForm] = useState(null);
  const [initialValues, setInitialValues] = useState({});
  const navigation = useNavigation();
  const {setStackRoot, pop, push, showOverlay} = useNavigation();

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
  const handleSubmit = async () => {
    try {
      const value = await form.getValue();
      const user = await Auth.currentAuthenticatedUser();
      const response = await API.graphql(
        graphqlOperation(createUser, {
          input: {
            description: value.description,
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
      <SafeAreaView style={styles.addProductView}>
        <ScrollView>
          <Form
            ref={c => setForm(c)}
            value={initialValues}
            type={User}
            options={options}
          />
          <Button title="Save" onPress={handleSubmit} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  addProductView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 15,
    height: 'auto',
  },
});
export default CoachAddSleepPattern;
