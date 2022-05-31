import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {API} from 'aws-amplify';
import {
  RefreshControl,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import moment from 'moment';
import {listUsers} from '../graphql/queries';
function WaterIntake({navigation: {navigate}}) {
  const [usersList, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const fetchUsers = async () => {
    try {
      const users = await API.graphql({query: listUsers});
      if (users.data.listUsers) {
        console.log('Users: \n');
        console.log(users);
        setUsers(users.data.listUsers.items);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchUsers();
    setRefreshing(false);
  };

  return (
    <View style={styles.productsView}>
      {usersList && (
        <FlatList
          style={styles.productList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={item => item.id.toString()}
          data={usersList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.parentView}
                onPress={() =>
                  navigation.navigate('UpdateProduct', {
                    singleNote: item,
                  })
                }>
                <View
                  style={{
                    borderRadius: 10,
                    padding: 15,
                    backgroundColor: '#FF92A9',
                  }}>
                  <Text style={styles.date}>
                    Date: {moment(item.time).format('DD MMMM')}
                  </Text>
                  <Text numberOfLines={5} style={styles.note}>
                    Intake: {item.amount}L
                  </Text>
                  <Text numberOfLines={1} style={styles.category}>
                    Comment: {item.description}
                  </Text>
                  
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
  },

  item: {
    marginVertical: 4,
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
  },
  notes: {
    fontSize: 20,
  },
});

export default WaterIntake;
