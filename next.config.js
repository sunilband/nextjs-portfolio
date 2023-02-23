/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org','www.freepnglogos.com',"adware-technologies.s3.amazonaws.com","res.cloudinary.com","camo.githubusercontent.com","cdn.pixabay.com","1000logos.net","github.githubassets.com","qph.cf2.quoracdn.net"],
  },
}

module.exports = nextConfig
