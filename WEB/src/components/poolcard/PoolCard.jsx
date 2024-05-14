import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
//import Box from '@mui/material/Box';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CarImage from '../../assets/maxus-T60-white-mazautos.jpeg'
import InfoIcon from '@mui/icons-material/Info';
import { LoadingBar } from '../loadingBar/LoadingBar';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../context/PoolsContext';

export default function PoolCard({pool}) {

    const navigate = useNavigate()

    const {pools, setPools, setAmount} = useContext(MyContext);
    const formattedPrice = parseFloat(pool.price).toLocaleString("de-DE");
    const formattedSavedPrice = parseFloat(pool.saved_price).toLocaleString("de-DE");
    const carAvailability = pool.quantity - pool.goal_quantity


    const goToDatils = () => {
        navigate(`/details/${pool.id}`);
    }

    const clickHandler = () => {
        const index = pools.findIndex((p) => p.id === pool.id);
        const ClientOrder = [...pools];
        if (typeof ClientOrder[index].quantity !== 'undefined') {
          ClientOrder[index].quantity++;
        } else {
          ClientOrder[index].quantity = 1;
        }
    
        setPools([...ClientOrder]);
        setAmount((prevAmount) => prevAmount + pool.price);
      };

  return (
 <CardActionArea key={pool.id}>
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
        src={`${pool.image}`}
        alt={`${pool.brand} ${pool.model} ${pool.year}`}
        sx={{
            mt:1
        }}
      />

        <CardContent sx={{textAlign:'left'}}>
            <Typography  variant='h5' 
                sx={{ fontSize:'1.2rem'
                    }}>
                {pool.brand} {pool.model} {pool.year}
            </Typography>
            <Typography variant='h5' 
                sx={{fontSize:'0.8rem'
                    }}>
                {pool.version}
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
                   $ {formattedPrice}
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
                        {formattedSavedPrice}
                    </Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    alignItems:'center'
                    }}>
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
        


        <LoadingBar value={pool.quantity} goal={pool.goal_quantity} />

    

        {/* Seccion de boton */}

      <CardContent>
        <Box 
            sx={{
                textAlign: "left"
            }}>
            <Button variant="contained" sx={{color: 'white',
                width: '100%',
                height: '45px', 
                borderRadius: '10px', 
                marginBottom: '20px',  
            }}
            onClick={goToDatils}
            >
                <Typography>
                    Detalles
                </Typography>
            </Button>
        </Box>
      </CardContent>
    </Card>
    </CardActionArea>
  );
}
PoolCard