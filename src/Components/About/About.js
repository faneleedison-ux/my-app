import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        About
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "1rem" }}>
        Date: May 30, 2023
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
      Our website is committed to raise awareness about gender-based violence GBV in South 
      Africa and providing survivors a voice. We want to educate and enlighten the public on
       the prevalence and effect of GBV, as well as give resources and help to individuals who have 
       been touched by it. Our platform includes survivor tales, instructional information, interactive media, 
       and other resources aimed at fostering a culture of respect, dignity, and equality for everyone. Join us in 
       the battle against GBV and contribute to making the world a safer, more just place for everyone.      
       </Typography>
      
     
      
      <Typography variant="subtitle2" sx={{ marginTop: "1rem" }}>
        Written by Fanelesibonge Mbuyazi
      </Typography>
    </Box>
  );
};

export default About;