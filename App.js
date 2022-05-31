import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AddWaterIntake from './src/screens/addWaterIntake';
import UpdateProductScreen from './src/screens/updateWaterIntake';
import cAddWaterIntake from './src/screens/coachAddWaterIntake';
import cUpdateProductScreen from './src/screens/coachUpdateWaterIntake';
import HomeScreen from './src/screens/waterIntake';
import CHomeScreen from './src/screens/coachWaterIntake';
import aHomeScreen from './src/screens/adminWaterIntake';
import asHomeScreen from './src/screens/adminSleepPattern';
import aMainScreen from './src/screens/adminHome';
import MainScreen from './src/screens/home';
import sAddWaterIntake from './src/screens/addSleepPattern';
import sUpdateProductScreen from './src/screens/updateSleepPattern';
import sHomeScreen from './src/screens/sleepPattern';
import cMainScreen from './src/screens/coachHome';
import csAddWaterIntake from './src/screens/coachAddSleepPattern';
import csUpdateProductScreen from './src/screens/coachUpdateSleepPattern';
import csHomeScreen from './src/screens/coachSleepPattern';
import dashboard from './src/screens/dashboard';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {withAuthenticator} from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import awsconfig from './src/aws-exports';
// importing Auth Class from Amplify Library
import {Auth} from 'aws-amplify';

Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});
const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="Main"
            buttonStyle={styles.addButton}
            component={MainScreen}
            options={{
              title: "User's Menu",
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <View style={styles.logOutBtn}>
                  <Button
                    icon={<Icon name="sign-out" size={25} color="#000000" />}
                    onPress={() => {
                      Auth.signOut();
                    }}
                    type="clear"
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation}) => ({
              title: 'Water Intake',
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <TouchableOpacity
                  style={styles.logOutBtn}
                  onPress={() => navigation.navigate('Main')}>
                  <Icon name={'arrow-left'} size={20} color="#000000" />
                </TouchableOpacity>
              ),

              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => navigation.navigate('AddProduct')}>
                  <Icon name={'plus'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="dashboard"
            component={dashboard}
            options={({navigation}) => ({
              title: 'Dashboard',
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <TouchableOpacity
                  style={styles.logOutBtn}
                  onPress={() => navigation.navigate('Main')}>
                  <Icon name={'arrow-left'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="AddProduct"
            buttonStyle={styles.addButton}
            component={AddWaterIntake}
            options={{
              title: 'Add Water Intake',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
          <Stack.Screen
            name="UpdateProduct"
            buttonStyle={styles.addButton}
            component={UpdateProductScreen}
            options={{
              title: 'Update Water Intake',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
          <Stack.Screen
            name="sHome"
            component={sHomeScreen}
            options={({navigation}) => ({
              title: 'Sleep Pattern',
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <TouchableOpacity
                  style={styles.logOutBtn}
                  onPress={() => navigation.navigate('Main')}>
                  <Icon name={'arrow-left'} size={20} color="#000000" />
                </TouchableOpacity>
              ),

              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => navigation.navigate('sAddProduct')}>
                  <Icon name={'plus'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="sAddProduct"
            buttonStyle={styles.addButton}
            component={sAddWaterIntake}
            options={{
              title: 'Add Sleep Pattern',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
          <Stack.Screen
            name="sUpdateProduct"
            buttonStyle={styles.addButton}
            component={sUpdateProductScreen}
            options={{
              title: 'Update Sleep Pattern',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
          <Stack.Screen
            name="aMain"
            buttonStyle={styles.addButton}
            component={aMainScreen}
            options={{
              title: "Admin's Menu",
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <View style={styles.logOutBtn}>
                  <Button
                    icon={<Icon name="sign-out" size={25} color="#000000" />}
                    onPress={() => {
                      Auth.signOut();
                    }}
                    type="clear"
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="aHome"
            component={aHomeScreen}
            options={({navigation}) => ({
              title: 'Water Intake',
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <TouchableOpacity
                  style={styles.logOutBtn}
                  onPress={() => navigation.navigate('aMain')}>
                  <Icon name={'arrow-left'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="asHome"
            component={asHomeScreen}
            options={({navigation}) => ({
              title: 'Sleep Pattern',
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <TouchableOpacity
                  style={styles.logOutBtn}
                  onPress={() => navigation.navigate('aMain')}>
                  <Icon name={'arrow-left'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="cMain"
            buttonStyle={styles.addButton}
            component={cMainScreen}
            options={{
              title: "Coach's Menu",
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <View style={styles.logOutBtn}>
                  <Button
                    icon={<Icon name="sign-out" size={25} color="#000000" />}
                    onPress={() => {
                      Auth.signOut();
                    }}
                    type="clear"
                  />
                </View>
              ),
            }}
          />
          <Stack.Screen
            name="cHome"
            component={CHomeScreen}
            options={({navigation}) => ({
              title: "User's Water Intake",
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <TouchableOpacity
                  style={styles.logOutBtn}
                  onPress={() => navigation.navigate('cMain')}>
                  <Icon name={'arrow-left'} size={20} color="#000000" />
                </TouchableOpacity>
              ),

              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => navigation.navigate('cAddProduct')}>
                  <Icon name={'plus'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="cAddProduct"
            buttonStyle={styles.addButton}
            component={cAddWaterIntake}
            options={{
              title: 'Add Water Intake',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
          <Stack.Screen
            name="cUpdateProduct"
            buttonStyle={styles.addButton}
            component={cUpdateProductScreen}
            options={{
              title: 'Edit Comment',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
          <Stack.Screen
            name="csHome"
            component={csHomeScreen}
            options={({navigation}) => ({
              title: "User's Sleep Pattern",
              headerStyle: {
                backgroundColor: '#ff9300',
              },

              headerLeft: () => (
                <TouchableOpacity
                  style={styles.logOutBtn}
                  onPress={() => navigation.navigate('cMain')}>
                  <Icon name={'arrow-left'} size={20} color="#000000" />
                </TouchableOpacity>
              ),

              headerRight: () => (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => navigation.navigate('csAddProduct')}>
                  <Icon name={'plus'} size={20} color="#000000" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="csAddProduct"
            buttonStyle={styles.addButton}
            component={csAddWaterIntake}
            options={{
              title: 'Add Comment',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
          <Stack.Screen
            name="csUpdateProduct"
            buttonStyle={styles.addButton}
            component={csUpdateProductScreen}
            options={{
              title: 'Edit Comment',
              headerStyle: {
                backgroundColor: '#ff9300',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
const styles = StyleSheet.create({
  addButton: {
    marginRight: 20,
  },
  logOutBtn: {
    marginLeft: 10,
  },
});

export default withAuthenticator(App);
