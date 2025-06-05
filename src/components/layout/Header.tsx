import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Container, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
// import OutOfOfficeHeader from './OutOfOfficeHeader';
import { trackBookNowClick } from '../../services/analytics';
import mixpanel from 'mixpanel-browser';

interface NavigationItem {
  name: string;
  href: string;
  onClick?: () => void;
}

const navigation: NavigationItem[] = [
  { 
    name: 'Book Now', 
    href: 'https://booking.moego.pet/ol/book?name=jamesonandcompanydoggrooming', 
    onClick: () => {
      trackBookNowClick('header_nav');
      mixpanel.track('Book Now Clicked', { 'Location': 'Header' });
    } 
  },
  { name: 'Blog', href: '/blog' }
];

export default function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <AppBar position="static" color="default" elevation={4}>
      <Box sx={{ bgcolor: 'error.main', color: 'white', py: 1, width: '100%' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ mr: 2 }}>(737)-263-7002</Typography>
            <EmailIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography variant="body2" component="a" href="mailto:info@jcoatx.com" sx={{ color: 'inherit', textDecoration: 'none' }}>
              info@jcoatx.com
            </Typography>
          </Box>
        </Container>
      </Box>
      {/* <OutOfOfficeHeader /> */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box component="a" href="https://jcoatx.com" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <Box 
              component="img" 
              src="/assets/Logo.png"
              alt="Jameson & Company Logo" 
              sx={{ 
                height: 32, 
                width: 'auto', 
                borderRadius: '50%', 
                mr: 2,
                display: 'block' // Ensures the image is always shown
              }} 
            />
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              Jameson & Company
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {navigation.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                onClick={item.onClick}
                sx={{ color: 'text.primary', textTransform: 'none', fontWeight: 600 }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={() => setMobileMenuOpen(true)}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        sx={{ display: { md: 'none' } }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">Jameson & Company</Typography>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navigation.map((item) => (
              <ListItem key={item.name} component="a" href={item.href}>
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
