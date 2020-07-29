const URI =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_URI
    : process.env.REACT_APP_PROD_URI;

export { URI };
