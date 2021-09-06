import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App.css';

const TableData: React.FC = ({data}) => {

    const useStyles = makeStyles({
        table: {
            minWidth: '100%',
        },
    });

    const classes = useStyles();

    const List = ({row}) => {
        return (
            <TableRow style={{backgroundColor: row.background}}>
                <TableCell component="th" scope="row" style={{
                    textTransform: 'capitalize'
                }}>
                    {row.type}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
                <TableCell align="right" style={{
                    color: row.color
                }}>{row.percent}</TableCell>
            </TableRow>
        )
    }


    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Charge</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (<List row={row} key={index.toString()}/>))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableData;
