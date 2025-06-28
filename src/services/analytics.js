import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_PROJECT_TOKEN;


// Only initialize if we have a token
if (MIXPANEL_TOKEN) {
  mixpanel.init(MIXPANEL_TOKEN, {
    debug: false,
    track_pageview: true,
    persistence: 'localStorage',
    api_host: 'https://api-js.mixpanel.com',  // Use the JS-specific endpoint
    cross_subdomain_cookie: false,  // Helpful for local development
    secure_cookie: true,
    batch_requests: false,  // Disable batching for testing
    loaded: function(mixpanel) {
      // Mixpanel loaded successfully
    }
  });

}

// Helper function to track events
export const trackEvent = (eventName, properties = {}) => {
  if (!MIXPANEL_TOKEN) {
    return;
  }


  try {
    mixpanel.track(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
      $current_url: window.location.href,
      $pathname: window.location.pathname,
      environment: import.meta.env.DEV ? 'development' : 'production'
    });
  } catch (error) {
    // Error tracking event
  }
};

// Specific event tracking functions
export const trackBookNowClick = (location) => {
  
  const eventName = 'Book Now Clicked';
  const properties = {
    location,
    referrer: document.referrer,
    device_type: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/.test(navigator.userAgent) ? 'mobile' : 'desktop',
    timestamp: new Date().toISOString(),
    environment: import.meta.env.DEV ? 'development' : 'production'
  };

  trackEvent(eventName, properties);
};

// Export for use in components
export default mixpanel;
