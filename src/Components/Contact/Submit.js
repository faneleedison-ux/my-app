import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Submit = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        Thank You for Your Submission
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        We appreciate your submission and thank you for your contribution. Your
        stories will help us improve our services and provide a better experience
        for our survivors.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        If you have any further questions or need assistance, please feel free
        to contact us on 08000 55555. We're here to help!
      </Typography>
      <Typography variant="subtitle2" sx={{ marginTop: "1rem" }}>
        - The See Her Team
      </Typography>
    </Box>
  );
};

export default Submit;
