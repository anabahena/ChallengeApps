// @ts-ignore
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
    const data = [
        {
            type: 'bitcoin',
            value: 0,
            color: '#000',
            backgroundColor: '#fff',
            percent: 0
        },
        {
            type: 'ethereum',
            value: 0,
            color: '#000',
            backgroundColor: '#fff',
            percent: 0
        },
        {
            type: 'litecoin',
            value: 0,
            color: '#000',
            backgroundColor: '#fff',
            percent: 0
        },
        {
            type: 'monero',
            value: 0,
            color: '#000',
            backgroundColor: '#fff',
            percent: 0
        },
    ]
    const [newData, setNewData] = useState(data);
    const pricesWs = new WebSocket(
        'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin',
    );


    //pricesWs.onmessage = msg => {
    //    const values = JSON.parse(msg.data);
    //    const objectArray = Object.entries(values);
    //    console.log(values)
    //    const previewArray = [...newData];
    //    objectArray.forEach(([key, value]) => {
    //        let color = newData.find(
    //            (item: { value: number }) => item.value > value,
    //        );
    //        let sameColor = newData.find(
    //            (item: { value: number }) => item.value === value,
    //        );
    //        // eslint-disable-next-line no-unused-expressions
    //        let percent = previewArray.reduce((previous) => {
    //            console.log('previous', previous);
    //            let decreaseValue = previous ? previous.value - value : 0;
    //            return previous ? (decreaseValue / previous.value) * 100 : 0;
    //        });
    //        let calcPercent = percent > 0 ? percent.toFixed(2) : 0;
    //        let index = newData.findIndex(item => item.type === key);
//
    //        newData.splice(index, 1, {
    //            type: key,
    //            value,
    //            color: sameColor ? '#000' : color ? 'green' : 'red',
    //            percent: calcPercent,
    //            background: sameColor ? '#fff' : color ? '#00BA2980' : '#D7004D80',
    //        })
    //    });
    //    setInterval(() => setNewData([...newData]), 500);
    //}

  // @ts-ignore
  const List = ({item}) => {
    let image = null;

    switch (item.type) {
      case 'bitcoin':
        image = require('../assets/images/bitcoin.png');
        break;
      case 'ethereum':
        image = require('../assets/images/ethereum.jpeg');
        break;
      case 'litecoin':
        image = require('../assets/images/litecoin.png');
        break;
      case 'monero':
        image = require('../assets/images/monero.png');
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
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Text>{item.type}</Text>
          </View>
          <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
            <Text>{item.value}</Text>
          </View>
          <View
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

  // @ts-ignore
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
          {newData.map(
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
