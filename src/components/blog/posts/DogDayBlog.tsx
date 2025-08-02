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
import EventIcon from "@mui/icons-material/Event";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import PetsIcon from "@mui/icons-material/Pets";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PoolIcon from "@mui/icons-material/Pool";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const DogDayBlog: React.FC = () => {
  const blogMetadata = {
    title:
      "Join Us at National Spoil Your Dog Day - August 10th | Jameson & Co Dog Grooming",
    description:
      "Celebrate National Spoil Your Dog Day with Jameson & Co at South Austin Beer Garden! Join us August 10th at 1 PM for a summer paw-ty with treats, splash zones, vendors, and more.",
    keywords:
      "National Spoil Your Dog Day, dog event, Austin pet event, Jameson & Co, South Austin Beer Garden, dog grooming, pet celebration, summer paw-ty",
    author: "The Jameson & Co Team",
    publishDate: "2024-08-01",
    modifiedDate: "2024-08-01",
    image: "/images/dog-day-event.jpg",
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
            🎉 National Spoil Your Dog Day - We'll Be There! 🐕
          </Typography>

          <Typography variant="body1" paragraph>
            Hey JCo Pack! 👋
          </Typography>

          <Typography variant="body1" paragraph>
            We're thrilled to announce that Jameson & Co will be joining the fun at the National Spoil Your Dog Day celebration! Mark your calendars for <strong>Sunday, August 10th at 1 PM</strong> - it's going to be an amazing summer paw-ty! 🎊🐾
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📅 Event Details
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <EventIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Date: Sunday, August 10th" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Time: 1 PM Start" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Location: South Austin Beer Garden, 10700 Menchaca Road, Austin, TX 78748" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🎪 What to Expect at This Summer Paw-ty:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <LocalFloristIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Delicious treats for you and your furry friend" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PoolIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Splash zone for pups to cool off and have fun" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ShoppingBagIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Amazing vendors with pet products and services" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Free doggie bags for all attendees" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Free raffle for pups with amazing prizes" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            ❤️ Supporting a Great Cause
          </Typography>

          <Typography variant="body1" paragraph>
            This event isn't just about fun - it's about giving back! There will be adoptable dogs onsite looking for their forever homes, and the raffle proceeds will benefit Rescue PAC, helping more dogs in need.
          </Typography>

          <Typography variant="body1" paragraph>
            What better way to spoil your dog than by helping other dogs find loving families? 🐕💕
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🐾 Find Us at the Event!
          </Typography>

          <Typography variant="body1" paragraph>
            Look for the Jameson & Co booth! We'll be there to meet you and your pups, answer any grooming questions, and share some special event offers. Don't forget to say hi and let us give your furry friend some love! 🛁✨
          </Typography>

          <Typography variant="body1" paragraph sx={{ fontWeight: "bold" }}>
            Can't make it to the event? No worries! You can still spoil your dog with our premium grooming services.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📞 Get in Touch
          </Typography>

          <List>
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
              <ListItemText primary="Our Shop: 820 Farm to Market 1626, Austin, TX 78748" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" paragraph>
            We can't wait to see you and your pup there! Let's make this National Spoil Your Dog Day one to remember. 🎉🐶
          </Typography>

          <Typography variant="h6" sx={{ mt: 4, fontStyle: "italic" }}>
            🐾 See you there!
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

export default DogDayBlog; 