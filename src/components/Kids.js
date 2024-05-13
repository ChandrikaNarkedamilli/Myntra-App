import { TabContext, TabList } from "@mui/lab"
import { AppBar, Badge, Box, Breadcrumbs,Checkbox,Divider,Drawer,FormControl,FormControlLabel,FormGroup,FormLabel,IconButton,ImageList,ImageListItem,ImageListItemBar,Link, List, ListItem, ListItemIcon, Menu, MenuItem, Stack, Tab, TextField, Toolbar, Typography } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logo from "../images/logo.png";
import kid1 from '../images/kid1.jpg'

import kid2 from '../images/kid2.jpg'
import kid3 from '../images/kid3.jpg'
import kid4 from '../images/kid4.jpg'
import kid5 from '../images/kid5.jpg'
import kid6 from '../images/kid6.jpg'
import kid7 from '../images/kid7.jpg'
import kid8 from '../images/kid8.jpg'
import kid9 from '../images/kid9.jpg'
import kid10 from '../images/kid10.jpg'
import kid11 from '../images/kid11.jpg'
import kid12 from '../images/kid12.jpg'
import kid13 from '../images/kid13.jpg'
import { useState } from "react";



const Kid = () => {
  const [profileMenu, setprofileMenu] = useState(null);
  const open = Boolean(profileMenu);
  const handleClick = (event) => {
    setprofileMenu(event.currentTarget);
  };
  const handleClose = () => {
    setprofileMenu(null);
  };

  const addToWishlist = (item) => {
    const existingItems = JSON.parse(localStorage.getItem('myItems') ?? '[]');
    const isDuplicate = existingItems.some((wishlistItem) => wishlistItem.id === item.id); 
    if (!isDuplicate) {
      const updatedItems = [...existingItems, item];
      localStorage.setItem('myItems', JSON.stringify(updatedItems));
    } else {
      console.log('Item already exists in wishlist');
    }
  };
  
  
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

    <Box m={2}>
      <Breadcrumbs separator='/' sx={{ fontSize: '14px', paddingLeft:'10px' }}> 
        <Link underline='hover' href='/' color='inherit'>Home</Link>
        <Link underline='hover' href='#' color='inherit'>Kid</Link>
        <Link underline='hover' href='#' color='inherit'>Clothing</Link>
      </Breadcrumbs>
    </Box>
    <Box>
      <Typography variant="body1" sx={{fontWeight : '600', paddingBottom :'15px', paddingLeft:'25px'}}>FILTERS</Typography>
    </Box>
    <Divider />
      <Box sx={{ display: 'flex' }}>
      <Stack direction='row' spacing={3}  sx={{ flexGrow: 1 }}>
          <Box>
            <Typography variant="h6"  sx={{ fontSize: "14px", fontWeight: "700", paddingTop: "20px", paddingBottom: "15px", paddingLeft: "25px" }}>CATEGORIES</Typography>
            <FormGroup sx={{paddingLeft : '25px'}} >
              <FormControlLabel control={<Checkbox />} label="Kurtis" />       
              <FormControlLabel control={<Checkbox />} label="T-Shirts" />
              <FormControlLabel control={<Checkbox />} label="Dresses" />
              <FormControlLabel control={<Checkbox />} label="Jeans" />
              <Divider sx={{width :'100%'}}/>
            </FormGroup>
            
          </Box> 
            <Divider orientation="vertical" flexItem sx={{  height: '100%' }} />
          <Box>
            <Stack sx={{display: 'flex',width : 1267.2, height: 4126}}>
            <ImageList 
                sx={{width :'1232px', height:'auto'}}
                cols ={5}
                gap ={16}
              >
                {
                  itemData.map(item =>(
                    <ImageListItem key={item.img}>
                      <img src={item.img} alt={item.title} style={{ width : '210px' , height: '280px'}}/>
                      <ImageListItemBar
                        title={item.title}
                        subtitle={
                        <>
                        <span>{item.description}</span><br />
                        <span>{item.price}</span>
                        </>
                        }
                        actionIcon={
                          <IconButton onClick={()=>addToWishlist(item)}>
                              <FavoriteBorderOutlinedIcon />
                          </IconButton>
                      }
                        
                        position="below"
                      />
                    </ImageListItem>
                  ))
                }

              </ImageList>
            </Stack>
          </Box>      
    </Stack>
    </Box>
    
      
    

    
    </>
  )
}

const itemData = [
  {
    img : kid1,
    id:'kid1',
    title : 'KALINI',
    description: 'Solid Printed Tunic',
    price :'Rs. 699'

  },{
    img :kid2,
    id:'kid2',
    title : 'Nayo',
    description :'Men Printed Tunic',
    price :'Rs. 459'

  },{
    img :kid3,
    id:'kid3',
    title : 'Vishudh' ,
    description :'Printed Tunic',
    price :'Rs. 329'
  },{
    img :kid4,
    id:'kid4',
    title : 'Sangria',
    description :'Embroidered Tunic',
    price :'Rs. 359'
  },{
    img :kid5,
    id:'kid5',
    title : 'Juniper' ,
    description :'Floral Embroidered Top',
    price :'Rs. 709'
  },{
    img :kid6,
    id:'kid1',
    title :'Nayo' ,
    description :'Sleeveless Printed Top',
    price :'Rs. 879'
  },{
    img :kid7,
    id:'kid7',
    title : 'Shae by Sassafras',
    description : 'Men Flared Dress',
    price :'Rs. 779'
  },{
    img :kid8,
    id:'kid8',
    title : 'Ketch',
    description :'NightSuit',
    price :'Rs. 689'
  },{
    img :kid9,
    id:'kid9',
    title : 'Anouk',
    description :'Ethnic Flared Anarkali',
    price :'Rs. 669'
  },{
    img :kid10,
    id:'kid10',
    title : 'Vishudh',
    description : 'Printed Anarkali',
    price :'Rs. 599'
  },{
    img :kid11,
    id:'kid11',
    title : 'Anouk',
    description : 'Printed A-Line Kurta',
    price :'Rs. 499'
  },{
    img :kid12,
    id:'kid12',
    title : 'LifeStyle',
    description : 'Graphic Printed T-shirt',
    price :'Rs. 699'
  },{
    img :kid13,
    id:'kid13',
    title : 'Roadster',
    description : 'Solid Men T-shirt',
    price :'Rs. 299'
  },
]

export default Kid
