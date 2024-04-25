import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import backgroundImage from '../../assets/mazautos-banner-homepage-autos.jpeg';


const Banner = () => {
  return (
    <>
        {/* Banner para dispositivos mobile */}

        <Box sx={{ display: { xs: 'flex', sm: 'none' },
        width: '100vw',
        height: '45vh',
        bgcolor: 'blue',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}>
            <Button
                variant="contained"
                sx={{color: 'white',
                width: '90vw',
                height: '55px', 
                borderRadius: '15px', 
                marginBottom: '20px',  
                marginTop: '20px'}}
            >
                <Typography>
                    Ver maz autos
                </Typography>
            </Button>
        </Box>

        {/* Banner para dispositivos medianos y  desktops */}

    <Box sx={{ display: { xs: 'none', md: 'flex' } ,
    width: '100vw',
    height: '75vh', 
    bgcolor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }}>
        <Button
            variant="contained"
            sx={{color: 'white',
            width: '90vw',
            height: '55px', 
            borderRadius: '15px', 
            marginBottom: '20px',  
            marginTop: '20px'}}
        >
            <Typography>
                Ver maz autos
            </Typography>
        </Button>
    </Box>
</>
  )
}

export default Banner