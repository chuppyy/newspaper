export const pageview = (GA_MEASUREMENT_ID, url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const gtagUpdate = (newValue) => {
  window.gtag("consent", "update", {
    analytics_storage: newValue,
  });
};
