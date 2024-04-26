import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
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
import { LoadingBar } from '../loadingBar/LoadingBar';
import { useNavigate } from 'react-router-dom';

export default function PoolCard() {

    const navigate = useNavigate()
    

  return (
 <CardActionArea>
    <Card sx={{
            maxWidth: '90vw', 
            maxHeight:'100vh',
            overflow: 'auto',
            border:'solid 0.5px #b0bec5',
            borderRadius:'15px'
        }}>
    
    {/* Seccion de la imagen */}

      <CardMedia
        component="img"
        height="194"
        image= {CarImage}
        alt="Maxus T60"
      />

    {/* Seccion del titulo */}
    
        {/* <CardHeader 
        sx={{
            textAlign: 'left',
            '& .MuiTypography-title': {
                fontSize: '1.2rem',
            },
            '& .MuiTypography-subheader': {
                fontSize: '1rem', // Puedes cambiar el tamaño de fuente del subheader aquí
            },
        }}
            title="Maxus T60"
            subheader="El compañero que llevará tu trabajo y/o tu vida al siguiente nivel."
      /> */}

        <CardContent sx={{textAlign:'left'}}>
            <Typography  variant='h5' 
                sx={{ fontSize:'1.2rem'
                    }}>
                Maxus T60
            </Typography>
            <Typography variant='h5' 
                sx={{fontSize:'0.8rem'
                    }}>
                El compañero que llevará tu trabajo y/o tu vida al siguiente nivel.
            </Typography>
       </CardContent>
      <Divider variant="middle"/>
        
            {/* Seccion de precio */}
      <CardContent>
            <Box 
            sx={{
                textAlign: "left"
            }}>
                <Typography variant='h6' sx={{
                    fontSize:'1.2rem'    
                }}>
                    Precio 
                </Typography>
                <Typography variant='h4' sx={{
                    fontSize:'1.6rem',
                    fontWeight:'500',
                    pt:1,
                    pb:1
                }}>
                    $12.000.000
                </Typography>
                <Box sx={{                        
                        pt:1,
                        pb:2,            
                        display:'flex',
                        alignItems:'end'}}>
                    <Typography variant='p' sx={{
                        mr:'0.8rem'
                    }}> 
                        Ahorro
                    </Typography>
                    <Typography sx={{
                            textDecoration: 'none',
                            fontSize:'0.8rem',
                            mr:'0.2rem'
                        }}>$
                        </Typography>
                    <Typography variant='p' sx={{
                        textDecoration: 'line-through',
                    }}>
                        3.000.000
                    </Typography>
                </Box>
                <Box sx={{display:'flex'}}>
                    <IconButton color="primary" sx={{p: 0, m: 0}}>
                        <InfoIcon sx={{paddingRight:'10px'}}/>
                    </IconButton>
                    <Typography variant='p' sx={{
                        fontSize:'0.8rem'
                    }}>
                        Al unirte al pool obtienes el precio de flota.
                    </Typography>
                </Box>
            </Box>
      </CardContent>
      <Divider variant="middle"/>
        


        <LoadingBar value={5} />

    

        {/* Seccion de boton */}

      <CardContent>
        <Box 
            sx={{
                textAlign: "left"
            }}>
            <Button variant="contained" sx={{color: 'white',
                width: '94%',
                height: '45px', 
                borderRadius: '10px', 
                marginBottom: '20px',  
            }}
            >
            <Typography>
                Ver maz autos
            </Typography>
        </Button>
        </Box>
      </CardContent>
    </Card>
    </CardActionArea>
  );
}
PoolCard