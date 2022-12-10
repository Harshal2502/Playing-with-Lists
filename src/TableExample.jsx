import React, {useState} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './App.css';
import Entry from './Entry';

export default function TableExample(props) {

    const [sort, setSort] = useState(0);

    const items = [
        {
            FName: "Lonnie",
            LName: "O' Connell",
            Gender: "Male",
            Status: true
        },
        {
            FName: "Nikolos",
            LName: "Bolter",
            Gender: "Male",
            Status: false
        },
        {
            FName: "Burgess",
            LName: "Caddens",
            Gender: "Poly",
            Status: false
        },
        {
            FName: "Elissa",
            LName: "Lesslie",
            Gender: "Female",
            Status: false
        },
        {
            FName: "Donaugh",
            LName: "Nusche",
            Gender: "Male",
            Status: true
        },
        {
            FName: "Guillaume",
            LName: "Edgcumbe",
            Gender: "Male",
            Status: true
        },
        {
            FName: "Berti",
            LName: "Coldbath",
            Gender: "Male",
            Status: true
        },
        {
            FName: "Daune",
            LName: "Brumen",
            Gender: "Female",
            Status: false
        },
        {
            FName: "Aigneis",
            LName: "De Ruel",
            Gender: "Female",
            Status: false
        },
        {
            FName: "Khalil",
            LName: "McQuorkel",
            Gender: "Male",
            Status: false
        },
        {
            FName: "Xylina",
            LName: "Coom",
            Gender: "Female",
            Status: false
        },
        {
            FName: "Phillipp",
            LName: "Templeton",
            Gender: "Male",
            Status: true
        }
    ]

    const sortASC = items.sort((a, b) => {
        if (sort == 1) return a.FName.toLowerCase() > b.FName.toLowerCase();
        if (sort == 2) return a.FName.toLowerCase() < b.FName.toLowerCase();
    })

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>FName <select value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="0">Apply Filter</option>
                        <option value="1">Sort by ASC</option>
                        <option value="2">Sort by DESC</option>
                    </select></Th>
                    <Th>LName</Th>
                    <Th>Gender</Th>
                    <Th>status</Th>
                </Tr>
            </Thead>
            <Tbody>
                {items.map(item => {
                    return (
                        <Entry item={item} />
                    )
                })}
            </Tbody>
        </Table>
    );
}