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
import {listSleeps} from '../graphql/queries';
function CoachSleepPattern({navigation: {navigate}}) {
  const [sleepsList, setSleeps] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  
  const fetchSleeps = async () => {
    try {
      const sleeps = await API.graphql({query: listSleeps});
      if (sleeps.data.listSleeps) {
        console.log('Sleeps: \n');
        console.log(sleeps);
        setSleeps(sleeps.data.listSleeps.items);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchSleeps();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchSleeps();
    setRefreshing(false);
  };

  return (
    <View style={styles.productsView}>
      {sleepsList && (
        <FlatList
          style={styles.productList}
           refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={item => item.id.toString()}
          data={sleepsList}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.parentView}
                onPress={() =>
                  navigation.navigate('csUpdateProduct', {
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
                    Position: {item.pattern}
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
    fontSize: 24,
  },
});

export default CoachSleepPattern;
