/** @type {import('next').NextConfig} */
const nextConfig = {
  //Agrego esto para permitir imagenes solo de este dominio
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:'images.unsplash.com'
      }
    ]
  }
};

export default nextConfig;
