import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "../styles/Search";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography sx={{ flexGrow: 1 }} variant="h6" component="h1">
					Posts
				</Typography>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
					/>
				</Search>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
