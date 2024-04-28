import React from "react";
import { LinearProgress } from "@mui/material";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const LoadingBar = ({ value }) => {
  return (
    <Box sx={{width:'100%', pt:2, px:2}}>
      <Box sx={{display:'flex',justifyContent:'space-between',pb:0.6}}>
        <Typography sx={{fontSize:'0.8rem'}}>
            Reservas:
        </Typography>
        <Typography sx={{fontSize:'0.8rem'}}>
            Disponibles:
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={(value / 10) * 100}
        sx={{
          height: "1.5rem",
          borderRadius: "5px",
          background: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 6px,
              #ccc 5px,
              #ccc 10px
            )
          `,
          "& .MuiLinearProgress-bar": {
            background: `
            #00ad71`,
          },
        }}
      />
    </Box>
  );
};

// la manera de importarlo        import { LoadingBar } from "@components/loadingBar/LoadingBar.jsx";
// la manera de mandarlo por props    <LoadingBar value={8} />

// obviamente borra este mensaje XD
