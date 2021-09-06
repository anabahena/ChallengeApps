import React, {Fragment, useState, createContext} from 'react';
import type {Node} from 'react';
import {useColorScheme} from 'react-native';
import {Home} from './src/components';
import Context from "./src/components/App/Context";
import Header from "./src/components/App/Header";

const App: () => Node = () => {
  const [theme, setTheme] = useState('light');

  return (
      <Fragment>
        <Context.Provider
            value={{
              theme, setTheme
            }}>
            <Header/>
          <Home/>
        </Context.Provider>
      </Fragment>
  );
};


export default App;
