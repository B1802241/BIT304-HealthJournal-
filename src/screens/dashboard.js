import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {API} from 'aws-amplify';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {
  RefreshControl,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import moment from 'moment';
import {listUsers, listSleeps} from '../graphql/queries';
function dashboard({navigation: {navigate}}) {
  const [usersList, setUsers] = useState([]);
  const [sleepsList, setSleeps] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const fetchUsers = async () => {
    try {
      const users = await API.graphql({query: listUsers});
      if (users.data.listUsers) {
        setUsers(users.data.listUsers.items);
      }
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchSleeps = async () => {
    try {
      const sleeps = await API.graphql({query: listSleeps});
      if (sleeps.data.listSleeps) {
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
    await fetchUsers();
    setRefreshing(false);
  };
  const onRefreshs = async () => {
    setRefreshing(true);
    await fetchSleeps();
    setRefreshing(false);
  };

  // };
  var ul = [2];
  var dl = [];
  var ll = 0;
  var cl = 0;
  var rl = 0;
  var sl = [0, 0, 0];
  function counts() {
    sl[sl.length - 3] = ll;
    sl[sl.length - 2] = cl;
    sl[sl.length - 1] = rl;
    console.log(sl);
  }
  return (
    <View style={styles.MainContainer}>
      <View style={styles.s}>
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={sleepsList}
          renderItem={({item}) => {
            if (item.pattern === 'left') {
              ll = ll + 1;
            }
            if (item.pattern === 'center') {
              cl = cl + 1;
            }
            if (item.pattern === 'right') {
              rl = rl + 1;
            }
            counts();
          }}
        />
        <FlatList
          keyExtractor={item => item.id.toString()}
          data={usersList}
          renderItem={({item}) => {
            ul.push(item.amount);
            dl.push(item.updatedAt.slice(5,10));
          }}
        />
      </View>

      <View>
        <Text style={{fontSize: 28, textAlign: 'center'}}>
          {' '}
          Sleeping Pattern Chart{' '}
        </Text>
        <BarChart
          data={{
            labels: ['left', 'center', 'right'],
            datasets: [
              {
                data: sl,
                color: (opacity = 1) => '#ECEFF1', // optional
                strokeWidth: 2, // optional
              },
            ],
          }}
          width={300}
          height={220}
          chartConfig={{
            backgroundColor: '#131A26',
            backgroundGradientFrom: '#131A26',
            backgroundGradientTo: '#131A26',
            fillShadowGradient: '#2176FF',
            fillShadowGradientOpacity: '1',
            color: (opacity = 1) => `rgba(33, 118, 255, ${opacity})`, // optional
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Text style={{fontSize: 28, textAlign: 'center'}}>
          {' '}
          Water Intake Chart{' '}
        </Text>
        <LineChart
          data={{
            labels: dl,
            datasets: [
              {
                data: ul,
                color: (opacity = 1) => '#ECEFF1', // optional
                strokeWidth: 2, // optional
              },
            ],
          }}
          width={300}
          height={220}
          chartConfig={{
            backgroundColor: '#131A26',
            backgroundGradientFrom: '#131A26',
            backgroundGradientTo: '#131A26',
            fillShadowGradient: '#2176FF',
            fillShadowGradientOpacity: '0.2',
            color: (opacity = 1) => `rgba(33, 118, 255, ${opacity})`, // optional
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: '5',
              strokeWidth: '3',
              stroke: '#FFFFFF',
            },
            barPercentage: 0.5,
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  s: {
    height: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default dashboard;
