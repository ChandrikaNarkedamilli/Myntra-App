import { TabContext, TabList } from "@mui/lab"
import { AppBar, Badge, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, ImageListItem, ImageListItemBar, Menu, MenuItem, Stack, Tab, TextField, Toolbar, Typography } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
import logo from "../images/logo.png";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';





const Wishlist = () => {
  const [profileMenu, setprofileMenu] = useState(null);
  const open = Boolean(profileMenu);
  const handleClick = (event) => {
    setprofileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setprofileMenu(null);
  };

const [wishlistData, setWishlistData] = useState([])

useEffect(() => {
  const storedItems = JSON.parse(localStorage.getItem('myItems') ?? '[]');
  setWishlistData(storedItems)
}, [])

const removeFromWishlist = (item) => {
  const updatedWishlist = wishlistData.filter((wishlistItem) => wishlistItem !== item);
  localStorage.setItem('myItems', JSON.stringify(updatedWishlist));
  setWishlistData(updatedWishlist);
};

const addItemToCart=(item)=>{
  
  const existingCartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]')
  const updatedCartItems =[...existingCartItems,item]
  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems))
  removeFromWishlist(item)
}

  return (
    <>

    <AppBar
      position="static"
      sx={{ bgcolor: "white", margin: "none", padding: "none"}}
    >
      <Toolbar sx={{ margin: "none", padding:'none',  height: '80px' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: 55, marginRight: 16, cursor: "pointer" }}
        />
        <nav>
          <TabContext value={0}>
            <Box>
              <TabList sx={{ textDecoration: 'none', color:'black', fontWeight: 'bold', padding:'none' }}>
                <RouterLink to="/men" style={{ textDecoration: 'none', color:'black', fontWeight: 'bolder' }}>
                  <Tab label="MEN"></Tab>
                </RouterLink>
                <RouterLink to="/women" style={{ textDecoration: 'none' }}>
                  <Tab label="WOMEN"></Tab>
                </RouterLink>
                <RouterLink to="/kids">
                  <Tab label="KIDS" style={{ textDecoration: 'none' }}></Tab>
                </RouterLink>
                <RouterLink to="/home&living" style={{ textDecoration: 'none' }}>
                  <Tab label="HOME & LIVING"></Tab>
                </RouterLink>
                <RouterLink to="/beauty" style={{ textDecoration: 'none' }}>
                  <Tab label="BEAUTY"></Tab>
                </RouterLink>
                <Badge badgeContent="NEW" color="error" >
                  <RouterLink to="/studio" style={{ textDecoration: 'none', color : 'inherit'}}>
                    <Tab label="STUDIO" sx={{padding: 'none', margin: 'none'}}></Tab>
                  </RouterLink>
                </Badge>
              </TabList>
            </Box>
          </TabContext>
        </nav>

        <TextField
          placeholder="Search for products,brands and more"
          size="small"
          fullWidth
          sx={{ width: "30em" }}
        ></TextField>
        <TabContext value={0} >
          <Box >
            <TabList sx={{  mb: 0, color :'black' }}>
              <RouterLink to='/profile' onClick={(event) => event.preventDefault()}>
              <Tab

                label = 'Profile'
                sx={{color : 'black',}}
                icon={
                    
                    
                        // <IconButton onClick={handleClick} sx={{ fontSize: "1.25rem" }}>
                        <PersonOutlineOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                      //   Profile
                      // </IconButton>
                
                  
                }
                id="profile-menu"
                
              ></Tab>
              </RouterLink>
              {/* <Tab
                icon={
                    
                    
                        <IconButton onClick={handleClick} sx={{ fontSize: "1.25rem" }}>
                        <PersonOutlineOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                        Profile
                      </IconButton>
                
                  
                }
                id="profile-menu"
                
              ></Tab> */}

            <RouterLink to='/wishlist'>
            <Tab
                label="Wishlist"
                icon={
                  <FavoriteBorderOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                }
              ></Tab>
              </RouterLink>
              <RouterLink to='/bag'>
              <Tab
                label="Bag"
                icon={<ShoppingBagOutlinedIcon sx={{ fontSize: "1.25rem" }} />}
              ></Tab></RouterLink>
              
            </TabList>
          </Box>
        </TabContext>
      </Toolbar>
      <Menu
        id="profile-menu"
        open={open}
        anchorEl={profileMenu}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><RouterLink to='/login'>Login</RouterLink></MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>
        <MenuItem onClick={handleClose}>Giftcard</MenuItem>
        <MenuItem onClick={handleClose}>Contact us</MenuItem>
      </Menu>
    </AppBar>

    <Stack>
    <Box sx={{paddingLeft : '45px'}}>
      <Typography variant="h6" sx={{padding : '50px 0 0 50px'}}>My Wishlist ({wishlistData.length} items)</Typography>
    </Box>

  
    </Stack>

  {/* <Stack direction="row" spacing={6} sx={{    margin: '40px 0 0 40px'}}> */}
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' ,margin: '40px 0 0 50px' }}>
    {
      wishlistData.length > 0 && wishlistData.map((item, index) => (
          
            <Box key={item.id} sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px',marginLeft:'40px',paddingBottom :'30px'}}>
              <Card sx={{width : '220px', height:'434px',borderRadius: 0 ,position:'relative'}} display ='flex'>
              {/* {console.log(item)} */}
                <CardMedia 
                  component='img'
                  height='220'
                  width='294'
                  image={require(`../images/${item.id}.jpg`)}
                  alt="wishlistimg"
                  sx={{paddingBottom : 'none', width: '220px', height: '294px'}}  
                />

                <IconButton sx={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'white', color: 'black' }} onClick={()=>removeFromWishlist(item)}>
                    <CloseIcon />
                  </IconButton>
                <CardContent sx={{padding :'10px 10px 20px', textAlign:'left'}} >
                  <Typography variant="body1" gutterBottom component='div' sx={{height:'20.8px'}}>{item.title} {item.description}</Typography>
                  <Typography variant="subtitle1" gutterBottom component='div'>{item.price}</Typography>
                  
                </CardContent>
                <Divider sx={{backgroundColor : 'lightgrey'}}/>


                <CardActions sx={{textAlign: 'center',fontSize: '14px'}}>
                  <Button onClick={()=> addItemToCart(item)}>Move to cart</Button>
                </CardActions>
              </Card>
            </Box> 
        ))
    }
    
    </Box>


  {/* </Stack>  */}

    </>
  )
}


export default Wishlist
