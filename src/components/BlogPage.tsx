import React, { useState } from 'react';
import NovBlog from './NovBlog';
import DecBlog from './DecBlog';
import FebBlog from './FebBlog';
import Header from './Header';  // Import the Header component
import Footer from './Footer';  // Import the Footer component
import { Container, Typography, Card, CardContent, CardActionArea, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// This interface will be used for each blog post
interface BlogPost {
  id: string;
  component: React.ReactNode;
  title: string;
  preview: string;
}

const BlogPage: React.FC = () => {
  // This array will hold all blog posts
  const blogPosts: BlogPost[] = [
    {
      id: 'feb-2024',
      component: <FebBlog />,
      title: 'Pawsitively Pampered: A Valentine\'s Day Treat for Your Pup!',
      preview: 'Celebrate Valentine\'s Day with your furry friend! Learn about pet-safe celebrations, grooming tips, and special treats to make this Valentine\'s Day memorable.'
    },
    {
      id: 'dec-2023',
      component: <DecBlog />,
      title: 'Grooming Tips for a Festive Furry Friend',
      preview: 'How to Keep Your Dog Looking and Feeling Great This December: Grooming Tips for a Festive Furry Friend'
    },
    {
      id: 'nov-2023',
      component: <NovBlog />,
      title: 'Pawsome Thanksgiving: Grooming Tips for a Festive Furry Friend',
      preview: 'How to Keep Your Dog Looking and Feeling Great This November: Thanksgiving Grooming Tips and Winter Coat Care'
    },
    // Add more blog posts here as they are created
  ];

  const [openBlog, setOpenBlog] = useState<string | null>(null);

  const handleOpenBlog = (id: string) => {
    setOpenBlog(id);
  };

  const handleCloseBlog = () => {
    setOpenBlog(null);
  };

  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h2" component="h1" sx={{ mb: 8, textAlign: 'center', fontWeight: 'bold', color: 'black' }}>
          Dog Grooming Blog
        </Typography>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <React.Fragment key={post.id}>
              <Card sx={{ maxWidth: 345, mx: 'auto', mb: 4 }}>
                <CardActionArea onClick={() => handleOpenBlog(post.id)}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.preview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

              {/* Blog post modal */}
              <Modal
                open={!!openBlog}
                onClose={handleCloseBlog}
                aria-labelledby="blog-modal"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'auto',
                  p: 2
                }}
              >
                <Box sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '1000px',
                  maxHeight: '90vh',
                  overflow: 'auto',
                  bgcolor: 'background.paper',
                  borderRadius: 2,
                  p: { xs: 2, md: 4 },
                  my: 'auto'
                }}>
                  <IconButton
                    onClick={handleCloseBlog}
                    sx={{
                      position: 'sticky',
                      top: 0,
                      right: 0,
                      float: 'right',
                      zIndex: 1,
                      bgcolor: 'background.paper',
                      '&:hover': {
                        bgcolor: 'action.hover'
                      }
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  {openBlog && blogPosts.find(post => post.id === openBlog)?.component}
                </Box>
              </Modal>
            </React.Fragment>
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;
