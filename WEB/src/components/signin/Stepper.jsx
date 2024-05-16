import * as React from 'react';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import TextField from '@mui/material/TextField';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Paso 1', 'Paso 2', 'Paso 3'];

export default function HorizontalLinearStepper() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('Luis')
    const [lastName, setLastName] = useState('Taurik')
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

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

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
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
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

  return (
    <Box sx={{
        width: '100%',
        py:6,
        px:6, 
    }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Ohh</Typography>
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
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                minHeight:'70vh'
            }}>
                <Typography sx={{ mt: 2, mb: 1 }}>
                    ¡Todo listo! Ya puedes ver las ofertas
                </Typography>
                <Button variant="contained" type="submit" sx={{color: 'white',
                    width: '90%',
                    height: '45px', 
                    borderRadius: '10px', 
                    marginBottom: '20px',
                    py:2,
                    my:6,
                }}
                >
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
                width:'90vw',
                minHeight:'60vh',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
            <Box component='form' sx={{
                width:{xs:'80vw',md:'60vw',lg:'50vw'},
                border:'solid 1px #CFD8DB',
                borderRadius:'15px',
                py:4,
            }}>
                <Typography sx={{
                    fontSize:'1.2rem',
                    fontWeight:600,
                    pb:4,
                }}>
                    Completa los datos para crear tu cuenta
                </Typography>
                <TextField 
                    id='name'
                    label='Nombre'
                    type='text'
                    variant='outlined'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'90%'
                    }}
                />
                <TextField 
                    id='phone'
                    label='Teléfono'
                    type='phone'
                    variant='outlined'
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                    sx={{
                        my:1,
                        mx:1,
                        width:'90%'
                    }}
                />
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
              {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguente'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
HorizontalLinearStepper