import React, { useState } from "react";
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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import BugReportIcon from "@mui/icons-material/BugReport";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const FleaBlog: React.FC = () => {
  const blogMetadata = {
    title:
      "Flea Alert: Protecting Your Pup During High Humidity Season | Jameson & Co Dog Grooming",
    description:
      "Learn about the recent flea surge due to humid weather and how Jameson & Co's flea & tick shampoo treatment can protect your dog from these pesky parasites.",
    keywords:
      "flea treatment, tick prevention, dog grooming, Austin pet care, Jameson & Co, humid weather, flea shampoo, parasite control, professional grooming",
    author: "Hailey at Jameson & Co",
    publishDate: "2024-08-01",
    modifiedDate: "2024-08-01",
    image: "/images/flea-prevention-dog.jpg",
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
            🦟 Flea Alert: Humidity Season is Here! 🌧️
          </Typography>

          <Typography variant="body1" paragraph>
            Hey JCo Pack! 👋
          </Typography>

          <Typography variant="body1" paragraph>
            We wanted to give you a quick heads-up—thanks to all this wet and humid weather, we've seen a big spike in fleas showing up during grooming appointments. Even pups who are mostly indoors can get hit this time of year. 🌧️🦟
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🦟 Why the Flea Boom?
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <BugReportIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Humidity = flea paradise. Moisture speeds up their life cycle." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <DirectionsWalkIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Grassy walks & shared spaces make it easy for fleas to hitch a ride." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Even well-protected pups can bring them home from parks or visits." />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🛁 What We're Doing:
          </Typography>

          <Typography variant="body1" paragraph>
            At Jameson & Co., we offer an effective flea & tick shampoo treatment that can be added to your appointment. It's gentle on your pup's skin, tough on those pesky parasites, and helps protect your home from an outbreak.
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            Just let us know at check-in, or reply to this email with: "Add flea shampoo for [Dog's Name]!"
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🏠 What You Can Do at Home:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <LocalHospitalIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Check behind the ears, near the tail, and belly for flea dirt or bites." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Keep grass trimmed and avoid tall, damp areas." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Stay consistent with your preferred flea prevention—now's the time to double-check it's working." />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📚 Want to Learn More?
          </Typography>

          <Typography variant="body1" paragraph>
            We've got tips and info on flea control over on our blog at
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontWeight: "bold", color: "#dc2626" }}>
            👉 https://www.jcoatx.com/blog
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📅 Book Your Flea Treatment Today!
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <DirectionsWalkIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Walk-Ins Welcome! First come, first served." />
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
              <ListItemText primary="Visit Us: 820 Farm to Market 1626, Austin, TX 78748" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" paragraph>
            Let's keep your pup happy, healthy, and itch-free all summer long. 🐶🛁 As always, thank you for trusting us with your furry family.
          </Typography>

          <Typography variant="h6" sx={{ mt: 4, fontStyle: "italic" }}>
            🐾 Warmly,
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            The Jameson & Co Crew
          </Typography>

          <Typography variant="body1" sx={{ color: "#dc2626" }}>
            Jameson & Co Dog Grooming
          </Typography>
        </Box>
      </Paper>

    </>
  );
};

export default FleaBlog; 