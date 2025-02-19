import { Box, Container, Grid, Paper, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

const dayOfWeek = [
  {
    day: "Monday",
    hours: "10:00 am - 6:00 pm",
    walkIn: "Subject to availability",
  },
  {
    day: "Tuesday",
    hours: "10:00 am - 6:00 pm",
    walkIn: "Subject to availability",
  },
  {
    day: "Wednesday",
    hours: "10:00 am - 6:00 pm",
    walkIn: "Subject to availability",
  },
  {
    day: "Thursday",
    hours: "10:00 am - 6:00 pm",
    walkIn: "Subject to availability",
  },
  {
    day: "Friday",
    hours: "10:00 am - 6:00 pm",
    walkIn: "Subject to availability",
  },
  {
    day: "Saturday",
    hours: "10:00 am - 6:00 pm",
    walkIn: "Subject to availability",
  },
  {
    day: "Sunday",
    hours: "10:00 am - 6:00 pm",
    walkIn: "Subject to availability",
  },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    boxShadow: theme.shadows[4],
    transition: 'box-shadow 0.3s ease-in-out',
  },
}));

const MapContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#DC2626', // red-600
  padding: theme.spacing(6, 0),
}));

export default function Map() {
  return (
    <MapContainer>
      <Container maxWidth="lg">
        <Paper
          elevation={8}
          sx={{
            backgroundColor: 'black',
            borderRadius: 4,
            overflow: 'hidden',
            p: 4,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Map Section */}
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
                <Typography variant="h6" color="white" align="center">
                  Located in front of{' '}
                  <Link
                    href="https://thewateringbowlatx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#F87171', // red-400
                      '&:hover': {
                        color: '#FCA5A5', // red-300
                      },
                    }}
                  >
                    The Watering Bowl!
                  </Link>
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    height: 400,
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <iframe
                    title="Jameson & Company location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3450.9008901657257!2d-97.8493661!3d30.131778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4cd161957f93%3A0x4b0219435a25c4ba!2s820%20FM1626%2C%20Austin%2C%20TX%2078748!5e0!3m2!1sen!2sus!4v1707786234962!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </Box>
              </Box>
            </Grid>

            {/* Hours and Address Section */}
            <Grid item xs={12} lg={6}>
              <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
                <Typography variant="h5" color="white" align="center" gutterBottom>
                  820 Farm to Market 1626, Austin, TX 78748
                </Typography>
                <Grid container spacing={2}>
                  {dayOfWeek.map((day) => (
                    <Grid item xs={6} sm={4} key={day.day}>
                      <StyledPaper elevation={2}>
                        <Typography variant="subtitle1" color="text.primary" fontWeight="bold">
                          {day.day}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center">
                          {day.hours}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 0.5 }}>
                          Walk In: {day.walkIn}
                        </Typography>
                      </StyledPaper>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </MapContainer>
  );
}