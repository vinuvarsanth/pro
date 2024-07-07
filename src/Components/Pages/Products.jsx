import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../appStore";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from "./Navbar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description of product 1',
    price: 29.99,
    image: 'https://cdn.pixabay.com/photo/2017/07/31/18/29/laptop-2559792_640.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description of product 2',
    price: 19.99,
    image: 'https://cdn.pixabay.com/photo/2019/09/25/14/09/gadgets-4503773_1280.jpg'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a description of product 3',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a description of product 4',
    price: 24.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPZRV7btO_ghrzt1vrQXvko4n5IIaNSfPDJ3TorziCiOhw5cRFfLRQMRwUMMPUYkccdw&usqp=CAU'
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is a description of product 5',
    price: 34.99,
    image: 'https://4.img-dpreview.com/files/p/E~TC4x3S590x0~articles/2527438260/C2618145-EFC2-40C3-B9A9-C3A8082C28A7.jpeg'
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'This is a description of product 6',
    price: 44.99,
    image: 'https://s.alicdn.com/@sc04/kf/H024144e77ea8411aa05cf26946ef86d9t.jpg_300x300.jpg'
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'This is a description of product 7',
    price: 54.99,
    image: 'https://static.toiimg.com/thumb/imgsize-10404,msid-105440003,width-375,height-210,resizemode-75/105440003.jpg'
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'This is a description of product 8',
    price: 64.99,
    image: 'https://s.alicdn.com/@sc04/kf/H0b0555d61a7d47a2bbe6813ce46ec3b4K.jpg_300x300.jpg'
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'This is a description of product 9',
    price: 74.99,
    image: 'https://i.pinimg.com/736x/a1/b8/af/a1b8af80844532399cc7d5c9d1cbe2af.jpg'
  },
  {
    id: 10,
    name: 'Product 10',
    description: 'This is a description of product 10',
    price: 84.99,
    image: 'https://i.pinimg.com/564x/34/43/e4/3443e4eb620ef0c50c037c14941b6ed8.jpg'
  }
];

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 2, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="150"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default function Product() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const theme = useTheme();
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);

  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton>
              {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }} onClick={() => { navigate("/home") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <HomeIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Products") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
                <ListItemText primary="Products" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }} onClick={() => { navigate("/Analytics") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ShoppingCartIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
                <ListItemText primary="Analytics" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }} onClick={() => { navigate("/settings") }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <SettingsIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                />
                <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Products</h1>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
