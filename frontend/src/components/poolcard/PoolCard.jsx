import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CarImage from '../../assets/maxus-T60-white-mazautos.jpeg'
import InfoIcon from '@mui/icons-material/Info';
// import { LoadingBar } from "@components/loadingBar/LoadingBar.jsx"
import { useNavigate } from 'react-router-dom';

export default function PoolCard() {

    const navigate = useNavigate()
    

  return (

    <Card sx={{ maxWidth: '90vw', maxHeight:'100vh',overflow: 'auto'}}>
    
    {/* Seccion de la imagen */}

      <CardMedia
        component="img"
        height="194"
        image= {CarImage}
        alt="Maxus T60"
      />

    {/* Seccion del titulo */}
    
        <CardHeader 
            sx={{textAlign:'left'}}
            title="Maxus T60"
            subheader="El compañero que llevará tu trabajo y/o tu vida al siguiente nivel."
      />
      <Divider variant="middle"/>

      {/* Seccion de precio */}

      <CardContent>
            <Box 
            sx={{
                textAlign: "left"
            }}>
                <Typography variant='h6'>
                    Precio 
                </Typography>
                <Typography variant='h4'>
                    $12.000.000
                </Typography>
                <Typography variant='p' sx={{textDecoration: 'line-through'}}>
                    $3.000.000
                </Typography>
                <Box sx={{display:'flex'}}>
                    <IconButton color="primary" sx={{p: 0, m: 0}}>
                        <InfoIcon sx={{paddingRight:'10px'}}/>
                    </IconButton>
                    <Typography variant='p' sx={{}}>
                        Al unirte al pool obtienes el precio de flota.
                    </Typography>
                </Box>
            </Box>
      </CardContent>
      <Divider variant="middle"/>
        
        {/* Seccion de detalle */}

      <CardContent>
            <Box 
            sx={{
                textAlign: "left"
            }}>
        <Button
            variant="contained"
            sx={{color: 'white',
            width: '90%',
            height: '45px', 
            borderRadius: '15px', 
            marginBottom: '20px',  
            marginTop: '20px'}}
        >
            <Typography>
                Ver maz autos
            </Typography>
        </Button>
        
            {/* <LoadingBar value={8} /> */}
            </Box>
      </CardContent>
    </Card>
  );
}
PoolCard