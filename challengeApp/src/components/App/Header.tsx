import React, {useContext, Fragment} from 'react';
import {
    Button,
    View,
    Image,
    Text
} from 'react-native';
import Context from "./Context";

const Home: React.FC = ({currencies = []}) => {
    const {theme, setTheme} = useContext(Context);


    // @ts-ignore
    return (
        <View style={{
            height: 120,
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: theme !== 'light' ? '#000' : '#fff',
        }}>

            <Fragment>
                {theme !== 'light' ?
                    <Text style={{
                        color: '#fff',
                        fontSize: 20
                    }}>
                        Infosel
                    </Text>
                    : <Image source={require('../../assets/images/logo.png')} style={{
                        width: '50%',
                        resizeMode: 'contain'
                    }}/>
                }
            </Fragment>

            <Button title={'Theme'} style={{
                color: theme !== 'light' ? '#000' : '#fff',
            }} onPress={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
            }}/>
        </View>
    );
};

export default Home;
