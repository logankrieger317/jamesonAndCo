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
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import StarIcon from "@mui/icons-material/Star";
import PetsIcon from "@mui/icons-material/Pets";
import ScheduleIcon from "@mui/icons-material/Schedule";

const KyleBudaBlog: React.FC = () => {
  const blogMetadata = {
    title: "Dog Grooming Services in Austin, Kyle & Buda, Texas | Jameson & Co - Your Local Pet Groomer",
    description:
      "Professional dog grooming services conveniently located for Austin, Kyle and Buda, Texas residents. Serving South Austin, Plum Creek, Steeplechase, Garlic Creek, Whispering Hollow and surrounding areas. Expert grooming for all breeds.",
    keywords:
      "dog grooming Austin TX, dog grooming Kyle TX, dog grooming Buda TX, South Austin dog groomer, Plum Creek dog groomer, Steeplechase pet grooming, Garlic Creek dog services, Whispering Hollow pet care, Kyle Texas dog grooming, Buda Texas pet spa, FM1626 dog groomer, Austin area dog grooming, local dog groomer Austin, local dog groomer Kyle, local dog groomer Buda",
    author: "Hailey at Jameson & Co",
    publishDate: "2025-01-15",
    modifiedDate: "2025-01-15",
    image: "/images/austin-kyle-buda-dog-grooming.jpg",
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
            🐕 Dog Grooming Services in Austin, Kyle & Buda, Texas
          </Typography>
          <Typography variant="h5" color="secondary" gutterBottom>
            Convenient Professional Pet Care for Austin Metro & Hays County Residents
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            At Jameson & Co, we're proud to serve the growing communities of Austin, Kyle, and Buda, Texas with professional dog grooming services. Our strategic location on FM1626, positioned on the border of all three cities, makes us easily accessible for pet parents throughout the Austin metro area and Hays County.
          </Typography>
        </Paper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                <LocationOnIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Austin, Texas Service Area
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="South Austin - Professional grooming for all breeds" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Southwest Austin - Expert pet care and styling" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Oak Hill - Convenient location for busy families" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Sunset Valley - Stress-free grooming environment" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Manchaca - Local business supporting local pets" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Circle C Ranch - Premium pet care services" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                <LocationOnIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Kyle, Texas Service Area
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Plum Creek - Professional grooming services" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Steeplechase - Expert pet care and attention" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Kyle Crossing - Convenient access for pet parents" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Indian Springs - Local grooming for local pets" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Downtown Kyle - Supporting the Kyle community" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" color="primary" gutterBottom>
                <LocationOnIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                Buda, Texas Service Area
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Garlic Creek - Professional grooming services" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Whispering Hollow - Expert pet care and attention" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Sunfield - Convenient access for pet parents" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Stagecoach - Local grooming for local pets" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
                  <ListItemText primary="Downtown Buda - Supporting the Buda community" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            <DirectionsCarIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
            Strategic Location & Easy Access
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Located at 820 FM1626 in Austin, our salon is strategically positioned on the border of Austin, Kyle, and Buda to serve all three communities:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><ScheduleIcon color="secondary" /></ListItemIcon>
              <ListItemText 
                primary="From Austin: 5-15 minute drive" 
                secondary="Easy access via FM1626 or I-35" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><ScheduleIcon color="secondary" /></ListItemIcon>
              <ListItemText 
                primary="From Kyle: 15-20 minute drive" 
                secondary="Convenient route via FM1626" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><ScheduleIcon color="secondary" /></ListItemIcon>
              <ListItemText 
                primary="From Buda: 10-15 minute drive" 
                secondary="Quick access via FM1626" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><PetsIcon color="secondary" /></ListItemIcon>
              <ListItemText 
                primary="Ample parking available" 
                secondary="Easy drop-off and pick-up for your pets" 
              />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="primary" gutterBottom>
            Why Choose Jameson & Co for Austin Metro Pet Care?
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Strategic Border Location" 
                secondary="Conveniently positioned to serve Austin, Kyle, and Buda residents" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Experienced Groomer" 
                secondary="Over 10 years of professional grooming experience" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
              <ListItemText 
                primary="All Breeds Welcome" 
                secondary="From small breeds to large dogs, we handle them all" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Stress-Free Environment" 
                secondary="Calm, comfortable setting for anxious pets" 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon><StarIcon color="primary" /></ListItemIcon>
              <ListItemText 
                primary="Flexible Scheduling" 
                secondary="Appointments available Monday-Sunday, 10 AM - 6 PM" 
              />
            </ListItem>
          </List>
        </Paper>

        <Paper elevation={0} sx={{ p: 2, background: '#fffbe6' }}>
          <Typography variant="body2" color="textSecondary">
            <strong>Ready to book your pet's grooming?</strong> Call or Text: <a href="tel:737-263-7002" style={{ color: '#d32f2f' }}>(737)-263-7002</a> | Email: <a href="mailto:info@jcoatx.com" style={{ color: '#d32f2f' }}>info@jcoatx.com</a>
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Mention you're from Austin, Kyle, or Buda for special attention to your booking!
          </Typography>
        </Paper>
      </Box>
    </>
  );
};

export default KyleBudaBlog; 