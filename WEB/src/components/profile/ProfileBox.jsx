import React from 'react'
import { Box, Typography, TextField, Button, Divider, Alert, Container } from '@mui/material';
import { useState } from 'react';

const ProfileBox = () => {


    const [email, setEmail] = useState('luis.acosta@mazautos.com')
    const [name, setName] = useState('Luis')
    const [lastName, setLastName] = useState('Acosta')
    const [phone, setPhone] = useState('')
    const [enterprise, setEnterprise] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [alert, setAlert] = useState({
        alert: false,
        status:'',
        message:''
    })

    const [bgInput,setBgInput] = useState({
        edit:false,
        color: '#eceff1',
        changes: true
    })

    const [passwordChange,setPasswordChange] = useState({
        show: false,
        display: 'none'
    })

    const [showSaveButton,setShowSetButton] = useState({
        show: false,
        display: 'none'
    })
    
    const [showEditButton,setShowEditButton] = useState({
        edite: false,
        display: 'block'
    })

    const handleEdit = (e) => {
        setBgInput(prevState => ({
            ...prevState,
            edit: !prevState.edit,
            color: prevState.edit ? '#eceff1' : '#fff',
            changes: !prevState.changes
        }));
        setShowSetButton(prevState => ({
            ...prevState,
            show: !prevState.show,
            display: prevState.show ? 'none' : 'block',
        }));
        setShowEditButton(prevState => ({
            ...prevState,
            show: !prevState.show,
            display: prevState.show ? 'block' : 'none',
        }))
        return
    }

    
    const handleEditPassword = (e) => {
        setPasswordChange(prevState => ({
            ...prevState,
            show: !prevState.show,
            display: prevState.show ? 'none' : 'flex',
        }));
    };

    const [emailError, setEmailError] = useState({
        emailError:false,
        message:'',
    })
    const [phoneError, setPhoneError] = useState({
        phoneError:false,
        message:'',
    })
    const [error, setError] = useState({
        error:false,
        message:'',
    })

    const emailValidation = (email) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };
    
    const phoneValidation = (phone) => {
        const regex = /^9\d{8}$/;
        return regex.test(phone)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        let hasError = false;
    
        // Validación del correo electrónico
        if (!emailValidation(email)) {
            setEmailError({
                emailError: true,
                message: "Ingresa un correo válido",
            });
            hasError = true; // Marcar que hay un error
        } else {
            setEmailError({
                emailError: false,
                message: "",
            });
        }

        // Validación del teléfono
        if (!phoneValidation(phone)) {
            setPhoneError({
                phoneError: true,
                message: `Debe ser un formato válido, ej: "987546321"`,
            });
            hasError = true; // Marcar que hay un error
        } else {
            setPhoneError({
                phoneError: false,
                message: "",
            });
        }
    
        if (hasError) {
            setAlert({
                alert:true,
                status:'error',
                message:'Verifica los datos ingresados'
            })
            return;
        }
    
        console.log(email);
        setError({
            error: false,
            message: "",
        });

        setAlert({
            alert:true,
            status:'success',
            message:'Se han guardado los cambios'
        })
        handleEdit()
    };

  return (
    <Box sx={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        bgcolor: "#eceff1",
        justifyContent:'center',
        my:0,
        p:2,
    }}>
        <Box sx={{
            my:4,
            pt:4,
            mx:4,
            width:{ xs:'90vw', md:'70vw', lg:'50vw'},
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            bgcolor:'white', 
            border:'solid 1px #CFD8DB',
            borderRadius:'15px'
        }}>
            <Typography variant='h4'>
                Mi perfil
            </Typography>

            <Box onSubmit={handleSubmit} sx={{
                width:'90%',
                maxWidth:'600px',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
            }}>
                <TextField
                    className='field'  
                    InputProps={{
                        readOnly: true,
                        sx: {
                            backgroundColor: '#eceff1', 
                        },
                    }}              
                    id='name'
                    label='Nombre'
                    type='name'
                    variant='outlined'
                    fullWidth
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    sx={{
                        my:1
                    }}
                />
                <TextField
                    className='field'
                    InputProps={{
                        readOnly: true,
                        sx: {
                            backgroundColor: '#eceff1',  
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
            </Box>

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
                    id='lastname'
                    label='Apellidos'
                    type='lastname'
                    variant='outlined'
                    fullWidth
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
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
                {alert && alert.status === 'error'?  <Alert severity={alert.status}> {alert.message} </Alert>: null}
                {alert && alert.status === 'success'?  <Alert severity={alert.status}> {alert.message} </Alert>: null}
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
            </Box>
        </Box>
    </Box>
    )
}

export default ProfileBox