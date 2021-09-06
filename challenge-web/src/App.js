import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {Theme} from './components/App/Theme'
import Table from './components/Table';
import './App.css';
import Nav from "./components/App/Nav";

const App: React.FC = ({currencies = []}) => {
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


    pricesWs.onmessage = msg => {
        const values = JSON.parse(msg.data);
        const objectArray = Object.entries(values);
        console.log(values)
        const previewArray = [...newData];
        objectArray.forEach(([key, value]) => {
            let color = newData.find(
                (item: { value: number }) => item.value > value,
            );
            let sameColor = newData.find(
                (item: { value: number }) => item.value === value,
            );
            // eslint-disable-next-line no-unused-expressions
            let percent = previewArray.reduce((previous) => {
                console.log('previous', previous);
                let decreaseValue = previous ? previous - value : previous.value ? previous.value : 0;
                return previous ? (decreaseValue / previous.value) * 100 : 0;
            });
            let calcPercent = percent > 0 ? percent.toFixed(2) : 0;
            let index = newData.findIndex(item => item.type === key);

            newData.splice(index, 1, {
                type: key,
                value,
                color: sameColor ? '#000' : color ? 'green' : 'red',
                percent: calcPercent,
                background: sameColor ? '#fff' : color ? '#00BA2980' : '#D7004D80',
            })
        });
        setInterval(() => setNewData([...newData]), 500);
    }



    return (
        <ThemeProvider theme={Theme}>
            <Nav/>
            <Table data={newData}/>
        </ThemeProvider>
    );
}

export default App;
