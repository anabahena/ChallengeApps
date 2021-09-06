import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';
import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

// @ts-ignore
const Home: React.FC = ({currencies = []}) => {
  const [data, setData] = useState(currencies);
  const pricesWs = new WebSocket(
    'wss://ws.coincap.io/prices?assets=ALL',
  );

  pricesWs.onmessage = msg => {
    const values = JSON.parse(msg.data),
      objectArray = Object.entries(values);
    const previewArray = data ? data : [];
    const newArray: {type: string; value: unknown}[] = [];
    let filterData: never[] = [];
    objectArray.forEach(([key, value]) => {
      const color = previewArray.find(
        (item: {value: number}) => item.value > value,
      );
      const percent =
        previewArray.length > 0
          ? previewArray.reduce((previous: {value: number}) => {
            // @ts-ignore
            let decreaseValue = previous ? previous.value - value : 0;
            return previous ? (decreaseValue / previous.value) * 100 : 0;
          })
          : 0;
      const calcPercent = percent > 0 ? percent.toFixed(2) : 0;
      newArray.push({
        type: key,
        value,
        color: calcPercent === 0 ? '#000' : color ? 'green' : 'red',
        percent: calcPercent,
        background:
          calcPercent === 0 ? '#fff' : color ? '#00BA2980' : '#D7004D80',
      });
      filterData = data.filter((item: {type: string}) => item.type !== key);
    });
    setInterval(() => setData([...filterData, ...newArray]), 500);
  };

  // @ts-ignore
  const List = ({item}) => {
    let image = null;

    switch (item.type) {
      case 'bitcoin':
        image = require('../../assets/images/bitcoin.png');
        break;
      case 'ethereum':
        image = require('../../assets/images/ethereum.jpeg');
        break;
      case 'litecoin':
        image = require('../../assets/images/litecoin.png');
        break;
      case 'monero':
        image = require('../../assets/images/monero.png');
        break;
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: item.background,
        }}>
        <Image source={image} style={{width: 50, height: 50}} />
        <View
          key={data.value}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{item.type}</Text>
        </View>
        <View
          key={data.value}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>{item.value}</Text>
        </View>
        <View
          key={data.value}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: item.color,
            }}>
            {item.percent}%
          </Text>
        </View>
      </View>
    );
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <View style={{
        height:80
      }}>
        <Button
          onPress={()=> console.log('....')}
          title="Learn More"
          color="transparent"
          accessibilityLabel="Learn more about this purple button"
        />

      </View>
      <ScrollView>
        {data.map(
          (
            item: {key: string | number | null | undefined},
            index: {toString: () => string | number | null | undefined},
          ) => (
            <List item={item} key={index.toString()} />
          ),
        )}
      </ScrollView>

    </SafeAreaView>
  );
};

export default Home;
