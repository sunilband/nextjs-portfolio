/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org','www.freepnglogos.com',"adware-technologies.s3.amazonaws.com","res.cloudinary.com","camo.githubusercontent.com"],
  },
}

module.exports = nextConfig
