import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ComingSoon = () => {
  // Calculate the remaining days until the 25th of June
  const currentDate = new Date();
  const targetDate = new Date("June 25, 2023");
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const remainingDays = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        Coming Soon
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "1rem" }}>
        Launch Date: June 25, 2023
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Our website is currently under construction and will be launching soon.
        Stay tuned for exciting updates and content!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Countdown to Launch: {remainingDays} {remainingDays === 1 ? "day" : "days"}
      </Typography>
      <Typography variant="subtitle2" sx={{ marginTop: "1rem" }}>
        Stay connected for updates and announcements.
      </Typography>
    </Box>
  );
};

export default ComingSoon;
