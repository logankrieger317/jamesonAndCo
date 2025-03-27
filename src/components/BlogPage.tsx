import React, { useState } from "react";
import NovBlog from "./NovBlog";
import DecBlog from "./DecBlog";
import FebBlog from "./FebBlog";
import MarchBlog from "./MarchBlog";
import AprBlog from "./AprBlog";
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Import the Footer component
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// This interface will be used for each blog post
interface BlogPost {
  id: string;
  component: React.ReactNode;
  title: string;
  preview: string;
  author: string;
  datePublished: string;
  lastModified?: string;
  image?: string;
  tags: string[];
  category: string;
}

const BlogPage: React.FC = () => {
  // This array will hold all blog posts
  const blogPosts: BlogPost[] = [
    {
      id: "april-2024",
      component: <AprBlog />,
      title: "Shedding Season is Here – Let Us Help with the Fluff!",
      preview:
        "Spring is here and so is shedding season! Learn about our special April deshedding treatments and how to keep your home fur-free.",
      author: "Hailey",
      datePublished: "2024-04-01",
      lastModified: "2024-04-01",
      image: "/images/spring-deshedding.jpg",
      tags: [
        "spring grooming",
        "deshedding",
        "seasonal care",
        "Austin pet care",
        "dog grooming"
      ],
      category: "Seasonal Tips"
    },
    {
      id: "march-2024",
      component: <MarchBlog />,
      title: "Spring Skin Care Tips for Your Dog",
      preview:
        "Learn how to care for your dog's dry, flaky skin during seasonal changes. Get 25% off tea tree shampoo and discover diet tips for a healthy coat!",
      author: "Hailey",
      datePublished: "2024-03-01",
      lastModified: "2024-03-01",
      image: "/images/spring-dog-grooming.jpg",
      tags: [
        "spring grooming",
        "skin care",
        "dog nutrition",
        "Austin pet care",
        "grooming tips",
      ],
      category: "Seasonal Care",
    },
    {
      id: "feb-2024",
      component: <FebBlog />,
      title: "Pawsitively Pampered: A Valentine's Day Treat for Your Pup!",
      preview:
        "Celebrate Valentine's Day with your furry friend! Learn about pet-safe celebrations, grooming tips, and special treats to make this Valentine's Day memorable.",
      author: "Hailey",
      datePublished: "2024-02-01",
      lastModified: "2024-02-01",
      image: "/images/valentines-dog-grooming.jpg",
      tags: [
        "Valentine's Day",
        "dog grooming",
        "pet safety",
        "Austin pet care",
        "holiday grooming",
      ],
      category: "Holiday Pet Care",
    },
    {
      id: "dec-2023",
      component: <DecBlog />,
      title: "Grooming Tips for a Festive Furry Friend",
      preview:
        "How to Keep Your Dog Looking and Feeling Great This December: Grooming Tips for a Festive Furry Friend",
      author: "Hailey",
      datePublished: "2023-12-01",
      lastModified: "2023-12-01",
      image: "/images/winter-dog-grooming.jpg",
      tags: [
        "winter grooming",
        "holiday pet care",
        "dog grooming tips",
        "Austin pets",
        "Christmas",
      ],
      category: "Seasonal Grooming",
    },
    {
      id: "nov-2023",
      component: <NovBlog />,
      title: "Pawsome Thanksgiving: Grooming Tips for a Festive Furry Friend",
      preview:
        "How to Keep Your Dog Looking and Feeling Great This November: Thanksgiving Grooming Tips and Winter Coat Care",
      author: "Hailey",
      datePublished: "2023-11-01",
      lastModified: "2023-11-01",
      image: "/images/thanksgiving-dog-grooming.jpg",
      tags: [
        "Thanksgiving",
        "winter coat care",
        "dog grooming",
        "Austin pet grooming",
        "holiday tips",
      ],
      category: "Holiday Pet Care",
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

  // Generate schema markup for the blog posts
  const generateBlogSchema = () => {
    const blogSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Jameson & Co Dog Grooming Blog",
      description:
        "Expert dog grooming tips, seasonal pet care advice, and local Austin pet resources",
      publisher: {
        "@type": "Organization",
        name: "Jameson & Co",
        logo: {
          "@type": "ImageObject",
          url: "https://jamesonandco.com/images/logo.jpg",
        },
      },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.preview,
        author: {
          "@type": "Person",
          name: post.author,
        },
        datePublished: post.datePublished,
        dateModified: post.lastModified || post.datePublished,
        image: post.image,
        keywords: post.tags.join(", "),
        articleSection: post.category,
        publisher: {
          "@type": "Organization",
          name: "Jameson & Co",
          logo: {
            "@type": "ImageObject",
            url: "https://jamesonandco.com/images/logo.jpg",
          },
        },
      })),
    };

    return JSON.stringify(blogSchema);
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: generateBlogSchema() }}
      />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            mb: 8,
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
          }}
        >
          Dog Grooming Blog
        </Typography>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <React.Fragment key={post.id}>
              <Card sx={{ maxWidth: 345, mx: "auto", mb: 4 }}>
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "auto",
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "1000px",
                    maxHeight: "90vh",
                    overflow: "auto",
                    bgcolor: "background.paper",
                    borderRadius: 2,
                    p: { xs: 2, md: 4 },
                    my: "auto",
                  }}
                >
                  <IconButton
                    onClick={handleCloseBlog}
                    sx={{
                      position: "sticky",
                      top: 0,
                      right: 0,
                      float: "right",
                      zIndex: 1,
                      bgcolor: "background.paper",
                      "&:hover": {
                        bgcolor: "action.hover",
                      },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  {openBlog &&
                    blogPosts.find((post) => post.id === openBlog)?.component}
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
