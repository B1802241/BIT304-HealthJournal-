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
function AdminSleepPattern({navigation: {navigate}}) {
  const [usersList, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  state = {
    notes: [
      {
        id: 8,
        title: 'left',
        note: 'Comment',
        time: '2021-02-20T10:08:18.000Z',
      },
      {
        id: 9,
        title: 'right',
        note: 'Comment',
        time: '2021-02-21T10:08:18.000Z',
      },
      {
        id: 3,
        title: 'center',
        note: 'Comment',
        time: '2021-02-22T10:02:40.000Z',
      },
      {
        id: 1,
        title: 'right',
        note: 'Comment',
        time: '2021-02-23T10:02:28.000Z',
      },
      {
        id: 6,
        title: 'center',
        note: 'Comment',
        time: '2021-02-24T10:01:37.000Z',
      },
      {
        id: 7,
        title: 'left',
        note: 'Comment',
        time: '2021-02-25T10:01:37.000Z',
      },
    ],
  };

  /* const fetchUsers = async () => {
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
*/
  return (
    <View style={styles.productsView}>
      {usersList && (
        <FlatList
          style={styles.productList}
          /* refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }*/
          keyExtractor={item => item.id.toString()}
          // data={usersList}
          data={this.state.notes}
          renderItem={({item}) => {
            return (
              <TouchableOpacity>
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
                    Position: {item.title}
                  </Text>
                  <Text numberOfLines={1} style={styles.category}>
                    Comment: {item.note}
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
    fontSize: 24,
  },
});

export default AdminSleepPattern;
