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
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EventIcon from "@mui/icons-material/Event";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WarningIcon from "@mui/icons-material/Warning";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const NovBlog: React.FC = () => {
  const blogMetadata = {
    title: "Pawsome Thanksgiving: Keep Your Pup Fresh & Festive! | Jameson & Co Dog Grooming",
    description: "Prepare your furry friend for Thanksgiving with expert grooming tips from Austin's premier dog grooming service. Learn about holiday pet safety, winter coat care, and special holiday hours.",
    keywords: "Thanksgiving dog grooming, Austin pet grooming, holiday pet safety, winter coat care, dog grooming Austin TX, Jameson & Co",
    author: "Hailey at Jameson & Co",
    publishDate: "2023-11-01",
    modifiedDate: "2023-11-01",
    image: "/images/thanksgiving-dog-grooming.jpg"
  };
  return (
    <>
      <Helmet>
        <title>{blogMetadata.title}</title>
        <meta name="description" content={blogMetadata.description} />
        <meta name="keywords" content={blogMetadata.keywords} />
        <meta name="author" content={blogMetadata.author} />
        <meta property="article:published_time" content={blogMetadata.publishDate} />
        <meta property="article:modified_time" content={blogMetadata.modifiedDate} />
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
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: "800px", mx: "auto", my: 4 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            color: "#dc2626",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
          }}
        >
          🦃 Pawsome Thanksgiving: Keep Your Pup Fresh & Festive! 🦃
        </Typography>

        <Typography variant="body1" paragraph>
          As Thanksgiving approaches, Jameson & Co Dog Grooming wants to help you prepare your furry friend for the festivities. Here are some essential tips to keep your dog looking and feeling their best during the holiday season:
        </Typography>

        <List sx={{ my: 4 }}>
          <ListItem>
            <ListItemIcon>
              <BathtubIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Pre-Holiday Grooming"
              secondary="Schedule a grooming session before the festivities to ensure your pup looks their best for family photos and guests."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <RestaurantIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Thanksgiving Safety"
              secondary="Keep your dog away from harmful foods like turkey bones, stuffing with onions/garlic, and desserts with chocolate or xylitol."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PetsIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Winter Coat Preparation"
              secondary="We'll help prepare your dog's coat for the colder months with proper grooming techniques that maintain insulation while preventing matting."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <EventIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Holiday Scheduling"
              secondary="Book your appointments early! Our holiday schedule fills up quickly, and we want to ensure your pup gets the pampering they deserve."
            />
          </ListItem>
        </List>

        <Box sx={{ bgcolor: "#fef2f2", p: 3, borderRadius: 2, my: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "#dc2626",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
            }}
          >
            <WarningIcon sx={{ mr: 1 }} /> Thanksgiving Holiday Hours
          </Typography>
          <Typography variant="body1" paragraph>
            Please note that we will be closed on Thanksgiving Day (November 23rd) to allow our team to spend time with their families. We'll have limited availability the day before and after Thanksgiving, so book your appointments early!
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Call/Text: (737)-263-7002" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Visit Us: 820 Farm to Market 1626, Austin, TX 78748" />
            </ListItem>
          </List>
        </Box>

        <Typography variant="body1" paragraph>
          Don't forget to show gratitude to your furry friends this Thanksgiving! A fresh groom is the perfect way to say "thank you" for their unconditional love and companionship.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontStyle: "italic" }}>
          🐾 Grateful for our amazing pet community,
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Hailey
        </Typography>

        <Typography variant="body1" sx={{ color: "#dc2626" }}>
          Jameson & Co Dog Grooming
        </Typography>
      </Paper>
    </Box>
    </>
  );
};

export default NovBlog;
