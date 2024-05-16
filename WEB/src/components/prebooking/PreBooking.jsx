// import React from 'react'
import React, { useContext, useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InfoIcon from '@mui/icons-material/Info';
// import WarningIcon from '@mui/icons-material/Warning';
import { LoadingBar } from '../loadingBar/LoadingBar';
import { Grid, Container, Select, MenuItem } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { MyContext } from '../../context/PoolsContext';

const PreBooking = () => {
    const navigate = useNavigate();
    const { pools, setPools, amount, setAmount, quantity, setQuantity } = useContext(MyContext);
    const { id } = useParams()
    const poolIdsAsString = pools.map(pool => String(pool.id));
    const index = poolIdsAsString.findIndex((poolId) => poolId === id);
    const poolDetails = pools[index];

    const clickHandler = () => {
        const ClientOrder = [...pools];
        if (typeof ClientOrder[index].quantity !== 'undefined') {
            ClientOrder[index].quantity += quantity;
        } else {
            ClientOrder[index].quantity = quantity;
        }
        setPools([...ClientOrder]);
        setAmount((prevAmount) => {
            const totalAmount = prevAmount + (poolDetails.price * quantity);
            const amountToPay = totalAmount * 0.05
            console.log(amountToPay);
            return amountToPay;
        });
    };
    
    const goToPayment = () => {
        const paymentUrl = `/payment/${id}`;
        navigate(paymentUrl);
        console.log(amount);
        console.log(quantity);

    };
    
      

    const colorNames = {
        blue: 'Azul',
        red: 'Rojo',
        white: 'Blanco',
        black: 'Negro',
        grey: 'Gris',
    };

    const [selectedColor, setSelectedColor] = useState({ color: poolDetails.colors[0], name: colorNames[poolDetails.colors[0]] });
    const handleColorChange = (e) => {
        const selectedColorName = colorNames[e.target.value];
        setSelectedColor({ color: e.target.value, name: selectedColorName });
    };

    const carAvailability = poolDetails.goal_quantity - poolDetails.quantity;
    const formattedPrice = parseFloat(poolDetails.price).toLocaleString("de-DE");
    const formattedSavedPrice = parseFloat(poolDetails.saved_price).toLocaleString("de-DE");
    const bookingAmount = () => {
        const amount = quantity * (poolDetails.price * 0.05);
        return parseFloat(amount).toLocaleString("de-DE");
    };
    
    const [showAmount,setShowAmount] = useState({
        show: false,
        display: 'none'
    })
    
    const handleShowAmount = (e) => {
        setShowAmount(prevState => ({
            ...prevState,
            show: !prevState.show,
            display: prevState.show,
        }));
    };

    const handleSubtract = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            handleShowAmount();
        }
    };
    
    const handleAdd = () => {
        if (quantity < carAvailability) { 
            setQuantity(quantity + 1);
            handleShowAmount();
        }
    };
    


  return (
    <>

    <Box  sx={{
            maxWidth: '100vw', 
            maxHeight:'100vh',
            overflow: 'auto',
            display: {xs:'auto', md:'auto',lg:'none'}
        }}>
        {/* Title */}

        <CardContent sx={{
            textAlign:'center',
            py:6
        }}>
            <Typography  variant='h2' sx={{ 
                    fontSize:'1.2rem',
                    fontWeight:'600',
                    my:0
                }}>
                Reserva
            </Typography>
        </CardContent>
        <Divider variant="middle"/>

        {/* Price Section */}

        {/* Info car section */}

        <Grid container sx={{
            display: {xs:'auto', md:'auto',lg:'none'}
        }}>
            <Grid item xs={5} md={6} lg={6} sx={{
                display:'flex',
                justifyItems:'center',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Box sx={{
                    height:'90%',
                    width:'90%',
                    bgcolor:'#fffff',
                    // p:'5%',
                    // m:'5%',
                    border:'solid 1px #CFD8DB',
                    borderRadius:'15px',
                    display:'flex',
                    justifyItems:'center',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <CardMedia
                        component="img"
                        src={`${poolDetails.image}`}
                        alt={`${poolDetails.brand} ${poolDetails.model} ${poolDetails.year}`}
                    />
                </Box>
            </Grid>
            <Grid item xs={7} md={6} lg={6}>
                <CardContent>
                        <Box 
                        sx={{
                            textAlign: "left"
                        }}>
                            <Typography variant='h6' sx={{
                                fontSize:'1rem'    
                            }}>
                                {poolDetails.brand} {poolDetails.model} - {poolDetails.year}
                            </Typography>
                            <Box sx={{                        
                                    pt:1,
                                    pb:2,            
                                    display:'flex',
                                    alignItems:'center'}}>
                                <Typography variant='h4' sx={{
                                    fontSize:'1.4rem',
                                    fontWeight:'500',
                                    pt:1,
                                    pb:1
                                }}>
                                $ {formattedPrice}
                                </Typography>
                                <Typography variant='p' sx={{
                                        mr:'0.6rem',
                                        pt:0.5,
                                        pl:1
                                    }}> 
                                        C/U
                                </Typography>
                            </Box>
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
                                    Al unirte al pool obtienes el precio de flota. Disponibilidad: {carAvailability - quantity}
                                </Typography>
                            </Box>
                        </Box>
                </CardContent>
            </Grid>
        </Grid>
        <Divider variant="middle"/>
    </Box> 

    {/* Checkout confirmation */}

    <Container sx={{
        display: {xs:'flex', md:'flex',lg:'none'},
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        my:1
    }}>
        <Box sx={{
            my:1,
            mx:4,
            width:{ xs:'90vw', md:'70vw', lg:'50vw'},
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Box sx={{
                maxWidth:'600px',
                width:'100%',
                height:'20vh',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Grid container sx={{
                    alignItems:'center',
                    py:1
                }}>
                    <Grid item xs={7.6} sx={{
                        textAlign:'left'
                    }}>
                        Cantidad de autos a reservar
                    </Grid>
                    <Grid item xs={1.1} sx={{
                        height:'80%',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        border: 'solid 1px #C8C8C8',
                        borderRadius:'5px',
                    }}>
                        <Button onClick={() => handleSubtract()} variant='plain' sx={{
                            color:'black',
                            '&:focus': {
                                outline: 'none',
                            },
                        }}>
                            -
                        </Button>
                    </Grid>
                    <Grid item xs={2.2} sx={{
                    }}>
                        <TextField
                            className='field'
                            inputProps={{ 
                                style: { textAlign: 'center' } 
                            }}               
                            id='quantity'
                            type='quantity'
                            variant='outlined'
                            fullWidth
                            max= {carAvailability}
                            min= {1}
                            placeholder='1'
                            value={quantity}
                            onChange={(e) => {
                                setQuantity(e.target.value);
                                handleShowAmount();
                            }}                        
                            sx={{
                                my:1,
                                width:'90%'
                            }}
                        />
                    </Grid>
                    <Grid item xs={1.1} sx={{
                        height:'80%',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        border: 'solid 1px #C8C8C8',
                        borderRadius:'5px',
                    }}>
                        <Button onClick={() => handleAdd()} variant='text' sx={{
                            color:'black',
                            '&:focus': {
                                outline: 'none',
                            },
                        }}>
                            +
                        </Button>
                    </Grid>
                </Grid>
                <Grid container sx={{
                    alignItems:'center',
                    py:1
                }}>
                    <Grid item xs={7.6} sx={{
                        textAlign:'left'
                    }}>
                        Selecciona el color de tu flota
                    </Grid>
                    <Grid item xs={4.4}>
                        <Select
                            value={selectedColor.color} 
                            onChange={handleColorChange}    
                            variant="outlined"
                            fullWidth
                            sx={{
                                '& .MuiSelect-select': {
                                    textAlign: 'center', 
                                },
                                '& .MuiSelect-icon': {
                                    right: '5px', 
                                }
                            }}
                        >
                            {poolDetails.colors.map((color, index) => (
                                <MenuItem key={index} value={color}>{color}</MenuItem>
                            ))}
                        </Select>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
    <Divider variant="middle"/>
    <Container sx={{
        display: {xs:showAmount.display, md:showAmount.display, lg:'none'},
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        my: 1
    }}>
        {quantity > carAvailability ? (
            <Box sx={{
                py: 1,
            }}>
                <Alert severity="warning" sx={{
                    py:4,
                    borderRadius:'15px'
                }}>
                    Solo {carAvailability === 1 ? `queda ${carAvailability} auto` : ` quedan ${carAvailability} autos`}
                </Alert>
            </Box>
        ) : (
            <>
                <Typography sx={{ textAlign: 'left', py: 1 }}>
                Puedes reservar tu flota con el 5% del precio por vehículo: 
                </Typography>
                <Box sx={{
                    my: 1,
                    py: 2,
                    px: 2,
                    width: '100%',
                    bgcolor: '#00deb5',
                    borderRadius: '15px',
                    justifyContent: 'center',
                    // border: 'solid 2px grey'
                }}>
                    <Typography variant='h4' sx={{
                        textAlign: 'center',
                        fontSize: '1.6rem',
                        fontWeight: '500',
                        pt: 1,
                        pb: 1
                    }}>
                        ${bookingAmount()}
                    </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.8rem' }}>
                    Al depositar este monto estás reservando {quantity === 1 ? `${quantity} auto` : `${quantity} autos`}
                </Typography>
            </>
        )}
    </Container>

           {/* Seccion de boton */}

      <CardContent sx={{
            display: {xs:'auto', md:'auto',lg:'none'},
      }}>
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
            onClick={() => {
                goToPayment();
                clickHandler();
              }}
            >
            <Typography>
                Realizar el pago
            </Typography>
        </Button>
        </Box>
      </CardContent>







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

                {/* Info car section */}

                <Box sx={{
                    m:1,
                    p:1,
                }}>
                    <Box sx={{
                        display:'flex',
                        justifyItems:'center',
                        justifyContent:'center',
                        alignItems:'center',
                    }}>
                        <Box sx={{
                            height:'100%',
                            width:'100%',
                            bgcolor:'#fffff',
                            p:1,
                            // m:'5%',
                            border:'solid 1px #CFD8DB',
                            borderRadius:'15px',
                            display:'flex',
                            justifyItems:'center',
                            justifyContent:'center',
                            alignItems:'center',
                        }}>
                            <CardMedia
                                component="img"
                                src={`${poolDetails.image}`}
                                alt={`${poolDetails.brand} ${poolDetails.model} ${poolDetails.year}`}
                            />
                        </Box>
                    </Box>
                    
                    {/* Loading bar */}

                    <CardContent sx={{
                        mx:0,
                        px:0,
                        width:'100%'
                    }}>
                        <LoadingBar value={poolDetails.quantity} goal={poolDetails.goal_quantity} />
                    </CardContent>
                    <Divider variant="middle"/>
                    <Box sx={{
                        p:4,
                        display:'flex',
                        alignItems:'center'
                        }}>
                        <IconButton color="primary" sx={{p: 0, m: 0}}>
                            <InfoIcon sx={{paddingRight:'10px'}}/>
                        </IconButton>
                        <Typography variant='p' sx={{
                            fontSize:'0.8rem'
                        }}>
                            Al unirte al pool obtienes el precio de flota. Disponibilidad: {carAvailability}
                        </Typography>
                    </Box>
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
                        Reserva
                    </Typography>
                </CardContent>
                <Divider variant="middle"/>
                <CardContent>
                    <Box 
                    sx={{
                        py:1,
                        textAlign: "left"
                    }}>
                        <Typography variant='h6' sx={{
                            fontSize:'1rem'    
                        }}>
                            {poolDetails.brand} {poolDetails.model} - {poolDetails.year}
                        </Typography>
                        <Box sx={{     
                                py:1,
                                display:'flex',
                                alignItems:'center'}}>
                            <Typography variant='h4' sx={{
                                fontSize:'1.4rem',
                                fontWeight:'500',
                            }}>
                            $ {formattedPrice}
                            </Typography>
                            <Typography variant='p' sx={{
                                    mr:'0.6rem',
                                    pt:0.5,
                                    pl:1
                                }}> 
                                    C/U
                            </Typography>
                        </Box>
                        <Box sx={{    
                                py:1,
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
                
                {/* Checkout section */}

                <Container sx={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'center',
                    my:1
                }}>
                    <Box sx={{
                        my:1,
                        mx:4,
                        width:'90%',
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Box sx={{
                            maxWidth:'600px',
                            width:'100%',
                            height:'20vh',
                            display:'flex',
                            flexDirection:'column',
                            alignItems:'center',
                            justifyContent:'center'
                        }}>
                            <Grid container sx={{
                                alignItems:'center',
                                py:1
                            }}>
                                <Grid item xs={7.6} sx={{
                                    textAlign:'left'
                                }}>
                                    Cantidad de autos a reservar
                                </Grid>
                                <Grid item xs={1.1} sx={{
                                    height:'80%',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    border: 'solid 1px #C8C8C8',
                                    borderRadius:'5px',
                                }}>
                                    <Button onClick={() => handleSubtract()} variant='plain' sx={{
                                        color:'black',
                                        '&:focus': {
                                            outline: 'none',
                                        },
                                    }}>
                                        -
                                    </Button>
                                </Grid>
                                <Grid item xs={2.2} sx={{
                                }}>
                                <TextField
                                    className='field'
                                    inputProps={{ 
                                        style: { textAlign: 'center' } 
                                    }}               
                                    id='quantity'
                                    type='quantity'
                                    variant='outlined'
                                    fullWidth
                                    max= {carAvailability}
                                    min= {1}
                                    placeholder='1'
                                    value={quantity}
                                    onChange={(e) => {
                                        setQuantity(e.target.value);
                                        handleShowAmount();
                                    }}                        
                                    sx={{
                                        my:1,
                                        width:'90%'
                                    }}
                                />
                                </Grid>
                                <Grid item xs={1.1} sx={{
                                    height:'80%',
                                    display:'flex',
                                    alignItems:'center',
                                    justifyContent:'center',
                                    border: 'solid 1px #C8C8C8',
                                    borderRadius:'5px',
                                }}>
                                    <Button onClick={() => handleAdd()} variant='text' sx={{
                                        color:'black',
                                        '&:focus': {
                                            outline: 'none',
                                        },
                                    }}>
                                        +
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container sx={{
                                alignItems:'center',
                                py:1
                            }}>
                                <Grid item xs={7.6} sx={{
                                    textAlign:'left'
                                }}>
                                    Selecciona el color de tu flota
                                </Grid>
                                <Grid item xs={4.4}>
                                    <Select
                                        value={selectedColor.color} 
                                        onChange={handleColorChange}    
                                        variant="outlined"
                                        fullWidth
                                        sx={{
                                            '& .MuiSelect-select': {
                                                textAlign: 'center', 
                                            },
                                            '& .MuiSelect-icon': {
                                                right: '5px', 
                                            }
                                        }}
                                    >
                                        {poolDetails.colors.map((color, index) => (
                                            <MenuItem key={index} value={color}>{color}</MenuItem>
                                        ))}
                                    </Select>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                <Divider variant="middle"/>
                <Container sx={{
                    display: showAmount.display,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    my: 1
                }}>
                    {quantity > carAvailability ? (
                        <Box sx={{
                            py: 1,
                        }}>
                            <Alert severity="warning" sx={{
                                py:4,
                                borderRadius:'15px'
                            }}>
                                Solo {carAvailability === 1 ? `queda ${carAvailability} auto` : ` quedan ${carAvailability} autos`}
                            </Alert>
                        </Box>
                    ) : (
                        <>
                            <Typography sx={{ textAlign: 'left', py: 1, fontSize:'0.8rem' }}>
                                Reserva tu flota con el 5% del precio por vehículo: 
                            </Typography>
                            <Box sx={{
                                my: 1,
                                py: 2,
                                px: 2,
                                width: '100%',
                                bgcolor: '#00deb5',
                                borderRadius: '15px',
                                justifyContent: 'center',
                                // border: 'solid 2px grey'
                            }}>
                                <Typography variant='h4' sx={{
                                    textAlign: 'center',
                                    fontSize: '1.6rem',
                                    fontWeight: '500',
                                    pt: 1,
                                    pb: 1
                                }}>
                                    ${bookingAmount()}
                                </Typography>
                            </Box>
                            <Typography sx={{textAlign: 'left', fontSize: '0.8rem' }}>
                                Al depositar este monto estás reservando {quantity === 1 ? `${quantity} auto` : `${quantity} autos`}
                            </Typography>
                        </>
                    )}
                </Container>
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
                        onClick={() => {
                            goToPayment();
                            clickHandler();
                          }}
                        >
                            <Typography>
                                Realizar pago
                            </Typography>
                        </Button>
                    </Box>
                </CardContent> 
            </Grid>
        </Grid>
    </Container>




    

{/* //////////////////////////// */}
{/* //////////////////////////// */}
{/* //////////////////////////// */}
{/* //////////////////////////// */}
{/* //////////////////////////// */}
{/* //////////////////////////// */}
{/* //////////////////////////// */}
{/* //////////////////////////// */}
{/* //////////////////////////// */}
{/* //////////////////////////// */}








{/* 
            <Box component='form' onSubmit={handleSubmit} sx={{
                width:'90%',
                maxWidth:'600px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Button variant='contained'
                        onClick={handleEdit} sx={{
                        color: 'white',
                        display: showEditButton.display,
                        my:2,
                        width:'100%',
                        height: '45px', 
                        borderRadius: '10px', 
                        marginBottom: '20px',  
                    }}>
                        Editar datos
                </Button>

                <TextField
                    className='field'
                    InputProps={{
                        readOnly: bgInput.changes,
                        sx: {
                            backgroundColor: bgInput.color, 
                        },
                    }}
                    id='email'
                    label='Email'
                    type='email'
                    variant='outlined'
                    fullWidth
                    helperText={emailError.message}
                    error={emailError.emailError}
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    sx={{
                        my:1
                    }}
                />

                <TextField
                    className='field'   
                    InputProps={{
                        readOnly: bgInput.changes,
                        sx: {
                            backgroundColor: bgInput.color, 
                        },
                    }}
                    id='phone'
                    label='Teléfono'
                    type='phone'
                    variant='outlined'
                    fullWidth
                    helperText={phoneError.message}
                    error={phoneError.phoneError}
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                    sx={{
                        my:1
                    }}
                />

                <TextField
                    className='field'   
                    InputProps={{
                        readOnly: bgInput.changes,
                        sx: {
                            backgroundColor: bgInput.color, 
                        },
                    }}
                    id='enterprise'
                    label='Empresa'
                    type='enterprise'
                    variant='outlined'
                    fullWidth
                    value={enterprise}
                    onChange={(e)=> setEnterprise(e.target.value)}
                    sx={{
                        my:1
                    }}
                />

                <TextField
                    className='field'   
                    InputProps={{
                        readOnly: bgInput.changes,
                        sx: {
                            backgroundColor: bgInput.color, 
                        },
                    }}
                    id='address'
                    label='Dirección'
                    type='address'
                    variant='outlined'
                    fullWidth
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                    sx={{
                        my:1
                    }}
                />

                <TextField
                    className='field'   
                    InputProps={{
                        readOnly: bgInput.changes,
                        sx: {
                            backgroundColor: bgInput.color, 
                        },
                    }}
                    id='country'
                    label='País'
                    type='country'
                    variant='outlined'
                    fullWidth
                    value={country}
                    onChange={(e)=> setCountry(e.target.value)}
                    sx={{
                        my:1
                    }}
                />
                <Box sx={{
                    mt:2,
                    width:'100%'
                }}>
                </Box>
                <Box id='password-changer' sx={{
                    m:0,
                    p:0,
                    my:1,
                    py:2,
                    px:2,
                    width:'100%',
                    border:'solid 1px #CFD8DB',
                    borderRadius:'15px'
                }}>
                    <Box sx={{
                            m:0,
                            p:0,
                            width:'100%',
                            display: passwordChange.display,
                            justifyContent:'left'
                        }}>
                        <TextField 
                            id='password'
                            label='Contraseña'
                            type='password'
                            variant='outlined'
                            fullWidth
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            sx={{
                                my:1,
                                mx:1
                            }}
                        />
                        <TextField 
                            id='password-confirmation'
                            label='Confirma contraseña'
                            type='password'
                            variant='outlined'
                            fullWidth
                            value={passwordConfirmation}
                            onChange={(e)=> setPasswordConfirmation(e.target.value)}
                            sx={{
                                my:1,
                                mx:1
                            }}
                        />
                    </Box>
                    <Button variant='contained'
                        onClick={handleEditPassword} sx={{
                        color: 'white',
                        my:2,
                        width:'98%',
                        height: '45px', 
                        borderRadius: '10px', 
                        marginBottom: '20px',  
                    }}>
                        Cambiar contraseña
                    </Button>
                </Box>
                
                <Box sx={{
                    my:2,
                    width:'100%'
                }}>
                    <Button type='submit' variant='contained' sx={{
                        display: showSaveButton.display,
                        color: 'white',
                        my:2,
                        width:'100%',
                        height: '45px', 
                        borderRadius: '10px', 
                        marginBottom: '20px',  
                    }}>
                        Guardar cambios
                    </Button>
                </Box>
            </Box> */}
        {/* </Box>
    </Container> */}

</>
  )
}

export default PreBooking