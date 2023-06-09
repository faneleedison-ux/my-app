import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import PropTypes from "prop-types";
import "./home.css";
import Face from "../Art/Art";


import { Link as PG } from "react-router-dom";


function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const tiers = [
  {
    title: "Theory",

    description: [
      " This folder contains the following content: dev blogs, research, and essay."
    ],
    buttonText: "Open",
    buttonVariant: "outlined",
    buttonhref: "/theory"
  },
  {
    title: "Design",

    description: [
      "This folder contains the following content: wireframes, style guides and rationale."
    ],
    buttonText: "Open",
    buttonVariant: "contained",
    buttonhref: "/design"
  },
  {
    title: "Art",

    description: [
      "This folder contains the following content: Internet Art and surviver Stories."
    ],
    buttonText: "Open",
    buttonVariant: "outlined",
    buttonhref: "/art"
  }
];

export default function Home() {
  return (
    
    <React.Fragment>




      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/*  */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        ></Typography>
      </Container>
      {/*  */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center"
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700]
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    ></Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                    ></Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <div>
                    <PG to={tier.buttonhref}>
                      <Button
                        fullWidth
                        variant={tier.buttonVariant}
                        href={tier.buttonhref}
                      >
                        {tier.buttonText}
                      </Button>
                    </PG>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
                <Face/>

        </Grid>
        

      </Container>
    
      
      
    </React.Fragment>
  );
}
