import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DriveEta from '@mui/icons-material/DriveEta';
import Box from '@mui/material/Box';

const Login = () => {
  return (
    <div className='continer'>
      
    <Box  
          sx={{ p: 2, 
          bgcolor: "#DCDCDC",
          display:"flex",
          justifyContent:"center",
          flexDirection:"column",
          height:"702px", 
          width:"430px" }}>
        <Box 
            sx={{mt:0, px:12,
            display:"flex",
            flexDirection:"row",
            alignContent:"flex-end" ,
            justifyContent:"space-evenly",
            alignItems:"center"
          }}>
            <div><h2>Bienvenido</h2></div>
            <div><DriveEta sx={{ fontSize: 50 }} /></div>
        </Box>

        <Box 
          sx={{ p: 3, mt:3, 
            height:"236px",
            marginTop:"276px",
            my:4,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around",
            component:"section",
            borderRadius: 5,
            bgcolor: "#BABABA"}}>
            <TextField 
              type="text" 
              name="email" 
              label="email"  
              variant="outlined" 
              sx={{ border: "1px", borderRadius: 2, bgcolor: "#ffffff"}}/>
            <TextField 
              type="password" 
              name="contraseña" 
              label="contraseña" 
              variant="outlined" 
              sx={{ border: "1px", borderRadius: 2, bgcolor: "#ffffff"}} />
            <Button 
              style={{
              backgroundColor: "#DCDCDC",
              padding: "18px 36px",
              fontSize: "18px",
              color: "#000000"
              }}
              variant="text" 
              size="large" sx={{ borderRadius: 2}}>Log in</Button>
        </Box>

        <Box 
          sx={{pt:2}}>
            <p>¿Olvidaste tu contraseña?</p>
            <p>O</p>
            <p>Registrate</p>
        </Box>

        <Box 
          sx={{display:"flex",
            flexDirection:"column"}}
          >
           <Button 
            style={{
              backgroundColor: "#ffffff",
              padding: "18px 36px",
              fontSize: "18px",
              color: "#000000"}}
            variant="contained" size="large" >Log in with Google </Button>
        </Box>
    </Box>
    </div>
  )
}

export default Login
