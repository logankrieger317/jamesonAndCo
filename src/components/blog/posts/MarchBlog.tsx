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
  Divider,
} from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import SpaIcon from "@mui/icons-material/Spa";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import StarIcon from "@mui/icons-material/Star";

const MarchBlog: React.FC = () => {
  const blogMetadata = {
    title: "Spring Skin Care Tips for Your Dog | Jameson & Co Dog Grooming",
    description:
      "Learn how to care for your dog's dry, flaky skin during seasonal changes. Get 25% off tea tree conditioner and discover diet tips for a healthy coat from Austin's premier dog grooming service.",
    keywords:
      "dog skin care, tea tree conditioner, tea tree oil, tea tree shampoo, healthy dog coat, spring grooming, Austin dog grooming, pet nutrition, Jameson & Co",
    author: "Hailey at Jameson & Co",
    publishDate: "2024-03-01",
    modifiedDate: "2024-03-01",
    image: "/images/spring-dog-grooming.jpg",
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
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Paper
          elevation={3}
          sx={{ p: 4, maxWidth: "800px", mx: "auto", my: 4 }}
        >
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
            🌸 Spring Skin Care Tips for Your Dog 🌸
          </Typography>

          <Typography variant="body1" paragraph>
            Dear Valued Customers,
          </Typography>

          <Typography variant="body1" paragraph>
            As winter fades and spring begins, many dogs experience dry, flaky
            skin due to the seasonal shift. Just like us, our furry friends need
            a little extra moisture and care during this time of year!
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#dc2626", fontWeight: "bold" }}
            >
              🐶 Common Signs of Seasonal Dry Skin:
            </Typography>
            <List>
              {[
                "Excessive scratching or licking",
                "Dandruff or flaky skin",
                "A dull, brittle coat",
                "Redness or irritation",
              ].map((item, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleOutlineIcon sx={{ color: "#dc2626" }} />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ bgcolor: "#fef2f2", p: 3, borderRadius: 2, my: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#dc2626", fontWeight: "bold" }}
            >
              💧 Moisturize & Soothe with 25% Off Tea Tree Conditioner!
            </Typography>
            <Typography variant="body1" paragraph>
              To help your pup stay comfortable and itch-free, Jameson & Co Dog
              Grooming is offering 25% off our nourishing tea tree conditioner
              throughout March! 🌿
            </Typography>
            <List>
              {[
                "Hydrate and soothe dry, itchy skin",
                "Reduce dandruff and restore a healthy coat",
                "Provide a fresh, clean scent",
              ].map((benefit, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <StarIcon sx={{ color: "#dc2626" }} />
                  </ListItemIcon>
                  <ListItemText primary={benefit} />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#dc2626", fontWeight: "bold" }}
            >
              🥑 Feed Their Coat: Diet Tips for Healthy Skin & Fur
            </Typography>
            <Typography variant="body1" paragraph>
              What your dog eats plays a huge role in skin and coat health! Try
              adding these nutrient-rich foods to their diet:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <RestaurantIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Fish Oil (Omega-3s)"
                  secondary="Supports soft, shiny fur and reduces inflammation (try salmon, sardines, or fish oil supplements)."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RestaurantIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Lean Proteins"
                  secondary="Helps repair and strengthen skin (opt for high-quality meats like chicken, beef, or turkey)."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RestaurantIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Healthy Fats"
                  secondary="Moisturizes skin from within (add small amounts of coconut oil or olive oil to their food)."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RestaurantIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Eggs"
                  secondary="Packed with biotin and essential fatty acids for a strong, glossy coat."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RestaurantIcon sx={{ color: "#dc2626" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Vitamin-rich veggies"
                  secondary="Carrots, sweet potatoes, and spinach provide vitamins A & E, which nourish the skin."
                />
              </ListItem>
            </List>
          </Box>

          <Box sx={{ bgcolor: "#fef2f2", p: 3, borderRadius: 2, my: 4 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#dc2626", fontWeight: "bold" }}
            >
              📅 Book your appointment today and give your dog the relief they
              deserve!
            </Typography>
            <Typography variant="body1" paragraph>
              🔹 Walk-Ins Welcome! First come, first served.
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
                <ListItemText primary="Visit Us: 820 Farm to Market 1626, Austin, TX 78748" />
              </ListItem>
            </List>
          </Box>

          <Typography variant="body1" paragraph>
            Let's get your pup feeling fresh and fabulous for spring! 🌷🐾
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
        </Paper>
      </Box>
    </>
  );
};

export default MarchBlog;
