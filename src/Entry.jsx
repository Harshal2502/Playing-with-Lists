import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './App.css';

function Entry(props) {

    return (
        <Tr>
            <Td>{props.item.FName}</Td>
            <Td>{props.item.LName}</Td>
            <Td>{props.item.Gender}</Td>
            <Td className={props.item.Status ? "trueColor" : "falseColor"}>True</Td>
        </Tr>
    )
}

export default Entry;