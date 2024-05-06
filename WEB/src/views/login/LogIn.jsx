//import React from "react";
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import CircleIcon from '@mui/icons-material/Circle';
import FormHelperText from '@mui/material/FormHelperText';
import Alert from '@mui/material/Alert';

const LogIn = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
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


  return <Box>

            <Box
                    sx={{ p: 2, 
                    bgcolor: "#DCDCDC",
                    display:"flex",
                    justifyContent:"center",
                    flexDirection:"column",

                    height:"100vh", 
                    width:"100vw" }}>

                    <Box  sx={{
                                my:4,
                                borderRadius: 5,
                                fontFamily: "arial"
                            }}>

                      <form action="" className="formulario" onSubmit={validarInput}>    
                            
                      {error ?  <Alert severity={alert}> {message} </Alert>: null}
                      {success?  <Alert severity={alert}> {message} </Alert>: null}
                      

                        <div>
                            <div style={{paddingRight:"44vh"}}><label> Nombre </label></div>
                            <div >
                                <TextField 
                                    type="text" 
                                    name="nombre" 
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    onChange={(e) => setNombre(e.target.value)} value={nombre}
                                    sx={{ borderRadius: 2, backgroundColor: "#F7F6F6"}}/>
                            </div>
                        </div>
                        <div>
                            <div style={{paddingTop:"2vh", paddingRight:"44vh"}}><label> Apellido </label></div>
                            <div>
                                <TextField 
                                    type="text" 
                                    name="apellido"  
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    onChange={(e) => setApellido(e.target.value)} value={apellido}
                                    sx={{ borderRadius: 2, backgroundColor: "#F7F6F6"}}/>
                            </div>
                        </div>
                        <div>
                            <div style={{paddingTop:"2vh", paddingRight:"41vh"}}><label> Contraseña </label></div>
                            <div><Button
                                    variant="contained"
                                    size="small"
                                    fullWidth
                                    sx={{ borderRadius: 2, backgroundColor: "#CBCACA", color:"#000000"}}
                                 > Cambiar contraseña </Button>
                            </div>
                        </div>
                        
                        <div>
                            <div style={{paddingTop:"2vh", paddingRight:"35vh"}}><label> Correo electronico </label></div>
                            <div> 
                                <TextField
                                type="text" 
                                name="email" 
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={(e) => setEmail(e.target.value)} value={email}
                                sx={{ borderRadius: 2, backgroundColor: "#F7F6F6"}}/>
                            </div>
                        </div>
                        <div>
                            <div style={{paddingTop:"2vh", paddingRight:"44vh"}}><label> Telefono </label></div>
                            <div><TextField 
                                type="text" 
                                name="telefono" 
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={(e) => setTelefono(e.target.value)} value={telefono}
                                sx={{border: "1px", borderRadius: 2, backgroundColor: "#F7F6F6"}}/>
                            </div>
                        
                        </div>
                        <div>
                            <div style={{paddingTop:"2vh", paddingRight:"43vh"}}><label> Empresa </label></div>
                            <div>
                                <TextField 
                                type="text" 
                                name="empresa"
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={(e) => setEmpresa(e.target.value)} value={empresa}
                                sx={{borderRadius: 2, backgroundColor: "#F7F6F6"}}/>
                            </div>
                        </div>
                        <div>
                            <div style={{paddingTop:"2vh", paddingRight:"43vh"}}> <label> Dirección </label></div>
                            <div>
                                <TextField 
                                type="text" 
                                name="direccion" 
                                variant="outlined"
                                size="small"
                                fullWidth
                                onChange={(e) => setDireccion(e.target.value)} value={direccion}
                                sx={{ borderRadius: 2, backgroundColor: "#F7F6F6"}}/>
                            </div>
                        </div>
                        <div>
                            <div style={{paddingTop:"2vh", paddingRight:"44vh"}}><label> Ciudad</label></div>
                            <div>
                                <TextField
                                    type="text" 
                                    name="ciudad"  
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    onChange={(e) => setCiudad(e.target.value)} value={ciudad}
                                    sx={{ borderRadius: 2, backgroundColor: "#F7F6F6"}}/>
                            </div>
                        </div>
                        <br />
                        <div>
                            <Button 
                              type="submit"
                              variant="contained"
                              size="small"
                              fullWidth> Enviar </Button>
                        </div>
                      </form> 
                    </Box>
                </Box>

  </Box>

};

export default LogIn;
