import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Payment = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <Container sx={{ height: '80vh' }}>
      <Box sx={{ py: 2 }}>
        <Typography>Pagar</Typography>
      </Box>
      <Box>
        <Accordion
          expanded={expanded}
          onChange={handleAccordionChange}
          sx={{
            py: 4,
            border: 'solid 1px #CFD8DB',
            borderRadius: '25px', // Establecer el radio de borde
            overflow: 'hidden'
          }}
        >
          <AccordionSummary
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Grid container>
                <Grid item xs={10} sx={{
                    textAlign:'left'
                }}>
                    <Typography>Pago por transferencia</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography sx={{fontWeight:'600'}}>{expanded ? 'Cerrar' : 'Elegir'}</Typography>
                </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Box component='form'>
                <TextField
                        className='field'
                        id='Bank'
                        label='Banco'
                        type='text'
                        variant='outlined'
                        fullWidth
                        // helperText={emailError.message}
                        // error={emailError.emailError}
                        // value={email}
                        // onChange={(e)=> setEmail(e.target.value)}
                        sx={{
                            my:1
                        }}
                    />
                <TextField
                        className='field'
                        id='Bank'
                        label='Banco'
                        type='text'
                        variant='outlined'
                        fullWidth
                        // helperText={emailError.message}
                        // error={emailError.emailError}
                        // value={email}
                        // onChange={(e)=> setEmail(e.target.value)}
                        sx={{
                            my:1,
                        }}
                    />
                <TextField
                        className='field'
                        id='Bank'
                        label='Banco'
                        type='text'
                        variant='outlined'
                        fullWidth
                        // helperText={emailError.message}
                        // error={emailError.emailError}
                        // value={email}
                        // onChange={(e)=> setEmail(e.target.value)}
                        sx={{
                            my:1
                        }}
                    />
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Payment;
