import React from "react";
import { Helmet } from "react-helmet";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import BathtubIcon from "@mui/icons-material/Bathtub";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

const AprBlog: React.FC = () => {
  const blogMetadata = {
    title:
      "Shedding Season is Here – Spring Grooming Tips | Jameson & Co Dog Grooming",
    description:
      "Get ready for spring with our professional deshedding treatments! Learn about our special April offers and how to manage your dog's seasonal shedding.",
    keywords:
      "dog deshedding, spring grooming, pet care, Austin dog grooming, Jameson & Co, seasonal shedding, professional grooming",
    author: "Hailey at Jameson & Co",
    publishDate: "2024-04-01",
    modifiedDate: "2024-04-01",
    image: "/images/spring-deshedding.jpg",
  };

  return (
    <>
      <Helmet>
        <title>{blogMetadata.title}</title>
        <meta name="description" content={blogMetadata.description} />
        <meta name="keywords" content={blogMetadata.keywords} />
        <meta name="author" content={blogMetadata.author} />
        <meta
          property="article:published_time"
          content={blogMetadata.publishDate}
        />
        <meta
          property="article:modified_time"
          content={blogMetadata.modifiedDate}
        />
        <meta property="og:title" content={blogMetadata.title} />
        <meta property="og:description" content={blogMetadata.description} />
        <meta property="og:image" content={blogMetadata.image} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogMetadata.title} />
        <meta name="twitter:description" content={blogMetadata.description} />
        <meta name="twitter:image" content={blogMetadata.image} />
      </Helmet>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          my: 3,
          maxWidth: "800px",
          margin: "auto",
          backgroundColor: "#fff",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: "#dc2626" }}
          >
            🌼 Shedding Season is Here – Let Us Help with the Fluff! 🌼
          </Typography>

          <Typography variant="body1" paragraph>
            Dear Valued Customers,
          </Typography>

          <Typography variant="body1" paragraph>
            Spring has sprung—and so has the fur! As temperatures rise, our
            furry friends start to shed their winter coats, leaving behind tufts
            of fluff on floors, couches, and car seats.
          </Typography>

          <Typography variant="body1" paragraph>
            But don't worry—we've got you (and your dog) covered! 🐾
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🛁 April Special: Deshedding Treatment. Take $3 dollars off a
            deshedding treatment!
          </Typography>

          <Typography variant="body1" paragraph>
            At Jameson & Co Dog Grooming, we're now offering our Spring
            Deshedding Treatment all month long!
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <BathtubIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="A luxurious deshedding shampoo & conditioner to loosen dead fur" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PetsIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="A thorough extra brushing session to remove loose undercoat" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocalFloristIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="A healthier coat and less shedding around your home" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🐶 Benefits of Deshedding Treatment
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Reduces shedding by up to 80%" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Helps prevent matting and skin irritation" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Keeps your pup cool and comfortable as the weather warms" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Leaves their coat soft, shiny, and fresh-smelling!" />
            </ListItem>
          </List>

          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            This is the perfect spring reset for your dog's coat—especially for
            double-coated breeds like huskies, shepherds, labs, and corgis!
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📅 Book Now or Walk Right In!
          </Typography>

          <Typography variant="body1" paragraph>
            Avoid the hairy mess at home and treat your pup to a deep-clean
            grooming session.
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <DirectionsWalkIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Walk-Ins Welcome – First Come, First Served!" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Call or Text: (737)-263-7002" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Email: info@jcoatx.com" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Visit Us: [Your Business Address]" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" paragraph>
            Let's kick off spring with clean pups and fur-free floors! 🌸🐾
          </Typography>

          <Typography variant="h6" sx={{ mt: 4, fontStyle: "italic" }}>
            🐾 With care,
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Hailey
          </Typography>

          <Typography variant="body1" sx={{ color: "#dc2626" }}>
            Jameson & Co Dog Grooming
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default AprBlog;
