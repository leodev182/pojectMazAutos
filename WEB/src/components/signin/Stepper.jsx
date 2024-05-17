import * as React from 'react';
import { useState } from 'react';
import { Box,Stepper, Step, TextField, StepLabel, Button, Typography, Checkbox, FormControlLabel, FormGroup, Alert } from '@mui/material';

const steps = ['Paso 1', 'Paso 2'];

export default function HorizontalLinearStepper() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('Luis');
    const [lastName, setLastName] = useState('Taurik');
    const [phone, setPhone] = useState('');
    const [enterprise, setEnterprise] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [alert, setAlert] = useState({
        alert: false,
        status: '',
        message: ''
    });
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("No puedes saltarte esta etapa.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
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
        // handleEdit()
    };

    return (
        <Box sx={{ width: '100%', py: 6, px: 6 }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption">Opcional</Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '70vh'
                    }}>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            ¡Todo listo! Ya puedes ver las ofertas
                        </Typography>
                        <Button variant="contained" type="submit" sx={{
                            color: 'white',
                            width: '90%',
                            height: '45px',
                            borderRadius: '10px',
                            marginBottom: '20px',
                            py: 2,
                            my: 6,
                        }}>
                            Continuar
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{
                        width: '90vw',
                        minHeight: '60vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box component='form' sx={{
                            width: { xs: '80vw', md: '60vw', lg: '50vw' },
                            border: 'solid 1px #CFD8DB',
                            borderRadius: '15px',
                            py: 4,
                        }}>
                            {activeStep === 0 && (
                            <Typography sx={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                pb: 4,
                            }}> 
                                Completa los datos para crear tu cuenta
                            </Typography>
                            )}
                            {activeStep === 1 && (
                            <Typography sx={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                pb: 4,
                            }}> 
                                Ingresa los datos de empresa
                            </Typography>
                            )}
                            {activeStep === 0 && (
                            <Box>
                                <TextField
                                    id='name'
                                    label='Nombre'
                                    type='text'
                                    variant='outlined'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{ my: 1, mx: 1, width: '90%' }}
                                />
                                <TextField
                                    id='phone'
                                    label='Teléfono'
                                    type='phone'
                                    variant='outlined'
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    sx={{ my: 1, mx: 1, width: '90%' }}
                                />
                                <TextField
                                    id='email'
                                    label='Correo electrónico'
                                    type='email'
                                    variant='outlined'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ my: 1, mx: 1, width: '90%' }}
                                />
                                                            <TextField
                                    id='password'
                                    label='Contraseña'
                                    type='password'
                                    variant='outlined'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{ my: 1, mx: 1, width: '90%' }}
                                />
                                {alert && alert.status === 'error'?  <Alert severity={alert.status}> {alert.message} </Alert>: null}
                                {alert && alert.status === 'success'?  <Alert severity={alert.status}> {alert.message} </Alert>: null}
                            </Box>
                            )}
                            {activeStep === 1 && (
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection:'column',
                                alignItems: 'center',
                            }}>
                                <TextField
                                    id='enterprise'
                                    label='Empresa'
                                    type='text'
                                    variant='outlined'
                                    value={enterprise}
                                    onChange={(e) => setEnterprise(e.target.value)}
                                    sx={{ my: 1, mx: 1, width: '90%' }}
                                />
                                <TextField
                                    id='address'
                                    label='Dirección de la compañía'
                                    type='text'
                                    variant='outlined'
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    sx={{ my: 1, mx: 1, width: '90%' }}
                                />
                                <TextField
                                    id='district'
                                    label='Comuna'
                                    type='text'
                                    variant='outlined'
                                    value={district}
                                    onChange={(e) => setDistrict(e.target.value)}
                                    sx={{ my: 1, mx: 1, width: '90%' }}
                                />
                                <TextField
                                    id='city'
                                    label='Ciudad'
                                    type='text'
                                    variant='outlined'
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    sx={{ my: 1, mx: 1, width: '90%' }}
                                />
                                <FormGroup sx={{
                                    width:'90%',
                                    my: 1, 
                                    mx: 1,
                                }}>
                                    <FormControlLabel required control={<Checkbox />} label="Acepto los términos y condiciones" />
                                </FormGroup>
                            </Box>
                            )}
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Atrás
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                Saltar
                            </Button>
                        )}
                        <Button onClick={handleNext}>
                            {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

