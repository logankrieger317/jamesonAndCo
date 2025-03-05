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
import FavoriteIcon from "@mui/icons-material/Favorite";
import PetsIcon from "@mui/icons-material/Pets";
import BathtubIcon from "@mui/icons-material/Bathtub";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WarningIcon from "@mui/icons-material/Warning";

const FebBlog: React.FC = () => {
  const blogMetadata = {
    title: "Pawsitively Pampered: A Valentine's Day Treat for Your Pup! | Jameson & Co Dog Grooming",
    description: "Celebrate Valentine's Day with your furry friend! Learn about pet-safe celebrations, grooming tips, and special treats from Austin's premier dog grooming service.",
    keywords: "Valentine's Day dog grooming, pet-safe Valentine's treats, Austin dog grooming, holiday pet care, Jameson & Co, dog spa Austin TX",
    author: "Hailey at Jameson & Co",
    publishDate: "2024-02-01",
    modifiedDate: "2024-02-01",
    image: "/images/valentines-dog-grooming.jpg"
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
          💖 Pawsitively Pampered: A Valentine's Day Treat for Your Pup! 💖
        </Typography>

        <Typography variant="body1" paragraph>
          Love is in the air, and at Jameson & Co Dog Grooming, we believe
          Valentine's Day isn't just for humans—our four-legged friends deserve
          some extra love, too! Whether you're treating yourself or your pup to
          a special day, here are some Valentine's Day pet care tips to keep
          your furry companion safe and feeling their best:
        </Typography>

        <List sx={{ my: 4 }}>
          <ListItem>
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Beware of Chocolate & Sweets"
              secondary="Chocolate, xylitol (found in sugar-free treats), and certain candies are toxic to dogs. Keep the goodies out of reach!"
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <LocalFloristIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Pet-Friendly Bouquets"
              secondary="If you're celebrating with flowers, be mindful of toxic plants like lilies, tulips, and baby's breath. Opt for pet-safe blooms like roses, sunflowers, or orchids."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <BathtubIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Fresh & Fluffy for Valentine's"
              secondary="Treat your pup to a grooming session! A fresh coat and clean paws make for the best snuggles. Schedule your appointment before slots fill up!"
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <PetsIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="A Special Valentine's Treat"
              secondary="Show some love with dog-friendly goodies like peanut butter-filled Kongs, homemade dog biscuits, or a brand-new chew toy."
            />
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <FavoriteIcon sx={{ color: "#dc2626" }} />
            </ListItemIcon>
            <ListItemText
              primary="Extra Love & Attention"
              secondary="Sometimes, the best gift is quality time! Take your pup on a long walk, play their favorite game, or enjoy some cozy couch cuddles."
            />
          </ListItem>
        </List>

        <Box sx={{ bgcolor: "#fef2f2", p: 3, borderRadius: 2, my: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#dc2626", fontWeight: "bold" }}
          >
            🚶‍♂️ Walk-In Availability! First Come, First Serve! 🚶‍♀️
          </Typography>
          <Typography variant="body1" paragraph>
            We now offer walk-in availability for grooming services! No
            appointment? No problem! You can call, text, or simply stop by to
            check in—services are provided on a first-come, first-served basis.
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
            <WarningIcon sx={{ mr: 1 }} /> Important Announcement: Hailey Out of
            Office
          </Typography>
          <Typography variant="body1" paragraph>
            I will be out of the office from February 23rd to March 1st with
            limited access to phone and email. If you have any questions,
            comments, or concerns, please email info@jcoatx.com, and I will get
            back to you as soon as possible!
          </Typography>
        </Box>

        <Typography variant="body1" paragraph>
          Spots are filling up quickly, so book your Valentine's grooming
          appointment today to keep your pup looking fabulous for all the love
          and cuddles ahead!
        </Typography>

        <Typography variant="h6" sx={{ mt: 4, fontStyle: "italic" }}>
          🐾 With love and wags,
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

export default FebBlog;

