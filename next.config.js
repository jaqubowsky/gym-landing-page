/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = () => {
  return {
    images: {
      domains: ["res.cloudinary.com"],
    },
    ...nextConfig,
  };
};
