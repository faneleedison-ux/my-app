import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import image1 from "../../assets/Images/guide1.jpg";

import image2 from "../../assets/Images/guide2.png";

import image3 from "../../assets/Images/guide3.png";

const BlogPostTemplate = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "2rem",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
      STYLE GUIDE
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: "1rem" }}>
        Date: June 2, 2023
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Colour: During the design stage of this project while I was creating
        wireframes for the website I wanted the website's colour palette to
        reflect the gravity of the topic while remaining approachable and
        inclusive to all users. I had initially chose the primary colour to be a
        deep shade of purple, which is commonly used as a symbol of violence
        against women and as a show of solidarity with survivors , example is
        the famous south African website “Women For Change”, a non profit
        organization called Women For Change WFC works to uphold South African
        women's and children's constitutional rights. It was established in 2016
        by Catch Me If You Can, the largest running group for women in the
        nation. Daily, WFC promotes human rights, gender equality, and education
        on femicide, gender-based violence, and other forms of violence against
        women. The secondary colours I wanted to employ on the site were shades
        of light grey and white, creating a minimalist, uncluttered backdrop for
        the content. The interactive high fidelity website with navigation can
        be found here: https://seeherwireframe.my.canva.site/#page-1 But during
        the development stage of this project while I was coding in visual
        studio code, I realized that the purple shade for the website will not
        work because it takes away the minimalism and video game themed website
        format https://oklama.com/ see Figure 1.1 I was now aiming for. So the
        colours which were initially secondary colours are now primary colours:
        black, shades of light grey and white, creating a minimalist,
        uncluttered backdrop for the content. Figure 1.1 Oklama , Kendrick
        Lamar's website. The interactive deployed website with navigation can be
        found here:
        https://faneleedison-ux.github.io/See_Her_Interactive-Website/
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Layout: I want the layout of the website to be straightforward,
        user-friendly, and simple to browse. The homepage should include a clear
        call-to-action button or link that leads users to other pages. The pages
        should have a basic, clean structure that allows visitors to focus on
        the website's artwork and the stories of the victims that I want to post
        on the site in a tinder-like card format. Allowing the user to swipe
        left for more voice notes, news articles, documentaries and swipe right
        to donate to the victim's family. The survivor stories website will take
        advantage of the Tinder card style to promote audience engagement and
        create a visually appealing picture of the issue, making it simpler and
        more immersive to listen to these victims' experiences.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Font: I want the typeface on the website to be readable, clean, and easy
        to read. Sans-serif fonts such as Open Sans or Roboto are recommended
        since they are easier to read on displays and give the modern, clean
        aesthetic I am aiming for.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
        Design Decisions: The use of Tinder cards to showcase survivor stories
        and educational content aligns with a popular and engaging design trend
        in modern web design. Studies have shown that the use of cards as a
        design element can improve user engagement and provide an intuitive way
        to navigate content. The website's minimalist design prioritizes the
        content and simplifies the navigation, reducing distractions and
        cognitive load for users. Research has shown that minimalist design can
        enhance user engagement by streamlining the navigation and reducing
        distractions. The use of Starry Night Sky to showcase eyes following the
        cursor along with scary . wav sound playing in the background of the
        artwork will depict the emotions that women go through when going at
        night alone ( the internet art work was inspired by Figure 1.2). Figure
        1.2 : Van Gogh Starry Night In conclusion, the design style guide for my
        interactive media website should reflect the importance of the subject
        while also offering a friendly and engaging user experience. A clean,
        simple layout combined with interactive design features like Tinder
        cards may help make material more accessible and interesting, while
        colour and font selections can help develop a coherent visual brand for
        the website.
      </Typography>
       {/* Insert the images with captions */}
       <figure>
        <img src={image1} alt="Guide 1" />
        <figcaption>Figure 1.1: My Styel guide created with canva </figcaption>
      </figure>

      <figure>
        <img src={image2} alt="Guide 2" />
        <figcaption>Figure 1.2: Oklama , Kendrick Lamar's website. </figcaption>
      </figure>

      <figure>
        <img src={image3} alt="Guide 3" />
        <figcaption>Figure 1.3: Van Gogh Starry Night </figcaption>
      </figure>
      <Typography variant="subtitle2" sx={{ marginTop: "1rem" }}>
        Written by Fanelesibonge Mbuyazi
      </Typography>
    </Box>
  );
};

export default BlogPostTemplate;
