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
  Link,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShareIcon from "@mui/icons-material/Share";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";

const JuneBlog: React.FC = () => {
  const blogMetadata = {
    title:
      "June Referral Special - Share the Love & Save 10% | Jameson & Co Dog Grooming",
    description:
      "Refer a friend this June and both you and your friend save 10% on a full groom service! Share the love of professional dog grooming with those you care about.",
    keywords:
      "dog grooming referral, Austin dog grooming, Jameson & Co, referral discount, professional grooming, full groom service, friend referral",
    author: "Hailey at Jameson & Co",
    publishDate: "2024-06-01",
    modifiedDate: "2024-06-01",
    image: "/images/friends-dogs-grooming.jpg",
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
            👥 Share the Love This June – Refer a Friend & Save! 💕
          </Typography>

          <Typography variant="body1" paragraph>
            Dear Valued Customers,
          </Typography>

          <Typography variant="body1" paragraph>
            June is all about friendship and sharing the love! We know you care
            about your furry friends, and we believe you care just as much about
            your human friends too.
          </Typography>

          <Typography variant="body1" paragraph>
            That's why we're excited to launch our June Referral Special – because
            great grooming experiences are meant to be shared! 🐾
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🎁 June Special: Refer a Friend & Both Save 10%!
          </Typography>

          <Typography variant="body1" paragraph>
            This month, when you refer a friend to Jameson & Co Dog Grooming,
            both you and your friend will receive 10% off a full groom service!
          </Typography>

          <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
            How it works:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <ShareIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Tell a friend about Jameson & Co Dog Grooming" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PeopleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Have your friend mention your name when booking their appointment" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CardGiftcardIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Both you and your friend get 10% off your next full groom service!" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            🐶 Why Share Jameson & Co?
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Professional, caring service for every pup" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Experienced groomers who treat your dog like family" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Full range of services from basic baths to complete makeovers" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Convenient location and flexible scheduling options" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Clean, safe, and stress-free environment for all dogs" />
            </ListItem>
          </List>

          <Typography variant="body1" paragraph sx={{ mt: 2 }}>
            When you refer a friend, you're not just saving money – you're helping
            another dog parent discover the quality care their furry friend deserves!
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            💝 Our Full Groom Service Includes:
          </Typography>

          <List>
            <ListItem>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Premium shampoo and conditioning treatment" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Complete brushing and de-shedding" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Professional haircut and styling" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Nail trimming and ear cleaning" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FavoriteIcon sx={{ color: "#dc2626" }} />
              </ListItemIcon>
              <ListItemText primary="Sanitary trim and final touches" />
            </ListItem>
          </List>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📋 Important Terms & Conditions
          </Typography>

          <Typography variant="body1" paragraph>
            This referral offer is valid for the month of June 2024 and applies
            to full groom services only. Some restrictions may apply.
          </Typography>

          <Typography variant="body1" paragraph>
            For complete details about our referral program and all applicable
            terms, please review our{" "}
            <Link
              href="/terms"
              sx={{
                color: "#dc2626",
                textDecoration: "underline",
                "&:hover": {
                  color: "#b91c1c",
                },
              }}
            >
              Terms & Conditions
            </Link>
            .
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#dc2626" }}>
            📅 Ready to Share the Love? Book Today!
          </Typography>

          <Typography variant="body1" paragraph>
            Don't keep this amazing deal to yourself – spread the word and save
            together!
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
              <ListItemText primary="Address: [Your Address Here]" />
            </ListItem>
          </List>

          <Typography variant="body2" sx={{ mt: 3, fontStyle: "italic" }}>
            Thank you for trusting us with your furry family members and for
            helping us grow our community of happy dogs and their loving parents! 🐕💕
          </Typography>
        </Box>
      </Paper>
    </>
  );
};

export default JuneBlog; 