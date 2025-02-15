import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_PROJECT_TOKEN;

console.log('Initializing Mixpanel with token:', MIXPANEL_TOKEN);

// Only initialize if we have a token
if (MIXPANEL_TOKEN) {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: true,
    track_pageview: true,
    persistence: 'localStorage',
    api_host: 'https://api-js.mixpanel.com',  // Use the JS-specific endpoint
    cross_subdomain_cookie: false,  // Helpful for local development
    secure_cookie: true,
    batch_requests: false,  // Disable batching for testing
    loaded: function(mixpanel) {
      console.log('Mixpanel loaded successfully');
    }
  });

  // Send an immediate test event
  console.log('Sending test event...');
  mixpanel.track('Test Event', {
    type: 'initialization',
    timestamp: new Date().toISOString()
  }, function(response) {
    console.log('Test event response:', response);
  });
} else {
  console.error('No Mixpanel token found');
}

// Helper function to track events
export const trackEvent = (eventName, properties = {}) => {
  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel not initialized: Missing project token');
    return;
  }

  console.log(`Tracking event: ${eventName}`, properties);

  try {
    mixpanel.track(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
      $current_url: window.location.href,
      $pathname: window.location.pathname,
      environment: import.meta.env.DEV ? 'development' : 'production'
    }, function(response) {
      console.log(`Event ${eventName} tracked:`, response);
    });
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

// Specific event tracking functions
export const trackBookNowClick = (location) => {
  console.log('Book Now button clicked at location:', location);
  
  const eventName = 'Book Now Clicked';
  const properties = {
    location,
    referrer: document.referrer,
    device_type: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? 'mobile' : 'desktop',
    timestamp: new Date().toISOString(),
    environment: import.meta.env.DEV ? 'development' : 'production'
  };

  console.log(`Sending ${eventName} event with properties:`, properties);
  trackEvent(eventName, properties);
};

// Export for use in components
export default mixpanel;
