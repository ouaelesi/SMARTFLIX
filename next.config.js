/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["www.themoviedb.org" , "image.tmdb.org"], formats: ["image/avif", "image/webp"] },
};

module.exports = nextConfig;
