import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  styled,
  Badge,
  Avatar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 5,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "0 3px",
    },
  }));

  // Search Bar
  // const Search = styled("div")(({ theme }) => ({
  //   position: "relative",
  //   borderRadius: theme.shape.borderRadius,
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  //   "&:hover": {
  //     backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   },
  //   marginRight: theme.spacing(2),
  //   marginLeft: 0,
  //   width: "100%",
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(3),
  //     width: "auto",
  //   },
  // }));

  // const SearchIconWrapper = styled("div")(({ theme }) => ({
  //   padding: theme.spacing(0, 2),
  //   height: "100%",
  //   position: "absolute",
  //   pointerEvents: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // }));

  // const StyledInputBase = styled(InputBase)(({ theme }) => ({
  //   color: "inherit",
  //   "& .MuiInputBase-input": {
  //     padding: theme.spacing(1, 1, 1, 0),
  //     // vertical padding + font size from searchIcon
  //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  //     transition: theme.transitions.create("width"),
  //     width: "100%",
  //     [theme.breakpoints.up("md")]: {
  //       width: "20ch",
  //     },
  //   },
  // }));
  // END OF SEARCH BAR

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Link to="/">
            <IconButton edge="start">
              <MenuIcon />
            </IconButton>
          </Link>
          <Stack direction="row" spacing={2} flexGrow={1}>
            <Typography variant="h6" textAlign="center">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                Electronicas
              </Link>
            </Typography>
            <Link
              to="/category/iluminacion"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button variant="elevated" color="primary">
                Iluminacion
              </Button>
            </Link>
            <Link
              to="/category/electronics"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button variant="elevated" color="primary">
                Electronics
              </Button>
            </Link>
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Button variant="elevated" color="primary">
                About
              </Button>
            </Link>
          </Stack>
          <Stack spacing={2} direction="row">
            <Link to="/cart">
              <IconButton size="small">
                <StyledBadge badgeContent={2} color="error">
                  <AddShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
            <Avatar
              alt="Guest User"
              src="https://randomuser.me/portraits/women/79.jpg"
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
