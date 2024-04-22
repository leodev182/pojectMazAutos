import React from "react";
import { LinearProgress } from "@mui/material";

export const LoadingBar = ({ value }) => {
  return (
    <LinearProgress
      variant="determinate"
      value={(value / 10) * 100}
      sx={{
        height: "12px",
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
            linear-gradient(
              45deg,
              #020024,
              #090979,
              #00d4ff
            )
          `,
        },
      }}
    />
  );
};

// la manera de importarlo        import { LoadingBar } from "@components/loadingBar/LoadingBar.jsx";
// la manera de mandarlo por props    <LoadingBar value={8} />

// obviamente borra este mensaje XD
