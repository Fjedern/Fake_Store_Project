module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["fakestoreapi.com"],
  },

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};
