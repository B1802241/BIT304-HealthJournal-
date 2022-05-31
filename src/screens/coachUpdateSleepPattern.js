import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import t from 'tcomb-form-native';
import {Auth, API, graphqlOperation} from 'aws-amplify';
import {updateSleep} from '../graphql/mutations';

const Form = t.form.Form;
const User = t.struct({
  description: t.String,
});
const CoachUpdateSleepPattern = ({route}) => {
  const [form, setForm] = useState(null);
  const navigation = useNavigation();
  const {setStackRoot, pop, push, showOverlay} = useNavigation();
  const {singleNote} = route.params;

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
        graphqlOperation(updateSleep, {
          input: {
            id: singleNote.id,
            description: value.description,
          },
        }),
      );
      console.log('Response :\n');
      console.log(response);
      push('csHome');
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
          <Button title="Save" onPress={handleSubmit} />
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
});
export default CoachUpdateSleepPattern;

