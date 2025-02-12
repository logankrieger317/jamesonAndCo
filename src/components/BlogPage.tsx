import React, { useState } from 'react';
import NovBlog from './NovBlog';
import DecBlog from './DecBlog';
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
      id: 'nov-2023',
      component: <NovBlog />,
      title: 'Pawsome Thanksgiving: Grooming Tips for a Festive Furry Friend',
      preview: 'How to Keep Your Dog Looking and Feeling Great This November: Thanksgiving Grooming Tips and Winter Coat Care'
    },
    {
      id: 'dec-2023',
      component: <DecBlog />,
      title: 'Grooming Tips for a Festive Furry Friend',
      preview: 'How to Keep Your Dog Looking and Feeling Great This December: Grooming Tips for a Festive Furry Friend'
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

              <Modal
                open={openBlog === post.id}
                onClose={handleCloseBlog}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '80%',
                  bgcolor: 'background.paper',
                  border: '2px solid #000',
                  boxShadow: 24,
                  p: 4,
                }}>
                  <IconButton
                    aria-label="close"
                    onClick={handleCloseBlog}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: 8,
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  {post.component}
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
