import React from 'react'
import Booking from '../../components/booking/Booking'
import { Container } from '@mui/material';

const Bookings = () => {
  return (
    <>
      <Container sx={{
        height:'100vh',
        bgcolor:'grey',
        p:2
      }}>
        <Booking/>
      </Container>
    </>
  )
}

export default Bookings