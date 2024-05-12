import React from 'react'
import { Box, Typography, TextField, Button, Divider, Alert, Container, CardMedia, Grid } from '@mui/material';
import CarImage from '../../assets/maxus-T60-white-mazautos.jpeg'
// import { useState } from 'react';

const Booking = () => {

  return (
    <Container sx={{
        p:0,
        my:2,
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center'
    }}>
        <Grid container sx={{
            bgcolor:'white',
            py:2,
            px:1,
            width:{xs:'96%', sm:'94%'},
            border:'solid 1px #CFD8DB',
            borderRadius:'15px',
            display:'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
        }}>
            <Grid item xs={5} sm={6} md={7} lg={7} sx={{
                bgcolor:'#FFFFFF',
                borderRadius:'15px',
                border:'solid 1px #CFD8DB',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                px:1,
                // height:{xs:'16vh', md:'22vh', lg:'28vh'},
                // width:{xs:'100%', md:'100%', lg:'98%'}
            }}>
                <CardMedia
                    component="img"
                    image= {CarImage}
                    alt="Maxus T60"
                    sx={{
                        height:{xs:'96%', md:'96%', lg:'98%'}
                    }}
                />
            </Grid>
            <Grid item xs={7} sm={6} md={5} lg={5} sx={{
                display:'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignContent: 'center',
                px: {xs:'4vw', md:'2vw'},
            }}>
                <Box sx={{
                    my:0.5,
                    display:'flex',
                    justifyContent: 'left',
                    alignContent: 'center'
                }}>
                    <Typography className='status'sx={{
                        fontSize:{xs:'0.8rem',md:'1rem',lg:'1.2rem'}
                    }}>
                        En proceso
                    </Typography>
                    <Typography className='status'sx={{
                        mx:2,
                        fontSize:{xs:'0.8rem',md:'1rem',lg:'1.2rem'}
                    }}>
                        |
                    </Typography>
                    <Typography className='date' sx={{
                        fontSize:{xs:'0.8rem',md:'1rem',lg:'1.2rem'}
                    }}>
                        31/05/2024
                    </Typography>
                </Box>
                <Box sx={{
                    my:0.5,
                    display:'flex',
                    justifyContent: 'left',
                    alignContent: 'center'
                }}>
                    <Typography className='brand'sx={{
                        mr:1,
                        fontSize:{xs:'1.2rem',md:'1.4rem',lg:'1.6rem'}
                    }}>
                        Maxus
                    </Typography>
                    <Typography className='model' sx={{
                        fontSize:{xs:'1.2rem',md:'1.4rem',lg:'1.6rem'}
                    }}>
                        T60
                    </Typography>
                </Box>
                <Box sx={{
                    my:0.5,
                    display:'flex',
                    justifyContent: 'left',
                    alignContent: 'center'
                }}>
                    <Typography className='price' sx={{
                        mr:1,
                        fontSize:{xs:'0.8rem',md:'1rem',lg:'1.2rem'}
                    }}>
                        $11.900.000
                    </Typography>
                    <Typography className='quantity' sx={{
                        fontSize:{xs:'0.8rem',md:'1rem',lg:'1.2rem'}
                    }}>
                        1 unidad
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{
                mt:2,
            }}>
                <Button variant="contained" sx={{color: 'white',
                    width: '100%',
                    height: '45px', 
                    borderRadius: '10px', 
                }}
                >
                    <Typography>
                        Ver el pool
                    </Typography>
                </Button>
            </Grid>
        </Grid>
    </Container>
    )
}

export default Booking