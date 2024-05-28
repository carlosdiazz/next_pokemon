/** @type {import('next').NextConfig} */
const nextConfig = {
  //Agrego esto para permitir imagenes solo de este dominio
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname:"raw.githubusercontent.com"
      }
    ]
  }
};

export default nextConfig;
