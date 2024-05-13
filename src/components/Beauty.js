import { TabContext, TabList } from "@mui/lab"
import { AppBar, Badge, Box, Breadcrumbs,Checkbox,Divider,Drawer,FormControl,FormControlLabel,FormGroup,FormLabel,IconButton,ImageList,ImageListItem,ImageListItemBar,Link, List, ListItem, ListItemIcon, Menu, MenuItem, Stack, Tab, TextField, Toolbar, Typography } from "@mui/material"
import { Link as RouterLink} from "react-router-dom"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logo from "../images/logo.png";
import beauty1 from '../images/beauty1.jpg'

import beauty2 from '../images/beauty2.jpg'
import beauty3 from '../images/beauty3.jpg'
import beauty4 from '../images/beauty4.jpg'
import beauty5 from '../images/beauty5.jpg'
import beauty6 from '../images/beauty6.jpg'
import beauty7 from '../images/beauty7.jpg'
import beauty8 from '../images/beauty8.jpg'
import beauty9 from '../images/beauty9.jpg'
import beauty10 from '../images/beauty10.jpg'
import beauty11 from '../images/beauty11.jpg'
import beauty12 from '../images/beauty12.jpg'
import beauty13 from '../images/beauty13.jpg'
import { useState } from "react";



    const Beauty = () => {
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
            <Link underline='hover' href='#' color='inherit'>Beauty</Link>
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
        img : beauty1,
        id:'beauty1',
        title : 'KALINI',
        description: 'Solid Printed Tunic',
        price :'Rs. 699'

    },{
        img :beauty2,
        id:'beauty2',
        title : 'Nayo',
        description :'Beauty Printed Tunic',
        price :'Rs. 459'

    },{
        img :beauty3,
        id:'beauty3',
        title : 'Vishudh' ,
        description :'Printed Tunic',
        price :'Rs. 329'
    },{
        img :beauty4,
        id:'beauty4',
        title : 'Sangria',
        description :'Embroidered Tunic',
        price :'Rs. 359'
    },{
        img :beauty5,
        id:'beauty5',
        title : 'Juniper' ,
        description :'Floral Embroidered Top',
        price :'Rs. 709'
    },{
        img :beauty6,
        id:'beauty6',
        title :'Nayo' ,
        description :'Sleeveless Printed Top',
        price :'Rs. 879'
    },{
        img :beauty7,
        id:'beauty7',
        title : 'Shae by Sassafras',
        description : 'Beauty Flared Dress',
        price :'Rs. 779'
    },{
        img :beauty8,
        id:'beauty8',
        title : 'Ketch',
        description :'NightSuit',
        price :'Rs. 689'
    },{
        img :beauty9,
        id:'beauty9',
        title : 'Anouk',
        description :'Ethnic Flared Anarkali',
        price :'Rs. 669'
    },{
        img :beauty10,
        id:'beauty10',
        title : 'Vishudh',
        description : 'Printed Anarkali',
        price :'Rs. 599'
    },{
        img :beauty11,
        id:'beauty11',
        title : 'Anouk',
        description : 'Printed A-Line Kurta',
        price :'Rs. 499'
    },{
        img :beauty12,
        id:'beauty12',
        title : 'LifeStyle',
        description : 'Graphic Printed T-shirt',
        price :'Rs. 699'
    },{
        img :beauty13,
        id:'beauty13',
        title : 'Roadster',
        description : 'Solid Beauty T-shirt',
        price :'Rs. 299'
    },
    ]

export default Beauty
