/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'api.dicebear.com',
      'lh3.googleusercontent.com',
    ],
  },
  typedRoutes: true,
}

module.exports = nextConfig
