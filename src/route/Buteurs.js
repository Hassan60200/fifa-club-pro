import React from 'react';
import Player from '../assets/player.json';
import * as PropTypes from "prop-types";

function DataGrid(props) {
    return null;
}

DataGrid.propTypes = {
    pageSize: PropTypes.number,
    checkboxSelection: PropTypes.bool,
    rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
    rows: PropTypes.any,
    columns: PropTypes.any,
    disableSelectionOnClick: PropTypes.bool
};
const Buteurs = () => {

    const columns = [
        { field: 'id', headerName: 'Rang', width: 90 },
        {
            field: 'firstName',
            headerName: 'Nom',
            width: 150,
            editable: true,
        },
        {
            field: 'Position',
            headerName: 'Poste',
            width: 150,
            editable: true,
        },
        {
            field: 'Goal',
            headerName: 'But',
            type: 'number',
            width: 110,
            editable: true,
        },
    ];

    console.log(Player.members)

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
};

export default Buteurs;