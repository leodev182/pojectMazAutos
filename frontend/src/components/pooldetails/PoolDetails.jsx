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
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Grid } from '@mui/material'; // Grid version 1


export default function PoolDetails() {

    const navigate = useNavigate()
    

  return (
    <Box sx={{
            maxWidth: '100vw', 
            maxHeight:'100vh',
            overflow: 'auto',
        }}>
    
    {/* Seccion de la imagen */}
        <Box sx={{
            bgcolor:'#cfd8dc',
            py:2
        }}>
            <CardMedia
                component="img"
                height="296px"
                image= {CarImage}
                alt="Maxus T60"
            />
        </Box>

        {/* Title */}

        <CardContent sx={{textAlign:'center'}}>
            <Typography  variant='h5' 
                sx={{ fontSize:'1.2rem'
                    }}>
                Maxus T60
            </Typography>
        </CardContent>

        {/* Highlights */}
        <CardContent>
            <Box className='highlights' sx={{
                bgcolor:'#b0bec5',
                height:'6vh',
                display:'flex',
                alignItems:'center',
                justifyContent:'center',
                borderRadius:'15px'
            }}>
                <Box sx={{
                    width:'30%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    color:'#37474f'
                }}>
                    <EmojiObjectsIcon/>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        Gasolina
                    </Typography>
                </Box>
                <Box sx={{
                    width:'30%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    color:'#37474f'
                }}>
                    <EmojiObjectsIcon/>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        Manual
                    </Typography>
                </Box>
                <Box sx={{
                    width:'30%',
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    color:'#37474f'
                }}>
                    <EmojiObjectsIcon/>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        1500cc
                    </Typography>
                </Box>
            </Box>
        </CardContent>
        <Divider variant="middle"/>

        {/* Details */}

        <CardContent>
        <Grid container sx={{

          }}>
            <Grid item xs={12} md={2} sx={{
                    textAlign:'left'
                }}>
                <Typography variant='h4' sx={{
                    fontSize:'0.8rem',
                    fontWeight:'500'
                }}>
                    Espacio de Carga
                </Typography>
                <Typography variant='h4' sx={{
                    fontSize:'0.8rem'
                }}>
                    360cmc
                </Typography>
            </Grid>
            <Grid item xs={12} md={2} sx={{
                    textAlign:'left'
                }}>
                <Typography variant='h4' sx={{
                    fontSize:'0.8rem',
                    fontWeight:'500'
                }}>
                    Espacio de Carga
                </Typography>
                <Typography variant='h4' sx={{
                    fontSize:'0.8rem'
                }}>
                    360cmc
                </Typography>
            </Grid>
            <Grid item xs={12} md={2} sx={{
                    textAlign:'left'
                }}>
                <Typography variant='h4' sx={{
                    fontSize:'0.8rem',
                    fontWeight:'500'
                }}>
                    Espacio de Carga
                </Typography>
                <Typography variant='h4' sx={{
                    fontSize:'0.8rem'
                }}>
                    360cmc
                </Typography>
            </Grid>
        </Grid>
        </CardContent>

        
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
    </Box>
  );
}
PoolDetails