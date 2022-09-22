import { AppBar, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "../styles/Search";
import { useRef } from "react";
import useDebounce from "../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { searchPost } from "../asyncActions/Posts";

const Navbar = () => {
	const dispatch = useDispatch();
	const input = useRef();
	const debounce = useDebounce((value) => {
		dispatch(searchPost(value));
	}, 700);

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
						value={input.current}
						onChange={(e) => {
							input.current = e.target.value;
							debounce(e.target.value);
						}}
					/>
				</Search>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
