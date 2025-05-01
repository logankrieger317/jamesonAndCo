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

const MayBlog: React.FC = () => {
  const blogMetadata = {
    title:
      "May Dental Health Special - Keep Your Dog's Smile Bright | Jameson & Co Dog Grooming",
    description:
      "Learn about the importance of your dog's dental health and enjoy 20% off teeth cleaning services this May at Jameson & Co Dog Grooming.",
    keywords:
      "dog dental health, teeth cleaning, pet care, Austin dog grooming, Jameson & Co, dental hygiene, professional grooming",
    author: "Hailey at Jameson & Co",
    publishDate: "2024-05-01",
    modifiedDate: "2024-05-01",
    image: "/images/dog-dental-care.jpg",
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
            🦷 Keep Your Dog's Smile Bright This May! ✨
          </Typography>

          <Typography variant="body1" paragraph>
            Did you know your dog's dental health is just as important as their
            grooming and diet?
          </Typography>

          <Typography variant="body1" paragraph>
            Dental issues can lead to bad breath, painful gums, and even serious
            health problems like heart or kidney disease. That's why May is all
            about bright smiles at Jameson & Co Dog Grooming! 🦷✨
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🐶 Common Signs Your Dog Needs a Dental Check
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Bad breath (not just 'dog breath')" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Yellow or brown buildup on teeth" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Red, swollen, or bleeding gums" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Difficulty chewing or eating" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            💧 Freshen Up with 20% Off Teeth Cleaning!
          </Typography>

          <Typography variant="body1" paragraph>
            This May, we're offering 20% off our professional dog teeth cleaning
            services to help keep your pup healthy, happy, and smiling bright.
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            Teeth cleaning helps:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Remove plaque and tartar buildup" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Prevent gum disease and tooth loss" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Improve overall health and wellness" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Leave your dog's breath fresher and cleaner" />
            </ListItem>
          </List>

          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            🥩 Bonus Tip: Add a teeth cleaning to your grooming appointment for
            a complete head-to-tail refresh!
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📅 Book your appointment today and give your pup the dental care
            they deserve!
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
            Let's keep those tails wagging and those smiles shining all spring!
            🌷🐾
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

export default MayBlog;
