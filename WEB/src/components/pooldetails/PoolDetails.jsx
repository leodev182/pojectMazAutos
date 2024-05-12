import { useContext } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CarImage from '../../assets/maxus-T60-white-mazautos.jpeg'
import InfoIcon from '@mui/icons-material/Info';
import CarColor from '../carcolor/CarColor';
import { LoadingBar } from '../loadingBar/LoadingBar';
import { useNavigate } from 'react-router-dom';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/PoolsContext';

export default function PoolDetails() {

    const navigate = useNavigate()
    const { pools, setPools, amount,setAmount } = useContext(MyContext);
    const { id } = useParams()
    const poolIdsAsString = pools.map(pool => String(pool.id));
    const index = poolIdsAsString.findIndex((poolId) => poolId === id);
    const poolDetails = pools[index];

    const goToCheckout = () => {
        navigate(`/checkout/${poolDetails.id}`);
    }
    const formattedPrice = parseFloat(poolDetails.price).toLocaleString("de-DE");
    const formattedSavedPrice = parseFloat(poolDetails.saved_price).toLocaleString("de-DE");

  return (
<>

    <Box  sx={{
            maxWidth: '100vw', 
            maxHeight:'100vh',
            overflow: 'auto',
            display: {xs:'auto', md:'auto',lg:'none'}
        }}>
    
    {/* Seccion de la imagen */}
        <Box sx={{
            bgcolor:'#cfd8dc',
            py:2
        }}>
            <CardMedia
                component="img"
                height="60%"
                src={`${poolDetails.image}`}
                alt={`${poolDetails.brand} ${poolDetails.model} ${poolDetails.year}`}
            />
        </Box>

        {/* Title */}

        <CardContent sx={{textAlign:'center'}}>
            <Typography  variant='h5' sx={{ 
                    fontSize:'1.2rem',
                    my:0
                }}>
                {poolDetails.brand} {poolDetails.model} {poolDetails.year}
            </Typography>
        </CardContent>

        {/* Highlights mobile */}
        <CardContent>
            <Box className='highlights' sx={{
                bgcolor:'#b0bec5',
                height:'6vh',
                display:'flex',
                alignItems:'center',
                justifyContent:{xs:'center', md:'space-around'},
                borderRadius:'15px'
            }}>
                <Box sx={{
                    width:{xs:'30%', md:'20%', lg:'30%'},
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    color:'#37474f'
                }}>
                    <EmojiObjectsIcon/>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        {poolDetails.fuel}
                    </Typography>
                </Box>
                <Box sx={{
                    width:{xs:'30%', md:'20%', lg:'40%'},
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    color:'#37474f'
                }}>
                    <EmojiObjectsIcon/>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        {poolDetails.transmission}
                    </Typography>
                </Box>
                <Box sx={{
                    width:{xs:'30%', md:'20%', lg:'30%'},
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-around',
                    color:'#37474f'
                }}>
                    <EmojiObjectsIcon/>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        {poolDetails.type}
                    </Typography>
                </Box>
            </Box>
        </CardContent>
        <Divider variant="middle"/>

        {/* Price Section */}

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

    {/* Details */}

        {/* Characteristics */}

        <CardContent>
            <Grid container sx={{
                display:'flex',
                justifyContent:'space-between'
            }}>
                <Grid item xs={5.4} md={6}  sx={{
                        py:1,
                        px:1,
                        textAlign:'left',
                        height:'6.5vh',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between'
                    }}>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem',
                        fontWeight:'500'
                    }}>
                        Motor
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        {poolDetails.engine}
                    </Typography>
                </Grid>
                <Grid item xs={5.4} md={6}  sx={{
                        py:1,
                        px:1,
                        textAlign:'left',
                        height:'6.5vh',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between'
                    }}>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem',
                        fontWeight:'500'
                    }}>
                        Capacidad de carga
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        {poolDetails.capacity} Kg
                    </Typography>
                </Grid>
                <Grid item xs={5.4} md={6}  sx={{
                        py:1,
                        px:1,
                        textAlign:'left',
                        height:'6.5vh',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between'
                    }}>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem',
                        fontWeight:'500'
                    }}>
                        Asientos
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        {poolDetails.seatings} Asientos
                    </Typography>
                </Grid>
                <Grid item xs={5.4} md={6}  sx={{
                        py:1,
                        px:1,
                        textAlign:'left',
                        height:'6.5vh',
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between'
                    }}>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem',
                        fontWeight:'500'
                    }}>
                        Automonía
                    </Typography>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem'
                    }}>
                        {poolDetails.range} Km
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        <Divider variant="middle"/>
        
        {/* ColorSection */}
        
        <CardContent>        
            <Grid container sx={{
                display:'flex', 
                justifyContent: 'left'
            }}>
                <Grid item xs={2.4} sx={{
                    textAlign:'center', 
                    height:'6.5vh', 
                    display:'flex', 
                    justifyContent:'center', 
                    alignItems:'center'
                }}>
                    <Typography variant='h4' sx={{
                        fontSize:'0.8rem', 
                        fontWeight:'500'
                    }}>
                        Colors
                    </Typography>
                </Grid>
                <CarColor poolDetails={poolDetails} />
            </Grid>
        </CardContent>
        <Divider variant="middle"/>

        {/* Loading bar */}

        <CardContent sx={{
            mx:0,
            px:0
        }}>

            <LoadingBar value={5} goal={10}/>

        </CardContent>

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
            >
            <Typography>
                Iniciar reserva
            </Typography>
        </Button>
        </Box>
      </CardContent>
    </Box>













    {/* ////////////////////////////////////////////////////////// */}












    {/* desktop devices */}

    <Container maxWidth="" xs={{width:'100vw'}} md={{width:'90vw'}} sx={{
          display:'flex',
          justifyContent:'center',

          overflow: 'auto',
          display: {xs:'none', md:'none',lg:'block'}
        }}>
        <Grid container gap={4} sx={{
            my:2,
            display:'flex',
            justifyContent:'center'
            }}>
            <Grid className='item desktop detailes' item xs={7.5} sx={{
                height:'86vh',

                border:'solid 1px #CFD8DB',
                borderRadius:'15px'
            }}>
                <Box sx={{
                    bgcolor:'#cfd8dc',
                    py:2
                }}>
                    <CardMedia
                        component="img"
                        height="60%"
                        src={`${poolDetails.image}`}
                        alt={`${poolDetails.brand} ${poolDetails.model} ${poolDetails.year}`}
                    />
                </Box>

                {/* Loading bar */}

                <CardContent sx={{
                    mx:0,
                    px:0
                }}>
                    <LoadingBar value={poolDetails.quantity} goal={poolDetails.goal_quantity} />
                </CardContent>
                <Divider variant="middle"/>
                <Box sx={{
                    p:2,
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
            </Grid>

            <Grid className='item desktop detailes' item xs={4} sx={{
                height:'86vh',

                border:'solid 1px #CFD8DB',
                borderRadius:'15px'
            }}>
                 {/* Title */}

                <CardContent sx={{textAlign:'center'}}>
                    <Typography  variant='h5' sx={{ 
                            fontSize:'1.2rem',
                            my:0
                        }}>
                        {poolDetails.brand} {poolDetails.model} {poolDetails.year}
                    </Typography>
                </CardContent>

                    {/* Price Section */}

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
                        </Box>
                </CardContent>
                <Divider variant="middle"/>

                {/* Details */}

                {/* Highlights */}

                <CardContent>
                    <Box className='highlights' sx={{
                        bgcolor:'#b0bec5',
                        height:'6vh',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:{xs:'center', md:'space-around'},
                        borderRadius:'15px'
                    }}>
                        <Box sx={{
                            width:{xs:'30%', md:'20%', lg:'15%'},
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around',
                            color:'#37474f'
                        }}>
                            <EmojiObjectsIcon/>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem'
                            }}>
                                {poolDetails.fuel}
                            </Typography>
                        </Box>
                        <Box sx={{
                            width:{xs:'30%', md:'20%', lg:'15%'},
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around',
                            color:'#37474f'
                        }}>
                            <EmojiObjectsIcon/>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem'
                            }}>
                                {poolDetails.transmission}
                            </Typography>
                        </Box>
                        <Box sx={{
                            width:{xs:'30%', md:'20%', lg:'15%'},
                            display:'flex',
                            alignItems:'center',
                            justifyContent:'space-around',
                            color:'#37474f'
                        }}>
                            <EmojiObjectsIcon/>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem'
                            }}>
                                {poolDetails.type}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
                <Divider variant="middle"/>

                {/* Characteristics */}

                <CardContent>
                    <Grid container sx={{
                        height:'17.8vh',
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <Grid item xs={5.4} md={6}  sx={{
                                py:1,
                                px:1,
                                textAlign:'left',
                                height:'6.5vh',
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'space-between'
                            }}>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem',
                                fontWeight:'500'
                            }}>
                                Motor
                            </Typography>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem'
                            }}>
                                {poolDetails.engine}
                            </Typography>
                        </Grid>
                        <Grid item xs={5.4} md={6}  sx={{
                                py:1,
                                px:1,
                                textAlign:'left',
                                height:'6.5vh',
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'space-between'
                            }}>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem',
                                fontWeight:'500'
                            }}>
                                Capacidad de carga
                            </Typography>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem'
                            }}>
                                {poolDetails.capaci}
                            </Typography>
                        </Grid>
                        <Grid item xs={5.4} md={6}  sx={{
                                py:1,
                                px:1,
                                textAlign:'left',
                                height:'6.5vh',
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'space-between'
                            }}>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem',
                                fontWeight:'500'
                            }}>
                                Asientos
                            </Typography>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem'
                            }}>
                                {poolDetails.seatings}
                            </Typography>
                        </Grid>
                        <Grid item xs={5.4} md={6}  sx={{
                                py:1,
                                px:1,
                                textAlign:'left',
                                height:'6.5vh',
                                display:'flex',
                                flexDirection:'column',
                                justifyContent:'space-between'
                            }}>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem',
                                fontWeight:'500'
                            }}>
                                Automonía
                            </Typography>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem'
                            }}>
                                {poolDetails.range}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider variant="middle"/>


                {/* Color Section */}

                <CardContent>
                    <Grid container sx={{
                        display:'flex', 
                        justifyContent: 'left'
                    }}>
                        <Grid item xs={2.4} sx={{
                            textAlign:'center', 
                            height:'6.5vh', 
                            display:'flex', 
                            justifyContent:'center', 
                            alignItems:'center'
                        }}>
                            <Typography variant='h4' sx={{
                                fontSize:'0.8rem', 
                                fontWeight:'500'
                            }}>
                                Colors
                            </Typography>
                        </Grid>
                        <CarColor poolDetails={poolDetails} />
                    </Grid>
                </CardContent>
                <Divider variant="middle"/>

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
                        onClick={goToCheckout}
                        >
                            <Typography>
                                Iniciar reserva
                            </Typography>
                        </Button>
                    </Box>
                    <Box 
                        sx={{
                            textAlign: "left"
                        }}>
                        <Button variant="plain" sx={{
                            width: '100%',
                            height: '15px', 
                            borderRadius: '10px', 
                            marginBottom: '20px',  
                        }}>
                            <Typography sx={{
                                fontSize: '0.8rem'
                            }}>
                                Contactar a un asesor
                            </Typography>
                        </Button>
                    </Box>
                </CardContent> 
            </Grid>
        </Grid>
    </Container>
</>
    );
}
PoolDetails