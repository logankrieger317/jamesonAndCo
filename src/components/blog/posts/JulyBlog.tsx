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
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PeopleIcon from "@mui/icons-material/People";
import StarIcon from "@mui/icons-material/Star";
import FlagIcon from "@mui/icons-material/Flag";

const JulyBlog: React.FC = () => {
  const blogMetadata = {
    title: "Freedom Special: Celebrate July with 10% Off & More! | Jameson & Co Dog Grooming",
    description:
      "Celebrate freedom this July with 10% off any service booked in July for July, August, or September! Special referral rewards and extra discounts for military, veterans, and first responders.",
    keywords:
      "July dog grooming special, 4th of July, freedom promotion, dog grooming Austin, Jameson & Co, military discount, veteran discount, first responder discount, referral program, summer grooming",
    author: "Hailey at Jameson & Co",
    publishDate: "2025-07-01",
    modifiedDate: "2025-07-01",
    image: "/images/freedom-dog-grooming.jpg",
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
      <Box sx={{ py: 6 }}>
        <Paper elevation={3} sx={{ p: 4, mb: 4, background: '#f5f5f5' }}>
          <Typography variant="h3" component="h1" color="primary" gutterBottom>
            🎆 July "Freedom" Special! 🎆
          </Typography>
          <Typography variant="h5" color="secondary" gutterBottom>
            10% OFF any service booked in July (for July, August, or September)
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Celebrate the spirit of freedom and summer with our biggest promotion yet! Whether you're a loyal client or new to Jameson & Co, we want to thank you for being part of our community.
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><FlagIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Book any service in July for July, August, or September and get 10% off!" />
            </ListItem>
            <ListItem>
              <ListItemIcon><PeopleIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Refer a friend: If they book in the 3-month window, you get 10% off every service you schedule for the rest of 2025!" />
            </ListItem>
            <ListItem>
              <ListItemIcon><MilitaryTechIcon color="primary" /></ListItemIcon>
              <ListItemText primary="Military, veterans, and first responders (with ID): automatic 10% off any service, plus an extra 10% for every referral!" />
            </ListItem>
          </List>
        </Paper>
        <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            How It Works
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><StarIcon color="secondary" /></ListItemIcon>
              <ListItemText primary="Book your July appointment (or for August/September) and mention the 'Freedom Special' to receive your discount." />
            </ListItem>
            <ListItem>
              <ListItemIcon><PeopleIcon color="secondary" /></ListItemIcon>
              <ListItemText primary="Refer a friend—if they book in July, August, or September, you get 10% off every service you schedule for the rest of the year!" />
            </ListItem>
            <ListItem>
              <ListItemIcon><MilitaryTechIcon color="secondary" /></ListItemIcon>
              <ListItemText primary="Show your military, veteran, or first responder ID for an automatic discount. Plus, get an extra 10% for every referral!" />
            </ListItem>
          </List>
        </Paper>
        <Paper elevation={0} sx={{ p: 2, background: '#fffbe6' }}>
          <Typography variant="body2" color="textSecondary">
            Call or Text: <a href="tel:737-263-7002" style={{ color: '#d32f2f' }}>(737)-263-7002</a> | Email: <a href="mailto:info@jcoatx.com" style={{ color: '#d32f2f' }}>info@jcoatx.com</a>
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Just mention "July Freedom Special" when booking! See <a href="/terms">Terms & Conditions</a> for details.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default JulyBlog; 