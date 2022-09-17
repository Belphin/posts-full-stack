import { TextField } from '@mui/material';
import React from 'react';

const Search = () => {
	return (
		<TextField
			label="Search"
			variant="standard"
			fullWidth
			sx={{ mb: 2 }}
			type="search"
		/>
	);
};

export default Search;
