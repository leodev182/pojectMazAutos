import React from "react";
import { useState } from 'react'
import { TextField, Box, Button, Alert, Typography, Container, Divider} from '@mui/material';

export default function SignIn() {

    const backgroundImageUrl = 'https://img.freepik.com/foto-gratis/hombre-guapo-joven-abrazando-coche-sala-exposicion-automoviles_1303-20420.jpg?t=st=1715829075~exp=1715832675~hmac=e2cfdbee8005ed6902ea24fd859b4c26b3019d75e6cadbcbbd5d2c0e13e6d815&w=2000';

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');

    const label = { inputProps: { 'aria-label': 'Size switch demo' } };

    //Estado para los errores
    const [error, setError] = useState(false);
    const [alert, setAlert] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

  //Función antes de enviar el formulario
  const validarInput = (e) => {

    // Prevenimos el comportamiento por defecto
    e.preventDefault();

    // Validación input
     if(nombre==='' || apellido==='' || email ==='' || telefono ==='' || empresa ==='' || direccion ==='' || ciudad == ''){
           setError(true)
           setAlert('error')
           setMessage('Error:Debe completar todos los datos')
           return
         } 
         setSuccess(true)
         setAlert('success')
         setMessage("datos ingresados: " + nombre +"-"+ apellido +"-"+ email +"-"+ telefono +"-"+ empresa +"-"+ direccion +"-"+ ciudad)

    //eliminar mensaje de error
    setError(false);
    setNombre('');
    setApellido('');
    setEmail('');
    setTelefono('');
    setEmpresa('');
    setDireccion('');
    setCiudad('');
    //setMessage('')
 }


  return (
  <Box sx={{
    minWidth:'90vw',
    minHeight:'70vh',
    display:{xs:'auto',md:'flex',lg:'flex'},
  }}>
    <Box sx={{
        width:{xs:'auto',md:'55vw',lg:'50vw'},
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        px:'10vw'
    }}>
        <Box sx={{
            pb:'10vh',
            px:'5vw',
        }}>
            <Typography variant="h1" sx={{
                fontSize:'1.6rem',
                fontWeight:'600',
            }}>
                MazAutos
            </Typography>
        </Box>
        <Box sx={{
            width:{xs:'auto',md:'50vw',lg:'40vw'},
        }}>
            <Typography variant="h1" sx={{
                fontSize:'1.4rem',
                fontWeight:'600',
            }}>
                Te damos la bienvenida de nuevo
            </Typography>
        </Box>
        <Box component='form' sx={{
            py:2,
        }}>
            <TextField 
                id='email'
                label='Correo electrónico'
                type='email'
                variant='outlined'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                sx={{
                    my:1,
                    mx:1,
                    width:'90%'
                }}
            />
            <TextField 
                id='password'
                label='Contraseña'
                type='password'
                variant='outlined'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                sx={{
                    my:1,
                    mx:1,
                    width:'90%'
                }}
            />
            <Button variant="text" sx={{
                textTransform: 'capitalize', 
                fontSize:'1rem',
                py:2,
            }}>
                ¿Olvidaste tu contraseña?
            </Button>
            <Button variant="contained" sx={{color: 'white',
                width: '90%',
                height: '45px', 
                borderRadius: '10px', 
                marginBottom: '20px',
                py:2,  
            }}
            >
                Continuar
            </Button>
            <Box sx={{
                width:'100%',
                display:'flex',
                justifyContent:'center',
                alignContent:'center',
                py:3,
            }}>
                <Divider sx={{width:'90%'}}>O</Divider>
            </Box>
                <Typography sx={{
                    fontSize:'1.1rem'
                }}>
                    ¿Aún no tienes cuenta?
                    <Button variant="text" sx={{
                        textTransform: 'capitalize', 
                        fontWeight:600,
                        fontSize:'1.1rem',
                    }}>
                    Regístrate
                    </Button>
                </Typography>
            </Box>
        </Box>
        <Box sx={{
            height:'100vh',
            width:{xs:'0',md:'50vw',lg:'50vw'},
            bgcolor:'blue',
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            p:0,
            m:0,
        }}>
            <Box
                sx={{
                position: 'absolute',
                height: '100%',
                width:{xs:'0',md:'50vw',lg:'50vw'},
                background: 'linear-gradient(to bottom, rgba(0,145,223,0.2), rgba(0,145,223,0.9))',
            }}>
            </Box>
        </Box>
    </Box>

)};
SignIn;
