//import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import CircleIcon from '@mui/icons-material/Circle';
import FormHelperText from '@mui/material/FormHelperText';

const LogIn = () => {
  const label = { inputProps: { 'aria-label': 'Size switch demo' } };
  return <div>
            <Box
                    sx={{ p: 2, 
                    bgcolor: "#DCDCDC",
                    display:"flex",
                    justifyContent:"center",
                    flexDirection:"column",
                    height:"1018px", 
                    width:"430px" }}>
                    <Box>
                    <div>
                      <div style={{paddingRight:"40vh"}}><label><h2>Mi Perfil</h2></label></div>
                            <div  style={{
                                  display:"flex",
                                  justifyContent: "space-between",
                                  alignItems: "baselines"
                                  }}>
                              <div>
                                    <Button
                                        sx={{ borderRadius: 2, backgroundColor: "#CBCACA", padding: "0px"}}>
                                          <CircleIcon 
                                            sx={{ backgroundColor: "#CBCACA", padding: "0px 0px ", color:"#000000", fontSize: 60}}/>
                                    </Button>
                                    <FormHelperText>Guardar</FormHelperText>
                              </div>
                                                      
                               <div>
                                <Switch {...label} defaultChecked color="default" />
                                <FormHelperText>Subir Foto</FormHelperText>
                              </div>
                            </div>
                    </div>
                    </Box>

                    <Box  sx={{
                        my:4,
                        borderRadius: 5,
                        fontFamily: "arial"
                    }}>
                        <div>
                            <div style={{paddingRight:"44vh"}}><label> Nombre </label></div>
                            <div >
                                <TextField 
                                    type="text" 
                                    name="nombre" 
                                    variant="outlined"
                                    size="small"
                                    fullWidth
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
                                    sx={{ borderRadius: 2, backgroundColor: "#F7F6F6"}}/>
                            </div>
                        </div>
                    </Box>


                </Box>


  </div>;
};

export default LogIn;
