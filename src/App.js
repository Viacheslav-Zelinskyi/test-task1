import './App.css';
import { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import api from './api';

export default function App() {
	const [rows, setRows] = useState([]);
	useEffect(() => api(setRows), []);

	const rowsArray = [];
	rows.map((item) => rowsArray.push(item));

	return (
		<div style={{ height: 660, width: '100%' }} className="App">
			<DataGrid rows={rowsArray} columns={columns} pageSize={10} />
		</div>
	);
}

const columns = [
	{ field: 'ResultOrder', headerName: 'Result Order', type: 'number', width: 150 },
	{ field: 'Name', headerName: 'Full Name', width: 200 },
	{ field: 'Rank', headerName: 'Rank', type: 'number', width: 130 },
	{ field: 'Result', headerName: 'Result', width: 130, sortable: false },
	{ field: 'Shootings', headerName: 'Shooting', width: 130, sortable: false },
	{ field: 'ShootingTotal', headerName: 'Shooting Total', width: 130, type: 'number' },
	{ field: 'TotalTime', headerName: 'Total Time', width: 130 },
	{ field: 'WC', headerName: 'WC', width: 130, type: 'number' },
];
