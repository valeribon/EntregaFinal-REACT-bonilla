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
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 5,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "0 3px",
    },
  }));

  const { cart } = useContext(CartContext);

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
                <StyledBadge badgeContent={cart.length} color="error">
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
