import { TextField } from '@mui/material';
import React from 'react';

const Search = (props) => {
	return (
		<TextField
			label="Search"
			variant="standard"
			fullWidth
			sx={{ mb: 2 }}
			type="search"
			{...props}
		/>
	);
};

export default Search;
