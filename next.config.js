/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = () => {
  return {
    images: {
      domains: ["res.cloudinary.com", "https://api.cloudinary.com/v1_1/"],
    },
    ...nextConfig,
  };
};
