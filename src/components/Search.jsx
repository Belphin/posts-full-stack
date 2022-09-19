import { TextField } from '@mui/material';
import React, { memo } from 'react';

const Search = memo((props) => {
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
});

export default Search;
