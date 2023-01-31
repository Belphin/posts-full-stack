import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography sx={{ flexGrow: 1 }} variant="h6" component="h1">
					Posts
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
