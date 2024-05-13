import { TabContext, TabList } from "@mui/lab";
import {
  AppBar,
  Badge,
  Box,
  Tab,
  TextField,
  Toolbar,
  MenuItem,
  Menu,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logo from "../images/logo.png";
import womenshopping from '../images/womenshopping.jpg'
import React, { useState } from "react";
import homecoupon from '../images/homecoupon.jpeg'
import festivedays1 from '../images/festivedays1.jpeg'
import festivedays2 from '../images/festivedays2.jpeg'
import celebrateimage from '../images/celebrateimage.jpeg'

const HomePage = () => {
  const [profileMenu, setprofileMenu] = useState(null);
  const open = Boolean(profileMenu);
  const handleClick = (event) => {
    setprofileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setprofileMenu(null);
  };
  return (
    <>
    <AppBar
      position="static"
      sx={{ bgcolor: "white", margin: "none", padding: "none"}}
    >
      <Toolbar sx={{ margin: "none", padding:'none',  height: '80px' }}>
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          style={{ height: 55, marginRight: 16, cursor: "pointer" }}
        />
      
      </Link>
      
        <nav>
          <TabContext value={0}>
            <Box>
              <TabList sx={{ textDecoration: 'none', color:'black', fontWeight: 'bold', padding:'none' }}>
                <Link to="/men" style={{ textDecoration: 'none', color:'black', fontWeight: 'bolder' }}>
                  <Tab label="MEN"></Tab>
                </Link>
                <Link to="/women" style={{ textDecoration: 'none' }}>
                  <Tab label="WOMEN"></Tab>
                </Link>
                <Link to="/kids">
                  <Tab label="KIDS" style={{ textDecoration: 'none' }}></Tab>
                </Link>
                <Link to="/home&living" style={{ textDecoration: 'none' }}>
                  <Tab label="HOME & LIVING"></Tab>
                </Link>
                <Link to="/beauty" style={{ textDecoration: 'none' }}>
                  <Tab label="BEAUTY"></Tab>
                </Link>
                <Badge badgeContent="NEW" color="error" >
                  <Link to="/studio" style={{ textDecoration: 'none', color : 'inherit'}}>
                    <Tab label="STUDIO" sx={{padding: 'none', margin: 'none'}}></Tab>
                  </Link>
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
              <Link to='/profile' onClick={(event) => event.preventDefault()}>
              <Tab

                label = 'Profile'
                sx={{color : 'black',}}
                icon={
                    
                    
                        <IconButton onClick={handleClick} sx={{ fontSize: "1.25rem" }}>
                        <PersonOutlineOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                        
                      </IconButton>
                
                  
                }
                id="profile-menu"
                
              ></Tab>
              </Link>
              {/* <Tab
                icon={
                    
                    
                        <IconButton onClick={handleClick} sx={{ fontSize: "1.25rem" }}>
                        <PersonOutlineOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                        Profile
                      </IconButton>
                
                  
                }
                id="profile-menu"
                
              ></Tab> */}

            <Link to='/wishlist'>
            <Tab
                label="Wishlist"
                icon={
                  <FavoriteBorderOutlinedIcon sx={{ fontSize: "1.25rem" }} />
                }
              ></Tab>
              </Link>
              <Link to='/bag'>
              <Tab
                label="Bag"
                icon={<ShoppingBagOutlinedIcon sx={{ fontSize: "1.25rem" }} />}
              ></Tab></Link>
              
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
        <MenuItem onClick={handleClick}><Link to='/login'>Login</Link></MenuItem>
        <MenuItem onClick={handleClick}></MenuItem>
        <MenuItem onClick={handleClick}>Giftcard</MenuItem>
        <MenuItem onClick={handleClick}>Contact us</MenuItem>
      </Menu>
    </AppBar>

    <Stack direction= 'row' spacing={2} sx={{marginTop : '30px'}} />
    <Box sx={{paddingLeft:'50px' ,paddingRight:'50px'}}>
      <img src={homecoupon} alt='coupon' style={{width :'1419px', height:'217px'}} />
    </Box>
    <Box display='flex' >
      <img src={festivedays1}  alt="festivedays" style={{width :'760px', height:'451px'}}/>
      <img src={festivedays2} alt="festivedays" style={{width :'760px', height:'451px'}}/>
    </Box>
    <Box >
      <img src={celebrateimage} alt='celebrateimage' style={{width :'1519px', height:'119px'}} />
    </Box>
    
    {/* <Stack direction='row' spacing={3} sx={{marginTop:'30px '}}>
      <Box sx={{ position: 'relative', marginTop: '40px', width: '65%', height: '67vh' }} >
        <img src={womenshopping} alt="Women" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} />
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column',justifyContent:'center'}} >
        <Typography variant="h3"  sx={{ textAlign: 'center', marginBottom: '8px', marginLeft:'80px' }}>TOPS & TEES</Typography>
        <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '8px' }}>Under ₹499</Typography>
        <Typography variant='subtitle1' sx={{ textAlign: 'center' }}> + Explore </Typography>
      </Box>
    </Stack> */}
    
    
    </>
  );
};

export default HomePage;
