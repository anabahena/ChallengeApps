import React from 'react'
import {SafeAreaView, View} from 'react-native';

const Home = ({ height, width, mode }) => {

  return (
      <SafeAreaView>
        <View style={{ height, width }}>
        </View>
      </SafeAreaView>

  )
}

Home.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
}

export default Home
