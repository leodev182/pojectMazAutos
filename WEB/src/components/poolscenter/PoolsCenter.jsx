import React, { useContext } from 'react';
import { Grid, Container } from '@mui/material';
// import Grid from '@mui/material/Unstable_Grid2';
import PoolCard from '../poolcard/PoolCard';
import { MyContext } from "../../context/PoolsContext";

const PoolsCenter = () => {
    const {pools} = useContext(MyContext);
  return (
    <Container maxWidth="" id="pools" xs={{width:'100vw'}} md={{width:'90vw'}} sx={{
        display:'flex',
        justifyContent:'center',
        bgcolor:'#eceff1'
      }}>
      <Grid container sx={{
          p:1,
          m:1,
          display:'flex',
          justifyContent:'space-evenly'
        }}>
              {pools.map((p) => (
                  <Grid item xs={12} md={5.7} lg={3.8} sx={{ mb: 2, mt: 2 }} key={p.id}>
                    <PoolCard pool={p} edit={true}/>
                  </Grid>
              ))}
      </Grid>
  </Container>
  )
}

export default PoolsCenter