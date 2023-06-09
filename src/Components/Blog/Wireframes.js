import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ImagesSlider from "../Design/ImagesSlider";
import ImagesSlider2 from "../Design/ImagesSlider2";
import { Link } from "react-router-dom";


const Wireframes = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
        WIREFRAMES
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "1rem" }}>
        Date: May 23, 2023
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        “Your job is to build an interface that minimizes the knowledge gap
        between what users know prior to coming to your site and what they must
        know to use it properly.” - Peep Laja
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        The goal of the website is to serve as an information and educational
        site about Gender Based Violence for South Africans in the following
        ways: Engagement: Education: Donations: Advocacy & Community This
        website's wireframe was created with the following concepts in mind:
        Fitt's Law - The website's interactive features, such as the navigation
        menu and call-to-action buttons, have been built to be large and easily
        clickable, allowing visitors to interact with them more easily. Hick's
        Law - To reduce user decision-making time, the navigation menu has been
        condensed to only four basic categories. This makes it easier for
        consumers to quickly and effectively discover the information they want.
        Von Restorff Effect - A bright colour that contrasts with the rest of
        the page has been used to bring attention to crucial information, such
        as the call-to-action button inviting people to share their tales.
        Zeigarnik Effect - By providing users with an option to share their
        stories, they will be more likely to remember and engage with the
        website. This also encourages open discourse and creates a community of
        survivors who can support each other. Serial Position Effect - The most
        important information, such as the call-to-action button and navigation
        menu, has been placed in the top and canter of the page, which is where
        users' eyes are naturally drawn to first. Less important information,
        such as social media links, have been placed at the bottom of the page.
        Law of Locality - Information related to a particular topic, such as
        survivor stories and resources, have been grouped together and placed in
        close proximity to each other to make it easier for users to find what
        they're looking for.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        UI principles, Flexibility, and Hierarchy - The website has been
        designed with a clear visual hierarchy, making it easy for users to
        understand the information and navigate the site. The design is also
        flexible, meaning it can adapt to different screen sizes and devices,
        ensuring a consistent user experience across all platforms.
        Additionally, UI principles have been applied throughout the design to
        make the website intuitive and easy to use.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        HIGH FIDELITY WIREFRAMES High Fidelity Wireframe with navigation here:{" "}
        <Link
          to="https://seeherwireframe.my.canva.site/#page-1"
          target="_blank"
        >
          High Fidelity
        </Link>
      </Typography>

      <Typography>
        <ImagesSlider />
        <ImagesSlider2 />
      </Typography>

      <Typography variant="subtitle2" sx={{ marginTop: "1rem" }}>
        Written by Fanelesibonge Mbuyazi
      </Typography>
    </Box>
  );
};

export default Wireframes;
