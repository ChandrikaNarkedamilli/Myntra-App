import { AppBar, Box, Button, Card, Checkbox, Divider, IconButton, Link, Stack, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from "../images/logo.png";
import secureicon from '../images/secureicon.png'
import { RiDiscountPercentLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import women2 from '../images/women2.jpg'
import DoneIcon from '@mui/icons-material/Done'; 
import CloseIcon from '@mui/icons-material/Close'; 
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { CheckBoxOutlineBlankOutlined } from '@mui/icons-material';

const Bag = () => {

  const [cartData, setCartData] = useState([])
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]')
    setCartData(storedCartItems)
  }, [])
  

  const removeItemFromCart =(item)=> {
    const updatedCart = cartData.filter((cartItem)=> cartItem !== item)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart))
    setCartData(updatedCart)
  }

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      window.location.reload();
    },5000);
    localStorage.removeItem('cartItems');
  };

  if (orderPlaced) {
    return (
      <Box sx={{ textAlign: 'center', padding: '50px' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Thanks for shopping with us!
        </Typography>
        <Typography variant="body1">
          Your order has been placed successfully.
        </Typography>
      </Box>
    );
  }

  return (
    <>
    <AppBar position="static"
      sx={{ bgcolor: "white",height : '78.8px', width : '100%',borderBottom: '1px solid #F5F5F6',display:'flex'}} elevation={0}>
      <Toolbar sx={{width :'100%', height :'78px', margin :'0px 60px 0px 50px'}} >
      <img
          src={logo}
          alt="Logo"
          style={{ height: '47px', cursor: "pointer" }}
        />
        <Typography variant='subtitle2' sx={{letterSpacing: '3px',fontSize : '12px',marginLeft : '472px'}}>
          <Link sx={{color : '#696b79',fontWeight:'700'}}>BAG----------</Link><Link sx={{color : '#696b79',fontWeight:'700'}}>ADDRESS--------</Link><Link sx={{color : '#696b79',fontWeight:'700'}}>PAYMENT</Link>
        </Typography>
        <div style={{fontSize : '12px',marginLeft : '400px', display:'flex'}}>
        <img src={secureicon} alt='secure' style={{height : '28px', width : '26px'}} />
        <Typography variant='subtitle2' sx={{color:'black',letterSpacing: '3px'}}>100% SECURE</Typography>
        </div>

      </Toolbar>
    </AppBar>
    {/* <Stack sx={{paddingTop : '32px', paddingRight: '20px', display : 'inline-block'}}> */}

    <Box sx={{display :'flex' }}>
    <Card sx={{minHeight : '545px', minWidth:'593px', marginLeft:'269px',borderRadius:'0px',paddingTop:'32px', paddingRight:'20px', flex:'grow'}}>
      <Box style={{backgroundColor:'#fff6f4',height:'40px', width:'570px', border :'1px solid #eaeaec',marginBottom:'8px',padding:'16px', display: 'grid' }}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack>
        <Typography sx={{ fontSize: '14px',width:'100%' }} variant='body1'>Deliver to: <b>Chandrika, 500019</b></Typography>
        <Typography sx={{ fontSize: '12px',width:'100%'  }} variant='body2'>Badruka Women's hostel and PG,Opp DLF Gate 3,APHB Colony</Typography> 
        </Stack>
        <Button style={{padding:'8px 16px',alignSelf: 'center', justifySelf: 'end',backgroundColor :'#fff6f4',border:'1px solid #ff3f6c',color: '#ff3f6c',fontSize: '12px' }} size='small'>CHANGE ADDRESS</Button>
      </div>
      </Box>
      <Box sx={{ border :'1px solid #eaeaec',height:'78px', width:'556px',padding:'16px 18px 12px',marginBottom:'10px'}}>
        <Stack>
          <Stack direction='row' marginBottom='12px'>
          <IconButton sx={{padding :'0px'}}>
            <RiDiscountPercentLine style={{height:'18px',width:'18px'}}/>
          </IconButton>
          <Typography sx={{fontSize:'14px',marginLeft:'8px'}}><b>Available offers</b></Typography>
          </Stack>         
          <Typography sx={{fontSize:'13px',paddingLeft:'8px',marginBottom:'8px'}}>10% Instant Discount on Citi Credit and Debit Cards on a minimum spend of ₹3,000. TCA</Typography>
          <span style={{color: '#ff3f6c',fontWeight:'700',fontSize:'14px',paddingLeft:'17px'}}>
            Show More
          </span>
        </Stack>
      </Box>
      <Stack direction='row' alignItems='center' margin ='26px 0px'> 
        <Checkbox 
            icon={<CheckBoxOutlineBlankOutlinedIcon />} 
            checkedIcon={<CheckBoxIcon />} 
            style={{color:'#ff3f6c'}} defaultChecked
        />
        <Typography sx={{fontWeight: '700', fontSize:'16px'}}>2/2 Items selected</Typography>
        <Typography sx={{marginLeft: '196px', fontSize:'12px',padding:'6px 24px 6px 0px'}}>REMOVE</Typography>
        <Divider orientation='vertical' sx={{border : '1px solid #eaeaec', height: '24px' }}/>
        <Typography sx={{ fontSize:'12px',padding:'6px 0px 6px 24px'}}>MOVE TO WISHLIST</Typography>
      </Stack>

      <Stack>
        {
          cartData.length > 0 && cartData.map((item,index)=>(
          <Box sx={{width:'575px', height:'176px', border :'1px solid #eaeaec', padding:'12px 12px 0px',position : 'relative', borderRadius:'4px',backgroundColor:'#fff ', margin:'8px'}}>
            <Stack direction='row'>
              <img src={require(`../images/${item.id}.jpg`)} alt='womenimage' style={{width:'111px', height:'148px'}}/>
              <Box paddingLeft='12px' lineHeight='1.42857143' width='439px' height='167px'>
                <Typography sx={{fontSize: '14px', fontWeight:'700'}}>{item.title}</Typography>
                <Typography sx={{fontSize: '14px'}}>{item.description}</Typography>
                <Typography sx={{fontSize: '12px',color:'#94969f'}}>Sold by: SUN SHINE KNITWEAR</Typography>
                <Stack direction='row' spacing={1}>
                  <Box w='50px' h='16px' backgroundColor='#f5f5f6' fontSize= '14px' fontWeight='700'>Size : L</Box>
                  <Box w='50px' h='16px' backgroundColor='#f5f5f6' fontSize= '14px' fontWeight='700'>Qty: 1</Box>
                  {/* <Box w='60px' h='10px' border='1px solid #ff3f6c' fontSize= '9px'>9 left</Box> */}
                </Stack>
                <Typography sx={{fontSize: '14px', fontWeight:'700'}}>{item.price}</Typography>
                <Stack direction='row' alignItems='center'>
                  <TbTruckReturn w='15px' h='15px' marginRight ='6px'/>
                  <Typography fontSize='12px'> 14 days return available</Typography>
                </Stack>
                <Stack direction='row' alignItems='center' >
                  <DoneIcon sx={{color:'#43ba53'}} w='12px' h='10px'/>
                  <Typography fontSize='12px'>Delivery by <b>7 May 2024</b></Typography>
                </Stack>  
              </Box> 
              <IconButton sx={{width:'16px',height:'16px'}} onClick={()=>removeItemFromCart(item)}>
                <CloseIcon w='14' h='14' padding='12px 12px'  />
              </IconButton>
              
            </Stack>   
          </Box>
          ))
        }
        
      </Stack>
      
    </Card>



    <Card sx={{height : '748px', width:'336px',borderRadius:'0px', paddingRight:'10px'}}>
      <Box sx={{padding : '24px 0px 0px 16px'}} >
        <Typography sx={{fontSize:'12px', fontWeight:'700',color :'#535766'}} marginBottom='8px'>COUPONS</Typography>
        <Stack direction='row' alignItems='center' padding='0px 0px 12px 0px'>
          <IconButton w='18px' h='18px' color='black'><LocalOfferOutlinedIcon /></IconButton>
            <Typography sx={{fontSize:'14px', fontWeight:'700'}} marginRight='85px' >Apply Coupons</Typography>
            <Button size ='small' variant='outlined' sx={{padding:'4px 16px', width:'65.99' , height :'26.4px',fontSize:'12px', color: '#ff3f6c',border:'1px solid #ff3f6c'}}>Apply</Button>
          
        </Stack>
        <Divider width='310px' color='#eaeaec' />
        <Stack alignItems='flex-start' paddingBottom='24px'>
          <Typography sx={{fontWeight:'700', fontSize:'12px' ,margin:'12px 0px 24px'}}>SUPPORT TRANSFORMATIVE SOCIAL WORK IN INDIA</Typography>
          <Stack direction='row' alignItems='center'>
            <Checkbox 
              sx={{padding:'0px',marginRight:'16px'}}
              icon={<CheckBoxOutlineBlankOutlinedIcon w='16' h='16'/>} 
              checkedIcon={<CheckBoxIcon sx={{color:'#ff3f6c'}}/>} 
            />
            <Typography sx={{fontWeight:'700', fontSize:'14px'}}>Donate and make difference</Typography>
          </Stack>
          <Stack direction='row' spacing={2} margin='20px 0px 8px'>
            <Box w='50px' h='16px' fontSize= '14px' fontWeight='700' border='1px solid #eaeaec' borderRadius='40px' padding='8px 16px'>₹10</Box>
            <Box w='50px' h='16px' fontSize= '14px' fontWeight='700' border='1px solid #eaeaec' borderRadius='40px' padding='8px 16px'>₹20</Box>
            <Box w='50px' h='16px' fontSize= '14px' fontWeight='700' border='1px solid #eaeaec' borderRadius='40px' padding='8px 16px'>₹50</Box>
            <Box w='50px' h='16px' fontSize= '14px' fontWeight='700' border='1px solid #eaeaec' borderRadius='40px' padding='8px 16px'>₹100</Box>
          </Stack>
          <Typography sx={{fontSize:'14px', fontWeight:'700', color:'#FF3F6C'}}>Know More</Typography>
        </Stack>
        <Divider width='310px' color='#eaeaec' />
        <Stack>
          <Typography sx={{fontSize:'12px',fontWeight:'700',color :'#535766',margin:'24px 0 16px'}}>PRICE DETAILS(1 item)</Typography>
          <Stack direction='row' alignItems='center' justifyContent='space-between' marginBottom='12px'>
            <Typography sx={{fontSize :'14px'}}>Total MRP</Typography>
            <Typography sx={{fontSize :'14px'}}>₹1,995</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between' marginBottom='12px'>
            <Typography sx={{fontSize :'14px'}}>Discount on MRP</Typography>
            <Typography sx={{color :'light green',fontSize:'14px'}}>-₹1,257</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between' marginBottom='12px'>
            <Typography sx={{fontSize :'14px'}}>Coupon Discount</Typography>
            <Typography sx={{color:'#FF3F6C',fontSize :'14px'}}>Apply Coupon</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between' marginBottom='12px'>
            <Typography sx={{fontSize :'14px'}}>Platform Fee</Typography>
            <Typography sx={{fontSize :'14px'}}>₹20</Typography>
          </Stack>
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Typography sx={{fontSize :'14px'}}>Shipping Fee</Typography>
            <Typography sx={{fontSize :'14px'}}>Free</Typography>          
          </Stack>
          <Typography sx={{fontSize:'12px',marginBottom:'8px '}}>Free Shipping for you</Typography>
          <Divider width='310px' color='#eaeaec' />
        </Stack>
        <Stack direction='row' paddingTop='16px' alignItems='center' justifyContent='space-between' marginBottom='16px'>
          <Typography sx={{fontSize:'15px', fontWeight:'700'}}>Total Amount</Typography>
          <Typography sx={{fontSize :'15px', fontWeight:'700'}}>₹1,496</Typography> 
        </Stack>
        <Button
              variant='contained'
              onClick={handlePlaceOrder}
              sx={{
                width: '100%',
                backgroundColor: '#ff3f6c',
                marginTop: '16px',
                '&:hover': {
                  backgroundColor: '#ff3f6c'
                }
              }}
            >
              PLACE ORDER
            </Button>      </Box>
    </Card>
    </Box>
    {/* </Stack> */}
    
    </>
  )
}

export default Bag
