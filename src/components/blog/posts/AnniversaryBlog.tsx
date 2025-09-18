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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import CelebrationIcon from "@mui/icons-material/Celebration";
// Using public path instead of import to avoid build issues


const AnniversaryBlog: React.FC = () => {
  const blogMetadata = {
    title:
      "Three Year Anniversary Celebration - Nail Trims & Spin the Wheel | Jameson & Co Dog Grooming",
    description:
      "Join us October 4th from 10:30 AM to 1:30 PM for our three-year anniversary celebration! Nail trims and spin the wheel to win discounts and prizes at Jameson & Co Dog Grooming.",
    keywords:
      "anniversary celebration, nail trims, discounts, prizes, Austin dog grooming, Jameson & Co, three years, spin the wheel",
    author: "Hailey at Jameson & Co",
    publishDate: "2024-10-01",
    modifiedDate: "2024-10-01",
    image: "/images/anniversary-celebration.jpg",
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
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <img 
            src="/assets/Logo.png"
            alt="Jameson & Co Logo"
            style={{ 
              maxWidth: "200px", 
              height: "auto", 
              marginBottom: "1rem",
              borderRadius: "8px",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          />
          
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: "#dc2626" }}
          >
            🎉 Three Year Anniversary Celebration! 🎉
          </Typography>

          <Typography variant="body1" paragraph>
            Can you believe it? Jameson & Co Dog Grooming is celebrating THREE amazing years of keeping Austin's pups looking and feeling their best! 
          </Typography>

          <Typography variant="body1" paragraph>
            We couldn't have made it this far without our incredible community of dog parents who trust us with their furry family members. To show our appreciation, we're throwing a special celebration on <strong>October 4th</strong>!
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🗓️ Anniversary Event Details
          </Typography>

          <Box sx={{ 
            backgroundColor: "#fef2f2", 
            padding: 3, 
            borderRadius: 2, 
            border: "2px solid #dc2626",
            mb: 3
          }}>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CelebrationIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText 
                  primary="Date: October 4th" 
                  secondary="Mark your calendars!"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText 
                  primary="Time: 10:30 AM - 1:30 PM" 
                  secondary="3 hours of anniversary fun!"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText 
                  primary="Nail Trims Available" 
                  secondary="Keep those paws healthy and neat"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText 
                  primary="Spin the Wheel to Win!" 
                  secondary="Discounts and prizes await"
                />
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🎁 What You Can Expect
          </Typography>

          <Typography variant="body1" paragraph>
            This isn't just any ordinary day at the shop - we're pulling out all the stops to celebrate with you and your pups!
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText 
                primary="Professional Nail Trims" 
                secondary="Quick, safe, and stress-free nail care for your pup"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText 
                primary="Spin the Wheel Game" 
                secondary="Every spin wins! Discounts, prizes, and special offers"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText 
                primary="Anniversary Specials" 
                secondary="Exclusive deals you won't find any other time"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText 
                primary="Community Celebration" 
                secondary="Meet other dog parents and celebrate with us!"
              />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            💡 Why Nail Trims Matter
          </Typography>

          <Typography variant="body1" paragraph>
            Regular nail trims are essential for your dog's health and comfort. Long nails can cause:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Discomfort when walking or running" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Potential injuries from catching on surfaces" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Changes in gait and posture" />
            </ListItem>
          </List>

          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            Our professional nail trims ensure your pup's paws stay healthy and comfortable!
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📍 Join Us for the Celebration!
          </Typography>

          <Typography variant="body1" paragraph>
            No appointment necessary - just drop by during our celebration hours!
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <DirectionsWalkIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Walk-Ins Welcome! First come, first served on October 4th." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PhoneIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Questions? Call or Text: (737)-263-7002" />
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

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body1" paragraph>
            Thank you for three incredible years of trust, loyalty, and letting us be part of your pup's journey. We can't wait to celebrate with you and your furry family members! 🎊🐾
          </Typography>

          <Typography variant="h6" sx={{ mt: 4, fontStyle: "italic" }}>
            🐾 With gratitude and excitement,
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Hailey & The Jameson & Co Team
          </Typography>

          <Typography variant="body1" sx={{ color: "#dc2626" }}>
            Jameson & Co Dog Grooming
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default AnniversaryBlog;
