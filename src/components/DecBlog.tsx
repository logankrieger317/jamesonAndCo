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
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WarningIcon from "@mui/icons-material/Warning";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DecBlog: React.FC = () => {
  const blogMetadata = {
    title: "Holiday Grooming Tips: Keep Your Pup Festive & Fresh! | Jameson & Co Dog Grooming",
    description: "Expert winter grooming tips for your dog from Austin's premier grooming service. Learn about winter coat care, paw protection, and holiday scheduling at Jameson & Co.",
    keywords: "holiday dog grooming, winter pet care, Austin dog grooming, paw protection, winter coat care, Christmas pet grooming, Jameson & Co",
    author: "Hailey at Jameson & Co",
    publishDate: "2023-12-01",
    modifiedDate: "2023-12-01",
    image: "/images/winter-dog-grooming.jpg"
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
          🎄 Holiday Grooming Tips: Keep Your Pup Festive & Fresh! 🎄
        </Typography>

        <Typography variant="body1" paragraph>
          As we embrace the holiday season, Jameson & Co Dog Grooming wants to ensure your furry friend stays comfortable and well-groomed during these festive times. Here are some essential tips and updates for the holiday season:
        </Typography>

        <List sx={{ my: 4 }}>
          <ListItem>
            <ListItemIcon>
              <BathtubIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Winter Coat Care"
              secondary="Regular grooming is crucial during winter to prevent matting from winter gear and maintain a healthy coat that provides proper insulation."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PetsIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Paw Protection"
              secondary="We'll pay special attention to paw pads, trimming the hair between toes to prevent ice and salt buildup during winter walks."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LocalFloristIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Holiday Hazards"
              secondary="Keep your pets away from holiday plants like poinsettias, mistletoe, and pine needles, which can be harmful if ingested."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CalendarMonthIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Holiday Schedule"
              secondary="Book your holiday grooming appointments early as our schedule fills up quickly during this festive season!"
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
            <WarningIcon sx={{ mr: 1 }} /> Holiday Hours & Availability
          </Typography>
          <Typography variant="body1" paragraph>
            We will be adjusting our hours during the holiday season. Please note that we will be closed on December 24th, 25th, and January 1st. Limited appointments are available between Christmas and New Year's.
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
          Don't wait until the last minute! Schedule your holiday grooming appointment today to ensure your furry friend looks their best for all those holiday photos and family gatherings.
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontStyle: "italic" }}>
          🐾 Wishing you and your pets a joyful holiday season,
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

export default DecBlog;
